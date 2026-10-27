import { useEffect } from 'react'

export default function GalleryLightbox({ src, alt, caption, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="lightbox-backdrop active"
      id="gallery-lightbox"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button className="lightbox-close" aria-label="Close Lightbox" onClick={onClose}>&times;</button>
      <div className="lightbox-img-wrap">
        <img src={src} alt={alt} className="lightbox-img" />
        <p className="lightbox-caption">{caption}</p>
      </div>
    </div>
  )
}
