export default function MobileNav({ isOpen, onClose }) {
  return (
    <div className={`mobile-nav${isOpen ? ' open' : ''}`} id="mobile-nav" aria-hidden={!isOpen}>
      <ul className="mobile-nav-links">
        <li><a href="#hero" className="mobile-nav-link" onClick={onClose}>Home</a></li>
        <li><a href="#menu" className="mobile-nav-link" onClick={onClose}>Shop</a></li>
        <li><a href="#story" className="mobile-nav-link" onClick={onClose}>About</a></li>
        <li><a href="#visit" className="mobile-nav-link" onClick={onClose}>Contact</a></li>
      </ul>
      <a href="#visit" className="btn btn-outline-light mobile-nav-close" onClick={onClose}>Visit Dahlia</a>
    </div>
  )
}
