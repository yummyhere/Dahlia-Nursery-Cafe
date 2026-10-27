export default function CafeStatus() {
  const now = new Date()
  const day = now.getDay()
  const timeInMinutes = now.getHours() * 60 + now.getMinutes()

  let isOpen = false
  let statusText = ''

  if (day === 1) {
    statusText = 'Closed Today (Plant Care Day) · Opens Tuesday 08:30'
  } else if (day >= 2 && day <= 5) {
    if (timeInMinutes >= 510 && timeInMinutes < 1140) {
      isOpen = true
      statusText = 'Open Today until 19:00 · Fresh Roasts & Greenhouse Seating'
    } else {
      statusText = 'Closed Now · Opens Tomorrow at 08:30'
    }
  } else {
    if (timeInMinutes >= 540 && timeInMinutes < 1200) {
      isOpen = true
      statusText = 'Open Today until 20:00 · Weekend Brunch & Slow Roasts'
    } else {
      statusText = 'Closed Now · Opens at 09:00'
    }
  }

  const dotColor = isOpen ? '#88C377' : '#B87558'
  const dotShadow = isOpen ? '0 0 8px #88C377' : '0 0 8px #B87558'

  return (
    <div
      id="cafe-live-status"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '24px',
        fontFamily: 'var(--font-editorial-sans)',
        fontSize: '0.85rem',
        letterSpacing: '0.06em',
      }}
    >
      <span
        className="status-dot"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: dotColor,
          boxShadow: dotShadow,
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span className="status-text" style={{ color: 'var(--color-charcoal-muted)' }}>
        {statusText}
      </span>
    </div>
  )
}
