import { useEffect, useRef } from 'react'

const BLOB_CARDS = [
  {
    id: 'blob-mask-nook',
    outerStroke: 'rgba(101, 140, 110, 0.45)',
    innerStroke: '#2A4835',
    outerPath: 'M125,18 C212,-6 308,4 386,48 C464,92 474,170 444,238 C414,306 340,318 250,310 C160,302 85,286 35,234 C-15,182 -14,108 24,56 C62,4 100,22 125,18 Z',
    innerPath: 'M125,36 C205,14 295,22 368,64 C441,106 450,174 424,230 C398,286 332,296 250,290 C168,284 98,270 54,224 C10,178 8,114 42,68 C74,24 102,40 125,36 Z',
    img: '/images/moment_food.jpg',
    title: 'The Conservatory Nook',
    desc: 'Marble tables, bouclé armchairs, and hanging pothos vines in gentle natural daylight.',
  },
  {
    id: 'blob-mask-terracotta',
    outerStroke: 'rgba(184, 117, 88, 0.45)',
    innerStroke: '#B87558',
    outerPath: 'M140,14 C228,-4 304,22 380,58 C456,94 480,164 454,234 C428,304 358,318 274,310 C190,302 106,310 46,258 C-14,206 -20,128 16,66 C52,4 106,16 140,14 Z',
    innerPath: 'M140,32 C220,16 290,40 360,74 C430,108 452,168 430,226 C408,284 345,296 270,288 C195,280 118,288 66,244 C14,200 8,132 38,78 C68,24 112,34 140,32 Z',
    img: '/images/greenhouse_corner.jpg',
    title: 'Hand-Thrown Terracotta',
    desc: 'Artisanal porous clay pots, fiddle leaf figs, and lush monstera collections.',
  },
  {
    id: 'blob-mask-glasshouse',
    outerStroke: 'rgba(101, 140, 110, 0.45)',
    innerStroke: '#2A4835',
    outerPath: 'M145,18 C232,-4 324,6 394,52 C464,98 472,174 444,242 C416,310 338,320 252,312 C166,304 86,290 35,240 C-16,190 -16,114 22,60 C60,6 108,24 145,18 Z',
    innerPath: 'M145,36 C225,16 310,26 376,68 C442,110 448,178 424,232 C400,286 332,295 255,290 C178,285 104,274 58,230 C12,186 10,120 42,74 C74,28 114,42 145,36 Z',
    img: '/images/moment_vibe.jpg',
    title: 'The Glasshouse Entrance',
    desc: 'The iconic arched black steel portal welcoming visitors into a leafy haven.',
  },
]

function BlobCard({ card }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      el?.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="atmospheric-blob-card reveal-fade-up" ref={ref}>
      <div className="card-blob-art-wrap">
        <svg className="card-blob-svg" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id={card.id}>
              <path d={card.innerPath} />
            </clipPath>
          </defs>
          <path className="card-blob-outline-outer" d={card.outerPath}
            fill="none" stroke={card.outerStroke} strokeWidth="2" />
          <path className="card-blob-outline-inner" d={card.innerPath}
            fill="none" stroke={card.innerStroke} strokeWidth="3" />
          <g clipPath={`url(#${card.id})`}>
            <image href={card.img} x="0" y="0" width="460" height="300" preserveAspectRatio="xMidYMid slice" className="blob-svg-image" />
          </g>
        </svg>
      </div>
      <div className="card-blob-caption">
        <h3 className="card-blob-title">{card.title}</h3>
        <p className="card-blob-desc">{card.desc}</p>
      </div>
    </div>
  )
}

export default function MomentsSection({ onOpenModal }) {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target) }
      })
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="moments-section" id="moments" aria-label="Corners of Dahlia Nursery Café">
      <div className="section-edge-decor edge-left edge-dark" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right edge-dark" aria-hidden="true"></div>
      <div className="container">

        <div className="section-header-editorial reveal-fade-up" ref={headerRef}>
          <span className="eyebrow eyebrow-light">— ATMOSPHERIC FRAMES</span>
          <h2 className="section-title text-light">
            Corners of the <em className="terracotta-italic">Nursery Cafe</em>
          </h2>
          <p className="section-subtitle text-light-muted">
            Every corner at Dahlia holds a different kind of quiet — sunlit, leafy, and always a little magical.
          </p>
        </div>

        <div className="atmospheric-blobs-grid">
          {BLOB_CARDS.map(card => <BlobCard key={card.id} card={card} />)}
        </div>

        <div className="sanctuary-banner reveal-fade-up">
          <div className="sanctuary-banner-content">
            <h3 className="sanctuary-banner-title">Come Experience the Sanctuary in Person</h3>
            <p className="sanctuary-banner-desc">Open daily from 8:00 AM until Midnight. Enjoy coffee, brunch, or Detroit pizza immersed in nature.</p>
          </div>
          <button className="btn btn-outline-light sanctuary-banner-btn" onClick={() => onOpenModal('reservation-modal')}>
            BOOK TABLE IN THE NURSERY
          </button>
        </div>

      </div>
    </section>
  )
}
