export default function About() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-eyebrow">
          <span className="about-dot"></span>
          <span>WORK WITH ME</span>
        </div>
        <div className="about-content">
          <h2 className="about-heading">
            I help men in their 20s and 30s create location independent
            businesses that provide real, consistent freedom.
          </h2>
          <p className="about-sub">
            Not by grinding until you break. By designing a life worth
            protecting and building a business around it.
          </p>
        </div>
      </div>
      <div className="about-arc" aria-hidden="true">
        <svg viewBox="0 0 100 1000" fill="none" preserveAspectRatio="none">
          <path
            d="M100 0 Q -50 250, 100 500 Q 250 750, 100 1000"
            stroke="#C4785A"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
