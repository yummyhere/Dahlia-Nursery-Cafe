import { useState, useCallback } from 'react'
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import EditorialIntro from './components/EditorialIntro'
import MenuSection from './components/MenuSection'
import GreenhouseSection from './components/GreenhouseSection'
import MomentsSection from './components/MomentsSection'
import DateSpotSection from './components/DateSpotSection'
import VisitSection from './components/VisitSection'
import Footer from './components/Footer'
import MenuModal from './components/modals/MenuModal'
import ReservationModal from './components/modals/ReservationModal'
import StoryModal from './components/modals/StoryModal'
import SearchModal from './components/modals/SearchModal'
import GalleryLightbox from './components/modals/GalleryLightbox'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null) // 'menu' | 'reservation' | 'story' | 'search'
  const [lightboxData, setLightboxData] = useState(null)

  const openModal = useCallback((name) => {
    setActiveModal(name)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    document.body.style.overflow = ''
  }, [])

  const openLightbox = useCallback((src, alt, caption) => {
    setLightboxData({ src, alt, caption })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxData(null)
    document.body.style.overflow = ''
  }, [])

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }, [])

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <>
      <Header
        onMenuToggle={toggleMobileNav}
        mobileNavOpen={mobileNavOpen}
        onOpenModal={openModal}
      />
      <MobileNav isOpen={mobileNavOpen} onClose={closeMobileNav} />

      <main id="main-content">
        <Hero onOpenModal={openModal} />
        <EditorialIntro onOpenModal={openModal} />
        <MenuSection onOpenModal={openModal} />
        <GreenhouseSection onOpenModal={openModal} />
        <MomentsSection onOpenModal={openModal} />
        <DateSpotSection onOpenModal={openModal} />
        <VisitSection onOpenModal={openModal} />
      </main>

      <Footer onOpenModal={openModal} />

      {/* Modals */}
      <MenuModal isOpen={activeModal === 'menu-modal'} onClose={closeModal} />
      <ReservationModal isOpen={activeModal === 'reservation-modal'} onClose={closeModal} />
      <StoryModal isOpen={activeModal === 'story-modal'} onClose={closeModal} />
      <SearchModal isOpen={activeModal === 'search-modal'} onClose={closeModal} />
      {lightboxData && (
        <GalleryLightbox {...lightboxData} onClose={closeLightbox} />
      )}
    </>
  )
}

export default App
