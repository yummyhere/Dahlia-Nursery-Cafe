import { useState } from 'react'

export default function Footer({ onOpenModal }) {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const year = new Date().getFullYear()

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3500)
    }
  }

  return (
    <footer className="site-footer" id="site-footer">
      <div className="section-edge-decor edge-left edge-dark" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right edge-dark" aria-hidden="true"></div>
      <div className="container">
        <div className="footer-top">

          <div className="footer-brand">
            <h2 className="footer-wordmark">DAHLIA</h2>
            <p className="footer-closing-line">"Take a breath. Have a cup. Stay awhile."</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', color: 'var(--color-linen)', opacity: 0.85 }}>
              A sanctuary where plants grow wild and coffee is poured slow.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#story" className="footer-link">Our Story</a></li>
              <li><a href="#menu" className="footer-link">Seasonal Menu</a></li>
              <li><a href="#greenhouse" className="footer-link">The Greenhouse</a></li>
              <li><a href="#moments" className="footer-link">Moments</a></li>
              <li><a href="#visit" className="footer-link">Visit &amp; Hours</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Connect</h3>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram ↗</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">Pinterest ↗</a></li>
              <li><a href="tel:+15553827491" className="footer-link">+1 (555) 382-7491</a></li>
              <li><a href="mailto:hello@dahliacafe.com" className="footer-link">hello@dahliacafe.com</a></li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); onOpenModal('story-modal') }}
                >
                  Plant Doctor Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-title">The Botanical Journal</h3>
            <p>Receive monthly plant care dispatches, new harvest coffee release dates, and weekend botanical workshops.</p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                required
                aria-label="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="newsletter-btn"
                style={subscribed ? { backgroundColor: 'var(--color-moss)' } : {}}
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {year} Dahlia Botanical Café &amp; Nursery. All rights reserved.
          </div>
          <div>
            Designed with genuine care for peaceful living &amp; good coffee.
          </div>
        </div>
      </div>
    </footer>
  )
}
