export default function MyStory() {
  return (
    <section className="story-section">
      <div className="story-arc" aria-hidden="true">
        <svg
          viewBox="0 0 400 800"
          fill="none"
          preserveAspectRatio="xMaxYMid meet"
        >
          <path
            d="M 400 0 Q 20 400, 400 800"
            stroke="#C4785A"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="story-top">
        <div className="story-eyebrow">
          <span className="story-dot"></span>
          <span>MY STORY</span>
        </div>
        <h2 className="story-heading">
          From Side Hustle to Location Independent Business
        </h2>
      </div>
      <div className="story-timeline">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            <span className="timeline-num">01</span>
            <span className="timeline-label">The Beginning</span>
          </div>
          <p>
            I started by promoting services online through social media.
            Instagram, Facebook, YouTube. I learned what worked by doing it, not
            by reading about it.
          </p>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            <span className="timeline-num">02</span>
            <span className="timeline-label">The Pivot</span>
          </div>
          <p>
            When COVID hit, I pivoted hard into e-commerce. While most people
            were scrambling, I found opportunity selling products on Amazon and
            through Google Ads. That season was devastating for a lot of people.
            For me, it became one of the most abundant and fruitful stretches of
            my career because I had the online skills to adapt.
          </p>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            <span className="timeline-num">03</span>
            <span className="timeline-label">The Agency</span>
          </div>
          <p>
            Those skills opened doors. Business owners started asking for help.
            Freelance consulting turned into a full marketing agency offering
            Google Ads management, Amazon listing optimization, and conversion
            strategy.
          </p>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            <span className="timeline-num">04</span>
            <span className="timeline-label">The Growth</span>
          </div>
          <p>
            About three years in, I expanded into local service businesses.
            Community members who needed help getting visible when foot traffic
            disappeared. When stimulus money started flowing, my clients were
            positioned to capture it. That&apos;s how the agency found its
            footing and has grown ever since.
          </p>
        </div>
      </div>

      {/* Banner card subsection */}
      <div className="banner-card">
        <div className="banner-photo">
          <img src="/img/ryan-jana167897.jpg" alt="Ryan Kearney" />
          <div className="banner-photo-caption">
            RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ
          </div>
        </div>
        <div className="banner-panel">
          <div className="banner-panel-top">
            <p className="banner-body">
              Through all of it, one thing stayed constant: I built this
              business to support my life, not replace it. And now I help other
              men do the same.
            </p>
          </div>
          <div className="banner-panel-bottom">
            <span className="banner-cta-text">Start Building Yours</span>
            <a
              href="#"
              className="banner-circle-btn"
              aria-label="Start Building Yours"
            >
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
                  d="M7 17L17 7M7 7h10v10"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
