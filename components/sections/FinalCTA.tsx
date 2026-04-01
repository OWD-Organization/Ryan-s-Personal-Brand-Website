export default function FinalCTA() {
  return (
    <section className="finalcta-section">
      <div className="finalcta-content">
        <div className="finalcta-eyebrow">
          <span className="finalcta-dot"></span>
          <span>LET&apos;S TALK</span>
        </div>
        <h2 className="finalcta-heading">
          Ready to Build a Life Worth Protecting?
        </h2>
        <p className="finalcta-body">
          If you&apos;re tired of consuming and ready to start building, let&apos;s
          talk. One conversation is all it takes to know if this is the right
          path for you.
        </p>
        <a href="#" className="finalcta-btn">
          Book Your Call
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <div className="finalcta-photo">
        <img src="/img/ryan-jana166939 (2).jpg" alt="Ryan Kearney" />
        <div className="finalcta-caption">
          RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ
        </div>
      </div>
    </section>
  );
}
