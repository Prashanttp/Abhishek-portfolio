import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function VideoEditing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { label: 'All Videos', value: 'All' },
    { label: 'Tech Videos', value: 'Tech Videos' },
    { label: 'Advertisements', value: 'Advertisement' },
    { label: 'Podcasts', value: 'Podcast' },
    { label: 'Lecture Clips', value: 'Lecture Clip Edit' }
  ];

  const filteredVideos = selectedCategory === 'All'
    ? PORTFOLIO_DATA.videos
    : PORTFOLIO_DATA.videos.filter((v) => v.category === selectedCategory);

  const techVideos = PORTFOLIO_DATA.videos.filter((v) => v.category === 'Tech Videos');
  const adVideos = PORTFOLIO_DATA.videos.filter((v) => v.category === 'Advertisement');
  const podcastVideos = PORTFOLIO_DATA.videos.filter((v) => v.category === 'Podcast');
  const lectureVideos = PORTFOLIO_DATA.videos.filter((v) => v.category === 'Lecture Clip Edit');

  const renderVideoCard = (video) => (
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
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.description}</p>
        <div className="video-tags">
          {video.tags.map((tag) => (
            <span key={tag} className="video-tech-tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );

  return (
    <>
      {/* Page Hero Header */}
      <section className="section section-hero" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Cinematic Portfolio</span>
            <h1 className="section-title">Video Editing Portfolio</h1>
            <p className="section-desc">
              A curated showcase of post-production work engineered for maximum retention, including documentary-style tech videos, commercial advertisements, multi-cam podcasts, and educational clips.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="filter-tabs-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-tab-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          {selectedCategory !== 'All' ? (
            /* Filtered View */
            <div className="video-section-block">
              <div className="section-header left-aligned" style={{ marginBottom: '2rem' }}>
                <span className="section-tag">Category Showcase</span>
                <h2 className="section-title">{selectedCategory}</h2>
              </div>
              <div className="video-grid">
                {filteredVideos.map(renderVideoCard)}
              </div>
            </div>
          ) : (
            /* All Categories Divided by Sections */
            <>
              {/* Section 1: Tech Videos */}
              <div className="video-section-block" id="tech-videos">
                <div className="section-header left-aligned" style={{ marginBottom: '2rem' }}>
                  <span className="section-tag">Featured Section</span>
                  <h2 className="section-title">Tech Videos</h2>
                  <p className="section-desc">
                    High-retention tech breakdowns, market analyses, and AI deep-dives crafted with kinetic motion graphics, custom financial chart animations, and documentary-style pacing.
                  </p>
                </div>
                <div className="video-grid">
                  {techVideos.map(renderVideoCard)}
                </div>
              </div>

              {/* Section 2: Commercial & Advertisements */}
              <div className="video-section-block" id="advertisements">
                <div className="section-header left-aligned" style={{ marginBottom: '2rem' }}>
                  <span className="section-tag">Commercials</span>
                  <h2 className="section-title">Brand & Commercial Ads</h2>
                  <p className="section-desc">
                    Fast-paced commercial edits designed to hook the audience within the first three seconds and drive high conversion rates.
                  </p>
                </div>
                <div className="video-grid">
                  {adVideos.map(renderVideoCard)}
                </div>
              </div>

              {/* Section 3: Podcasts & Talk Shows */}
              <div className="video-section-block" id="podcasts">
                <div className="section-header left-aligned" style={{ marginBottom: '2rem' }}>
                  <span className="section-tag">Long-Form</span>
                  <h2 className="section-title">Podcasts & Talk Shows</h2>
                  <p className="section-desc">
                    Multi-angle conversational editing with balanced audio leveling, speaker framing, and engaging visual context popups.
                  </p>
                </div>
                <div className="video-grid">
                  {podcastVideos.map(renderVideoCard)}
                </div>
              </div>

              {/* Section 4: Educational & Lecture Clips */}
              <div className="video-section-block" id="lecture-clips">
                <div className="section-header left-aligned" style={{ marginBottom: '2rem' }}>
                  <span className="section-tag">Educational</span>
                  <h2 className="section-title">Lecture & Knowledge Clips</h2>
                  <p className="section-desc">
                    Structured instructional shorts featuring dynamic highlighting, concise topic trimming, and clear graphic callouts for quick learning.
                  </p>
                </div>
                <div className="video-grid">
                  {lectureVideos.map(renderVideoCard)}
                </div>
              </div>
            </>
          )}

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
