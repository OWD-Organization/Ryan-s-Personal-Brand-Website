export default function HowIWork() {
  return (
    <section className="howwork-section">
      <div className="howwork-photo">
        <img src="/img/ryan-jana166330.jpg" alt="Ryan Kearney" />
        <div className="howwork-caption">RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ</div>
      </div>
      <div className="howwork-content">
        <div className="howwork-top">
          <div className="howwork-eyebrow">
            <span className="howwork-dot"></span>
            <span>HOW I WORK WITH YOU</span>
          </div>
          <h2 className="howwork-heading">Three Steps to Start Building</h2>
        </div>
        <div className="howwork-steps">
          <div className="howwork-step">
            <span className="howwork-num">01</span>
            <div className="howwork-step-body">
              <h3 className="howwork-step-title">We Talk</h3>
              <p>
                Book a call. Tell me where you are, where you want to go, and
                what&apos;s getting in the way. No pitch. Just a real conversation
                about whether we&apos;re a good fit.
              </p>
            </div>
          </div>
          <div className="howwork-step">
            <span className="howwork-num">02</span>
            <div className="howwork-step-body">
              <h3 className="howwork-step-title">We Map It Out</h3>
              <p>
                I build a plan around your specific situation. Your skills, your
                goals, your lifestyle. Not a template. A path that makes sense
                for the business and the life you want to create.
              </p>
            </div>
          </div>
          <div className="howwork-step">
            <span className="howwork-num">03</span>
            <div className="howwork-step-body">
              <h3 className="howwork-step-title">We Build It Together</h3>
              <p>
                You execute with my guidance, perspective, and accountability
                behind you. I&apos;ve walked this road. I know where the potholes
                are. And I&apos;ll tell you what I wish someone had told me years
                ago.
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="howwork-cta">
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
    </section>
  );
}
