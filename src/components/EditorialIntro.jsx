import useScrollReveal from '../hooks/useScrollReveal'

export default function EditorialIntro({ onOpenModal }) {
  const imgRef = useScrollReveal()
  const textRef = useScrollReveal()

  return (
    <section className="editorial-intro-section" id="story" aria-label="Our Story and Philosophy">
      <div className="section-edge-decor edge-left" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right" aria-hidden="true"></div>
      <div className="container">
        <div className="editorial-grid">

          <div className="editorial-image-col reveal-fade-up" ref={imgRef}>
            <div className="editorial-image-frame">
              <img
                src="/images/editorial_story.jpg"
                alt="Dahlia greenhouse café dining area with lush hanging plants, wooden spindle chairs with botanical cushions, and sunlit pergola roof"
                loading="lazy"
              />
              <div className="image-stamp">
                <span>EST. 2021</span>
                <strong>DAHLIA GREENHOUSE</strong>
                <span>SANCTUARY &amp; ROASTERY</span>
              </div>
            </div>
          </div>

          <div className="editorial-text-col reveal-fade-up" ref={textRef}>
            <span className="eyebrow">MORE THAN A CAFÉ</span>
            <h2 className="editorial-heading">Come for the coffee. Stay for the calm.</h2>
            <p className="editorial-lead">
              Some places make you slow down without asking. Surrounded by leafy corners, earthy textures,
              and the comforting smell of freshly brewed coffee, this is a little space to pause, reconnect,
              and enjoy the simple things.
            </p>
            <p className="editorial-subtext">
              Every wooden shelf was built by hand from reclaimed cedar, every ceramic cup thrown by local
              potters, and every Monstera and fern nurtured to create a breathing sanctuary right in the
              heart of our busy neighborhood.
            </p>

            <a
              href="#"
              className="text-link"
              id="about-us-link"
              onClick={(e) => { e.preventDefault(); onOpenModal('story-modal') }}
            >
              A little about us ↗
            </a>

            <div className="editorial-badges">
              <div className="badge-item">
                <span className="badge-number">120+</span>
                <span className="badge-label">Nurtured Plant Species</span>
              </div>
              <div className="badge-item">
                <span className="badge-number">100%</span>
                <span className="badge-label">Direct Trade Coffee</span>
              </div>
              <div className="badge-item">
                <span className="badge-number">Daily</span>
                <span className="badge-label">Fresh Sourdough Bakes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
