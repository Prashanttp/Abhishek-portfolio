import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Lightbox from '../components/Lightbox';

export default function GraphicDesign() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const baseUrl = import.meta.env.BASE_URL;

  const items = PORTFOLIO_DATA.thumbnails.map((thumb) => ({
    ...thumb,
    imageSrc: `${baseUrl}thumbnails/${thumb.filename}`
  }));

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <>
      {/* Page Header */}
      <section className="section section-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visual Assets</span>
            <h1 className="section-title">Graphic Design Portfolio</h1>
            <p className="section-desc">
              Thumbnails and visual assets designed to capture attention, maximize click-through rate, and reinforce digital presence. Click any thumbnail to view in high resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Graphic Design Gallery */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <div className="thumbnails-grid">
            {items.map((thumb, index) => (
              <article key={thumb.id} className="thumbnail-card">
                <div 
                  className="thumbnail-preview-wrap" 
                  title={`Click to enlarge ${thumb.filename}`}
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={thumb.imageSrc} 
                    alt={thumb.filename} 
                    className="thumbnail-img"
                    loading="lazy"
                  />
                  <div className="thumbnail-overlay">
                    <div className="thumbnail-zoom-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                    <span className="thumbnail-click-hint">Click to Enlarge</span>
                  </div>
                </div>

                <div className="thumbnail-info">
                  <div className="thumbnail-header">
                    <h2 className="thumbnail-filename-title">{thumb.filename}</h2>
                    <span className="thumbnail-dim-badge">{thumb.resolution}</span>
                  </div>

                  <p className="thumbnail-caption">{thumb.caption}</p>

                  <div className="thumbnail-action-row">
                    <button 
                      className="btn-enlarge" 
                      onClick={() => openLightbox(index)}
                      aria-label={`Enlarge ${thumb.filename}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6"></path>
                        <path d="M9 21H3v-6"></path>
                        <path d="M21 3l-7 7"></path>
                        <path d="M3 21l7-7"></path>
                      </svg>
                      <span>View Full Size</span>
                    </button>

                    <a 
                      href={thumb.imageSrc} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      download 
                      className="btn-enlarge" 
                      style={{ color: 'var(--text-muted)' }}
                      title="Download image"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      <span>PNG</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Next Step CTA */}
          <div style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <span className="section-tag">Next Showcase</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.75rem', color: '#fff' }}>
              Explore Video Editing Portfolio
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
              Watch advertisements, podcast edits, and lecture clips edited for high retention and seamless storytelling.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/video-editing" className="btn btn-primary btn-lg">
                <span>Watch Video Edits</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
              <Link to="/" className="btn btn-secondary btn-lg">
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox 
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex || 0}
        items={items}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
