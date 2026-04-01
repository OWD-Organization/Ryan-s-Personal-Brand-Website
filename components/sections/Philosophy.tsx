export default function Philosophy() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-arc" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none">
          <path
            d="M0 330 Q 110 110, 330 0"
            stroke="#C4785A"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="philosophy-inner">
        <div className="philosophy-top">
          <div className="philosophy-eyebrow">
            <span className="philosophy-dot"></span>
            <span>THE PHILOSOPHY</span>
          </div>
          <h2 className="philosophy-heading">
            Start With the Life. Reverse Engineer the Business.
          </h2>
        </div>
        <div className="philosophy-divider"></div>
        <div className="philosophy-body">
          <div className="philosophy-col">
            <p>
              Most people start with tactics. Pick a niche. Run ads. Scale. They
              build the machine first and hope the life comes later. It usually
              doesn&apos;t.
            </p>
            <p className="philosophy-pullquote">I work the other way.</p>
            <p>
              Start with the big, intangible idea. The life you actually want to
              live. Where you want to wake up. Who you want next to you. How you
              want your days to feel. That&apos;s the starting point.
            </p>
          </div>
          <div className="philosophy-col">
            <p>
              Then we bring it down into something concrete. A business model
              that supports it. Daily habits that sustain it. Relationships that
              grow alongside it. From the abstract to the tangible. From the
              vision to the reality.
            </p>
            <p>
              That&apos;s not motivational talk. That&apos;s how I built my own life.
              And it&apos;s the framework behind everything I teach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
