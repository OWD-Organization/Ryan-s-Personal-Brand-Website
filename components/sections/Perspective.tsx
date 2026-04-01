export default function Perspective() {
  return (
    <section className="perspective-section">
      <div className="perspective-left">
        <h2 className="perspective-heading">
          Information Is Everywhere. Perspective Isn&apos;t.
        </h2>
        <ol className="perspective-list">
          <li>
            <span className="item-num">01</span>
            <p>
              You can learn Google Ads from a chatbot. You can find Amazon
              strategies in a free YouTube video. Every marketing tactic you
              need is already out there, indexed and searchable.{" "}
              <em>So why are you still stuck?</em>
            </p>
          </li>
          <li>
            <span className="item-num">02</span>
            <p>
              Because information without perspective is noise. You don&apos;t
              need another course that teaches you what to do. You need someone
              who has already done it, consistently, and can show you{" "}
              <em>what it actually looks like on the other side.</em>
            </p>
          </li>
          <li>
            <span className="item-num">03</span>
            <p>
              I&apos;m not selling a secret formula. I&apos;m offering something
              you can&apos;t Google: the lived experience of building a business
              that pays well, runs from anywhere, and{" "}
              <em>still leaves room for the things that matter.</em>
            </p>
          </li>
        </ol>
        <a href="#" className="perspective-cta">
          Learn more
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
      <div className="perspective-right">
        <img src="/img/ryan-jana167901.jpg" alt="Ryan Jana" />
        <div className="photo-caption">RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ</div>
      </div>
    </section>
  );
}
