"""
Comfort1 AC - HouseCall Pro Job Report
Date Range: April 1, 2026 - April 16, 2026

Run: python comfort1_job_report.py
Requires: pip install requests gspread oauth2client
"""

import requests
import csv
import json
from datetime import datetime, timezone

API_KEY = "08f4a5678266401281b8330661bf484f"
BASE_URL = "https://api.housecallpro.com"
START_DATE = "2026-04-01T00:00:00-07:00"
END_DATE   = "2026-04-16T23:59:59-07:00"
OUTPUT_CSV = "comfort1_job_report_apr1_apr16_2026.csv"

HEADERS = {
    "Authorization": f"Token token={API_KEY}",
    "Content-Type": "application/json",
}


def fetch_all_jobs():
    jobs = []
    page = 1
    while True:
        params = {
            "scheduled_start_min": START_DATE,
            "scheduled_start_max": END_DATE,
            "page": page,
            "page_size": 100,
            "sort_direction": "desc",
        }
        r = requests.get(f"{BASE_URL}/jobs", headers=HEADERS, params=params, timeout=30)
        r.raise_for_status()
        data = r.json()
        batch = data.get("jobs", [])
        if not batch:
            break
        jobs.extend(batch)
        total_pages = data.get("total_pages", 1)
        print(f"  Fetched page {page}/{total_pages} ({len(batch)} jobs)")
        if page >= total_pages:
            break
        page += 1
    return jobs


def yesno(val):
    if val is None:
        return "No"
    if isinstance(val, bool):
        return "Yes" if val else "No"
    if isinstance(val, str):
        return "Yes" if val.strip() not in ("", "null", "false", "0") else "No"
    return "Yes" if val else "No"


def fmt_date(iso_str):
    """Format ISO timestamp to MM/DD H:MM AM/PM"""
    if not iso_str:
        return ""
    try:
        dt = datetime.fromisoformat(iso_str.replace("Z", "+00:00"))
        return dt.strftime("%-m/%-d %-I:%M %p")
    except Exception:
        return iso_str


def fmt_currency(val):
    if val is None:
        return "$0.00"
    try:
        return f"${float(val):,.2f}"
    except Exception:
        return str(val)


def process_job(job):
    # Customer name
    customer = job.get("customer", {}) or {}
    customer_name = f"{customer.get('first_name', '')} {customer.get('last_name', '')}".strip()
    if not customer_name:
        customer_name = customer.get("company_name", "")

    # Assigned technician (first pro on the job)
    assigned_pros = job.get("assigned_employees", []) or []
    tech = ""
    if assigned_pros:
        p = assigned_pros[0]
        tech = f"{p.get('first_name', '')} {p.get('last_name', '')}".strip()

    # Scheduled date
    scheduled_start = fmt_date(job.get("scheduled_start"))

    # Outstanding balance
    outstanding = fmt_currency(job.get("outstanding_balance"))

    # Timeline / status flags
    work_status = job.get("work_status", "") or ""
    on_my_way_at  = job.get("on_my_way_at")
    work_start_at = job.get("work_start_at") or job.get("started_at")
    work_end_at   = job.get("work_end_at")   or job.get("completed_at")

    omw_entered    = yesno(on_my_way_at)
    start_entered  = yesno(work_start_at)
    finish_entered = yesno(work_end_at)

    # Payment collected: balance is $0 and job is complete
    balance_val = float(job.get("outstanding_balance") or 0)
    is_complete = work_status.lower() in ("complete", "completed")
    payment_collected = yesno(is_complete and balance_val == 0.0)

    # Callback flag
    tags = [t.lower() for t in (job.get("tags") or [])]
    notes = (job.get("description") or "").lower()
    callback = yesno("callback" in tags or "call back" in tags or "callback" in notes)

    # Job summary written (non-empty notes)
    job_summary = yesno(job.get("description") or job.get("summary"))

    # Named / Google review
    review = job.get("review") or {}
    named_review = yesno(review.get("rating") or review.get("description"))

    # Comfort Club / service agreement membership
    service_plan = customer.get("service_plan") or customer.get("membership_tier") or ""
    comfort_club = yesno(service_plan)

    # Invoice number
    invoice_number = job.get("invoice_number") or job.get("id", "")

    return {
        "Invoice #":            invoice_number,
        "Customer":             customer_name,
        "Tech":                 tech,
        "Scheduled Date":       scheduled_start,
        "Outstanding Balance":  outstanding,
        "OMW Entered":          omw_entered,
        "Start Time Entered":   start_entered,
        "Finish Time Entered":  finish_entered,
        "Payment Collected":    payment_collected,
        "Callback":             callback,
        "Job Summary":          job_summary,
        "Named Review":         named_review,
        "Comfort Club":         comfort_club,
    }


def write_csv(rows):
    if not rows:
        print("No jobs found for this date range.")
        return
    fieldnames = list(rows[0].keys())
    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"\nCSV saved: {OUTPUT_CSV}  ({len(rows)} jobs)")


def upload_to_google_sheets(rows):
    """
    Optional: upload to Google Sheets.
    Requires a service account JSON key file.
    Set SERVICE_ACCOUNT_FILE below and uncomment the call in main().
    """
    SERVICE_ACCOUNT_FILE = "service_account.json"  # <- path to your Google service account key
    SHEET_NAME = "Comfort1 AC - Apr 1-16 2026 Job Report"

    try:
        import gspread
        from oauth2client.service_account import ServiceAccountCredentials
    except ImportError:
        print("\nTo upload to Google Sheets, run:  pip install gspread oauth2client")
        return

    scope = [
        "https://spreadsheets.google.com/feeds",
        "https://www.googleapis.com/auth/drive",
    ]
    creds  = ServiceAccountCredentials.from_json_keyfile_name(SERVICE_ACCOUNT_FILE, scope)
    client = gspread.authorize(creds)

    sheet = client.create(SHEET_NAME)
    ws    = sheet.get_worksheet(0)
    ws.update_title("Jobs")

    if not rows:
        return

    headers = list(rows[0].keys())
    ws.append_row(headers)
    for row in rows:
        ws.append_row(list(row.values()))

    # Share with anyone with the link (view)
    sheet.share(None, perm_type="anyone", role="reader")
    print(f"\nGoogle Sheet created: {sheet.url}")


def main():
    print(f"Fetching jobs: {START_DATE[:10]} → {END_DATE[:10]}")
    jobs = fetch_all_jobs()
    print(f"Total jobs fetched: {len(jobs)}")

    rows = [process_job(j) for j in jobs]

    write_csv(rows)

    # Uncomment the line below (and configure SERVICE_ACCOUNT_FILE above)
    # to also push the report to a new Google Sheet:
    # upload_to_google_sheets(rows)


if __name__ == "__main__":
    main()
