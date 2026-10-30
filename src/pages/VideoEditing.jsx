import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function VideoEditing() {
  return (
    <>
      {/* Page Header */}
      <section className="section section-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cinematic Portfolio</span>
            <h1 className="section-title">Video Editing Portfolio</h1>
            <p className="section-desc">
              A showcase of post-production work engineered for viewer engagement, including high-impact commercial advertisements, multi-cam podcast productions, and structured lecture clip edits.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <div className="video-grid">
            {PORTFOLIO_DATA.videos.map((video) => (
              <article key={video.id} className="video-card">
                <div className="video-player-container">
                  <iframe 
                    src={video.embedUrl} 
                    title={`${video.title} - Video Edit by Abhishek Choudhary`}
                    allow="autoplay; fullscreen"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <div className="video-meta">
                    <span className="video-category-tag">{video.category}</span>
                    <a 
                      href={video.driveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="video-link-external"
                      title="Open full video player"
                    >
                      <span>Fullscreen</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                  <h2 className="video-title">{video.title}</h2>
                  <p className="video-desc">{video.description}</p>
                  <div className="video-tags">
                    {video.tags.map((tag) => (
                      <span key={tag} className="video-tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Next Step CTA */}
          <div style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <span className="section-tag">Next Showcase</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.75rem', color: '#fff' }}>
              Explore Graphic Design Portfolio
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
              View high-CTR YouTube and digital media thumbnails crafted for maximum click-through rate and visual impact.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/graphic-design" className="btn btn-primary btn-lg">
                <span>View Graphic Design</span>
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
    </>
  );
}
