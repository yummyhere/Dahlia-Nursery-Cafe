import useScrollReveal from '../hooks/useScrollReveal'
import CafeStatus from './CafeStatus'

export default function VisitSection({ onOpenModal }) {
  const infoRef = useScrollReveal()
  const imgRef = useScrollReveal()

  return (
    <section className="visit-section" id="visit" aria-label="Visit Dahlia Botanical Café">
      <div className="section-edge-decor edge-left" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right" aria-hidden="true"></div>
      <div className="container">
        <div className="visit-grid">

          <div className="visit-info-col reveal-fade-up" ref={infoRef}>
            <span className="eyebrow">COME ON IN</span>
            <h2 className="visit-heading">Your little green escape awaits.</h2>

            <CafeStatus />

            <div className="visit-details-card">

              <div className="detail-block">
                <span className="detail-icon">📍</span>
                <div>
                  <h3 className="detail-meta-title">Location</h3>
                  <p className="detail-meta-text">
                    14 Cypress Lane, The Old Greenhouse Quarter<br />
                    <small style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem' }}>
                      (Just behind the Old Botanical Herbarium Garden)
                    </small>
                  </p>
                </div>
              </div>

              <div className="detail-block">
                <span className="detail-icon">⏳</span>
                <div style={{ width: '100%' }}>
                  <h3 className="detail-meta-title">Opening Days &amp; Hours</h3>
                  <ul className="hours-list">
                    <li><span>Tuesday – Friday:</span> <strong>08:30 – 19:00</strong></li>
                    <li><span>Saturday – Sunday:</span> <strong>09:00 – 20:00</strong></li>
                    <li><span>Monday:</span> <em>Closed for plant care &amp; greenhouse resting</em></li>
                  </ul>
                </div>
              </div>

              <div className="detail-block">
                <span className="detail-icon">☕</span>
                <div>
                  <h3 className="detail-meta-title">Contact &amp; Social</h3>
                  <p className="detail-meta-text">
                    Phone / WhatsApp:{' '}
                    <a href="tel:+15553827491" style={{ color: 'var(--color-forest)', fontWeight: 600 }}>+1 (555) 382-7491</a><br />
                    Instagram:{' '}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>@dahliabotanicalcafe</a>
                  </p>
                </div>
              </div>

            </div>

            <div className="visit-actions">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="get-directions-btn">
                Get Directions ↗
              </a>
              <button className="btn btn-outline" onClick={() => onOpenModal('reservation-modal')} id="visit-reserve-btn">
                Reserve a Nook
              </button>
            </div>
          </div>

          <div className="visit-image-col reveal-fade-up" ref={imgRef}>
            <div className="visit-image-frame">
              <img src="/images/visit_atmosphere.jpg" alt="Warm ambient interior of Dahlia café with cozy timber seating and glowing pendant lights" loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
