import ModalWrapper from './ModalWrapper'

export default function StoryModal({ isOpen, onClose }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} id="story-modal">
      <span className="eyebrow">OUR BOTANICAL PHILOSOPHY</span>
      <h2 id="modal-story-title" style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Rooted in Quiet Care</h2>
      <p style={{ fontSize: '1.35rem', lineHeight: 1.65, color: 'var(--color-charcoal)', marginBottom: '20px' }}>
        Dahlia began as an abandoned 1940s glass greenhouse tucked behind an old timber workshop. When we first opened
        the rusted latch doors, ivy had reclaimed the beams, and sunlight fell through cracked glass panes in gentle ribbons.
      </p>
      <p style={{ fontSize: '1.35rem', lineHeight: 1.65, color: 'var(--color-charcoal)', marginBottom: '20px' }}>
        Rather than tearing down its character, we decided to preserve every scar and beam. We brought in slow-roasted
        coffees, invited local ceramicists to display their hand-thrown planters, and filled every wooden shelf with plants
        we have nurtured from saplings.
      </p>
      <p style={{ fontSize: '1.35rem', lineHeight: 1.65, color: 'var(--color-charcoal)', marginBottom: '28px' }}>
        Today, Dahlia is a sanctuary for the city: a place where you can sip an espresso, learn how to re-pot a rare
        philodendron, and take back a little bit of green peace into your daily life.
      </p>
      <div style={{ borderTop: 'var(--border-subtle)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', color: 'var(--color-terracotta)' }}>
          — The Dahlia Family &amp; Botanists
        </span>
        <button className="btn btn-outline" onClick={onClose}>Close</button>
      </div>
    </ModalWrapper>
  )
}
