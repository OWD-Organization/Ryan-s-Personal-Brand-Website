export default function ForYou() {
  return (
    <section className="foryou-section">
      <div className="foryou-inner">
        <div className="foryou-left">
          <div className="foryou-eyebrow">
            <span className="foryou-dot"></span>
            <span>WHO THIS IS FOR</span>
          </div>
          <h2 className="foryou-heading">This Is For You If...</h2>
        </div>
        <div className="foryou-right">
          <ul className="foryou-list">
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>You&apos;re in your 20s or 30s and you want to build something real online</p>
            </li>
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>You&apos;re done consuming free content that never adds up to a clear path</p>
            </li>
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>You want consistent profit that supports your lifestyle, not a one-time spike</p>
            </li>
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>
                Location independence matters to you. You want to work from
                Pittsburgh, Phoenix, or anywhere in between
              </p>
            </li>
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>
                You care about your health, your relationships, and your quality
                of life as much as your income
              </p>
            </li>
            <li>
              <span className="foryou-check">&#10003;</span>
              <p>
                You want to learn from someone whose life you actually admire,
                not just someone who made money
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="foryou-contrast">
        <p>
          This is not a mastermind for established business owners. This is not
          a course on how to enter the marketing industry. This is personal,
          experience-driven coaching for men who want to build a business that
          fits the life they&apos;re designing.
        </p>
        <a href="#" className="foryou-cta">
          Start Building Yours
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
    </section>
  );
}
