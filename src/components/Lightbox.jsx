import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, currentIndex, items, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <div 
      className="lightbox-modal active" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Image Lightbox Preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close modal">✕</button>
        <button className="lightbox-nav-btn lightbox-prev" onClick={onPrev} aria-label="Previous image">‹</button>
        <button className="lightbox-nav-btn lightbox-next" onClick={onNext} aria-label="Next image">›</button>

        <div className="lightbox-image-wrap">
          <img 
            src={currentItem.imageSrc} 
            alt={currentItem.filename} 
            className="lightbox-img" 
          />
        </div>

        <div className="lightbox-caption-bar">
          <span className="lightbox-filename">{currentItem.filename}</span>
          <span className="lightbox-counter">{currentIndex + 1} / {items.length}</span>
        </div>
      </div>
    </div>
  );
}
