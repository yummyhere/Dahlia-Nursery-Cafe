import useScrollReveal from '../hooks/useScrollReveal'

export default function GreenhouseSection({ onOpenModal }) {
  const headerRef = useScrollReveal()
  const artRef = useScrollReveal()
  const storyRef = useScrollReveal()

  return (
    <section className="greenhouse-section" id="greenhouse" aria-label="The Greenhouse Experience">
      <div className="section-edge-decor edge-left edge-dark" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right edge-dark" aria-hidden="true"></div>
      <div className="container">

        <div className="greenhouse-header reveal-fade-up" ref={headerRef}>
          <span className="eyebrow eyebrow-light">— THE NURSERY SANCTUARY • GULBERG II, LAHORE</span>
          <h2 className="greenhouse-title">
            A cafe built inside a <em className="terracotta-italic">living</em> botanical nursery.
          </h2>
          <p className="greenhouse-intro">
            Dahlia is not merely decorated with greenery—it is an authentic cafe thriving within an active botanical nursery.
            Guests dine surrounded by mature tropical flora, terracotta collections, and sun-drenched greenhouse rafters.
          </p>
        </div>

        <div className="greenhouse-architecture-grid">

          <div className="greenhouse-art-col reveal-fade-up" ref={artRef}>
            <div className="organic-art-frame">
              <svg className="organic-art-svg" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="greenhouse-blob-mask">
                    <path d="M190,36 C270,16 360,42 422,102 C484,162 510,248 480,332 C450,416 374,472 284,488 C194,504 114,474 68,412 C22,350 14,272 38,198 C62,124 110,56 190,36 Z" />
                  </clipPath>
                </defs>
                <path className="blob-line-outermost"
                  d="M195,14 C285,-8 382,20 450,86 C518,152 546,250 512,346 C478,442 392,504 292,520 C192,536 100,502 48,432 C-4,362 -12,274 14,190 C40,106 105,36 195,14 Z"
                  fill="none" stroke="rgba(101, 140, 110, 0.35)" strokeWidth="1.8" strokeDasharray="6 4" />
                <path className="blob-line-middle"
                  d="M192,26 C278,4 372,32 436,94 C500,156 528,248 496,338 C464,428 384,488 288,504 C192,520 106,488 58,422 C10,356 2,272 26,194 C50,116 106,48 192,26 Z"
                  fill="none" stroke="rgba(101, 140, 110, 0.65)" strokeWidth="2.4" />
                <path className="blob-line-inner"
                  d="M190,36 C270,16 360,42 422,102 C484,162 510,248 480,332 C450,416 374,472 284,488 C194,504 114,474 68,412 C22,350 14,272 38,198 C62,124 110,56 190,36 Z"
                  fill="none" stroke="#2D4D38" strokeWidth="3.5" />
                <g clipPath="url(#greenhouse-blob-mask)">
                  <image href="/images/greenhouse_shelves.jpg" x="0" y="0" width="540" height="520" preserveAspectRatio="xMidYMid slice" className="blob-svg-image" />
                </g>
              </svg>
            </div>
          </div>

          <div className="greenhouse-story-col reveal-fade-up" ref={storyRef}>
            <span className="eyebrow eyebrow-light">— LIVING ARCHITECTURE</span>
            <h3 className="story-col-title">
              Sunlight through timber rafters, roots in <em className="terracotta-italic">living</em> soil.
            </h3>
            <p className="story-col-lead">
              When you step into Dahlia, the bustling streets of Gulberg II melt away into the gentle rustle
              of monstera leaves and the rich aroma of freshly extracted espresso.
            </p>
            <p className="story-col-subtext">
              Our nursery tables are integrated naturally within active growing beds, where 140+ tropical
              specimens create an organic microclimate that cools and oxygenates the entire space.
            </p>

            <div className="greenhouse-feature-list">
              <div className="feature-bullet-item">
                <span className="feature-check-icon">✓</span>
                <div>
                  <h4 className="feature-item-title">Active Greenhouse Nursery</h4>
                  <p className="feature-item-desc">High-vaulted conservatory ceilings allowing natural morning and golden-hour light to filter through.</p>
                </div>
              </div>
              <div className="feature-bullet-item">
                <span className="feature-check-icon">✓</span>
                <div>
                  <h4 className="feature-item-title">Hand-Thrown Terracotta &amp; Living Roots</h4>
                  <p className="feature-item-desc">All potted plants, handmade ceramics, and botanical plant care tinctures on our shelves are available to adopt into your own home.</p>
                </div>
              </div>
            </div>

            <div className="greenhouse-actions-wrap">
              <a href="#visit" className="btn btn-outline-light">Ask a Botanist</a>
              <button className="btn btn-primary" onClick={() => onOpenModal('reservation-modal')}>Reserve a Table</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
