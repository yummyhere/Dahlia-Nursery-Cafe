import useNavbarScroll from '../hooks/useNavbarScroll'

export default function Header({ onMenuToggle, mobileNavOpen, onOpenModal }) {
  const scrolled = useNavbarScroll()

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="header-container">
        <a href="#hero" className="brand" aria-label="Dahlia Homepage">
          <span className="brand-title">DAHLIA</span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link active">HOME</a></li>
            <li><a href="#menu" className="nav-link">SHOP</a></li>
            <li><a href="#story" className="nav-link">ABOUT</a></li>
            <li><a href="#visit" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="nav-icon-btn"
            aria-label="Search"
            id="search-trigger-btn"
            onClick={() => onOpenModal('search-modal')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button
            className="nav-icon-btn"
            aria-label="User Account"
            onClick={() => onOpenModal('reservation-modal')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button
            className="nav-icon-btn"
            aria-label="Shopping Bag"
            onClick={() => onOpenModal('menu-modal')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button
            className={`menu-toggle${mobileNavOpen ? ' open' : ''}`}
            id="menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileNavOpen}
            onClick={onMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
