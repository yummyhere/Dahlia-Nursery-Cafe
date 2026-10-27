import { useState } from 'react'
import ModalWrapper from './ModalWrapper'

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleClose} id="reservation-modal">
      <span className="eyebrow">SLOW MORNINGS &amp; INTIMATE DATES</span>
      <h2 id="modal-reserve-title" style={{ fontSize: '2.6rem', marginBottom: '16px' }}>Hold a Cozy Corner</h2>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-charcoal-muted)', marginBottom: '28px' }}>
        We keep most of our greenhouse tables open for spontaneous walk-ins. For special dates or quiet study mornings,
        tell us what you need and we will have a warm nook ready for you.
      </p>

      {!submitted ? (
        <form id="reservation-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Your Name</label>
              <input type="text" required placeholder="Elena Vance" style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Email or WhatsApp</label>
              <input type="text" required placeholder="elena@example.com" style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Preferred Date</label>
              <input type="date" style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Guests</label>
              <select style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }}>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3–4 Guests</option>
                <option>5–6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Preferred Nook</label>
            <select style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }}>
              <option>Any available greenhouse nook</option>
              <option>The Reading Nook (Near Fiddle Leaf)</option>
              <option>The Conservatory Window Table (Two Guests)</option>
              <option>Terracotta Bench &amp; Coffee Corner</option>
              <option>Sunlit Garden Courtyard</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--color-moss)' }}>Notes or Plant Inquiries</label>
            <textarea rows="3" placeholder="Tell us if it's an anniversary, quiet reading morning, or if you'd like our plant doctor to inspect a clipping!" style={{ width: '100%', padding: '12px', border: 'var(--border-subtle)', background: '#fff', fontFamily: 'var(--font-editorial-sans)', fontSize: '0.9rem', borderRadius: '2px' }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Reserve My Spot</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <span style={{ fontSize: '3rem', color: 'var(--color-moss)', display: 'block', marginBottom: '12px' }}>🌿</span>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--color-forest)', marginBottom: '12px' }}>We Have Saved Your Corner</h3>
          <p style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)' }}>
            Thank you. A confirmation note with arrival instructions has been sent. We look forward to welcoming you to Dahlia.
          </p>
        </div>
      )}
    </ModalWrapper>
  )
}
