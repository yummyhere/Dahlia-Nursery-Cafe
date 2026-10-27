import { useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function DateSpotSection({ onOpenModal }) {
  const textPathRef = useRef(null)
  const imgRef = useScrollReveal()
  const contentRef = useScrollReveal()

  useEffect(() => {
    let offset = 0
    let lastTime = performance.now()
    let animId

    function tick(now) {
      const delta = (now - lastTime) / 1000
      lastTime = now
      offset -= 1.6 * delta
      if (offset <= -40) offset = 0
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', `${offset}%`)
      }
      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="date-spot-section" id="date-spot" aria-label="Intimate Date Spot Experience">
      <div className="section-edge-decor edge-left" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right" aria-hidden="true"></div>

      <div className="date-spot-wave-wrap" aria-hidden="true">
        <svg className="date-spot-wave-svg" viewBox="0 0 1600 620" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="date-wave-center-path" d="M -300, 420 C 60, 470, 320, 290, 720, 290 C 1100, 290, 1300, 60, 1920, 100" fill="none" />
          </defs>
          <path className="wave-boundary-line"
            d="M -300, 392 C 60, 442, 320, 262, 720, 262 C 1100, 262, 1300, 32, 1920, 72"
            fill="none" stroke="#263D30" strokeWidth="1.2" opacity="0.38" />
          <path className="wave-boundary-line"
            d="M -300, 448 C 60, 498, 320, 318, 720, 318 C 1100, 318, 1300, 88, 1920, 128"
            fill="none" stroke="#263D30" strokeWidth="1.2" opacity="0.38" />
          <text className="date-wave-text" dy="5">
            <textPath ref={textPathRef} id="date-wave-textpath" href="#date-wave-center-path" startOffset="0%">
              You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. · You, me, and a little more time. ·&nbsp;
            </textPath>
          </text>
        </svg>
      </div>

      <div className="container date-spot-container">
        <div className="date-spot-wrapper">

          <div className="date-spot-image-col reveal-fade-up" ref={imgRef}>
            <div className="date-circle-ring-outer">
              <div className="date-circle-ring-inner">
                <img src="/images/date_spot.jpg" alt="Two warm cappuccinos and dessert in the intimate date nook" className="date-circle-img" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="date-spot-content-col reveal-fade-up" ref={contentRef}>
            <span className="eyebrow">SLOW CONVERSATIONS &mdash;</span>
            <h2 className="date-spot-tagline">You, me, and a little more time.</h2>
            <p className="date-spot-desc">For the long conversations, shared desserts, unplanned afternoons, and the kind of moments you wish would last a little longer.</p>
            <p className="date-spot-desc date-spot-subtext">Tucked away behind climbing pothos and vintage timber screens, our intimate two-person nooks offer private, gentle pockets of calm away from the bustle of the city.</p>
            <button className="btn btn-primary date-spot-btn" onClick={() => onOpenModal('reservation-modal')} id="plan-visit-cta">
              PLAN YOUR VISIT
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
