import { useEffect } from 'react'

export default function ModalWrapper({ isOpen, onClose, id, children, wide }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <div
      className={`modal-backdrop${isOpen ? ' active' : ''}`}
      id={id}
      aria-hidden={!isOpen}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={`modal-container${wide ? ' modal-wide' : ''}`} role="dialog">
        <button className="modal-close-btn" aria-label="Close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  )
}
