import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero({ onOpenModal }) {
  const revealRef = useScrollReveal()

  return (
    <section className="hero-section" id="hero" aria-label="Welcome to Dahlia">
      <div className="hero-bg-container">
        <img
          src="/images/hero_storefront.jpg"
          alt="Dahlia storefront with grand black metal frame glass doors, lush green plants, and warm light"
          className="hero-bg-img"
          loading="eager"
        />
        <div className="hero-left-vignette"></div>
        <div className="hero-top-vignette"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-editorial-block reveal-fade-up" ref={revealRef}>
          <div className="hero-eyebrow-line"></div>
          <div className="hero-eyebrow-text">
            <span>TIMELESS STYLE</span>
            <span>FOR EVERY YOU</span>
          </div>
          <h1 className="hero-brand-headline">DAHLIA</h1>
          <p className="hero-brand-subhead">Where Style Feels Like Home</p>
          <a href="#menu" className="hero-shop-btn" id="hero-shop-btn">
            <span>SHOP NOW</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      <a href="#story" className="hero-scroll-indicator" aria-label="Scroll down to explore">
        <div className="scroll-pill">
          <span className="scroll-chevron"></span>
        </div>
      </a>
    </section>
  )
}
