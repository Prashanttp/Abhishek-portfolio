import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      showToast('Email address copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast('Email: ' + PORTFOLIO_DATA.profile.email);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject || 'Project Inquiry'}`
    )}&body=${encodeURIComponent(
      `Hi Abhishek,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    showToast('Opening your email client...');
  };

  return (
    <>
      {/* Toast Notice */}
      {toastMsg && (
        <div className="toast-notice show">
          {toastMsg}
        </div>
      )}

      {/* Hero Section */}
      <section className="section section-hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="badge">
                <span className="badge-dot"></span>
                Available for Projects & Collaborations
              </span>
            </div>

            <h1 className="hero-title">
              Abhishek Choudhary<br />
              <span className="gradient-text">Video Editor & Graphic Designer</span>
            </h1>

            <p className="hero-subtitle">
              Transforming ideas into visually compelling narratives. Specializing in high-retention video editing, precision pacing, and conversion-focused graphic design that captures attention and communicates with purpose.
            </p>

            <div className="hero-actions">
              <Link to="/video-editing" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Explore Video Portfolio
              </Link>
              <Link to="/graphic-design" className="btn btn-secondary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                View Graphic Design
              </Link>
              <a 
                href="#contact" 
                className="btn btn-outline-accent btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </a>
            </div>

            {/* Quick Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3<span>+</span></div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100<span>%</span></div>
                <div className="stat-label">Client Focus</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4K<span>/HD</span></div>
                <div className="stat-label">Cinema Quality</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">CTR<span>↑</span></div>
                <div className="stat-label">Optimized Graphics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Abhishek</span>
            <h2 className="section-title">Visual Storyteller & Creative Designer</h2>
            <p className="section-desc">
              Passionate about turning raw footage and creative ideas into engaging, audience-first visual experiences.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-intro-card">
              <p className="about-text-lead">
                Hi, I'm <strong>Abhishek Choudhary</strong>, a dedicated <strong>Video Editor and Graphic Designer</strong> with 3 years of hands-on experience creating engaging visual content.
              </p>
              <p className="about-text-secondary">
                I specialize in precision video editing, creative storytelling, and graphic design, transforming ideas into visually compelling content that captures attention and communicates effectively.
              </p>
              <p className="about-text-secondary">
                Whether cutting an energetic commercial advertisement, editing an insightful long-form podcast, structuring an educational lecture clip, or designing high-click-through thumbnails, my goal is to deliver sharp, polished content that leaves a lasting impression.
              </p>

              <div className="toolset-wrap">
                <div className="toolset-label">Core Creative Toolset</div>
                <div className="toolset-chips">
                  {PORTFOLIO_DATA.tools.map((tool) => (
                    <span key={tool} className="tool-chip">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-pillars">
              <ul className="about-highlights">
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="highlight-title">Hook-Driven Pacing</div>
                    <div className="highlight-desc">Captivating viewers within the first 3 seconds and maintaining strong retention throughout the entire timeline.</div>
                  </div>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="highlight-title">Dynamic Sound Design</div>
                    <div className="highlight-desc">Layered Foley effects, impact swooshes, clear dialogue mastering, and subtle background music mixing.</div>
                  </div>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="highlight-title">Strategic Visual Hierarchy</div>
                    <div className="highlight-desc">Designing thumbnails and graphical assets that immediately command attention on crowded digital feeds.</div>
                  </div>
                </li>
                <li className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="highlight-title">Reliable Turnaround</div>
                    <div className="highlight-desc">Clean project management, proactive communication, and disciplined delivery schedules for creators and brands.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Creative Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Skills & Creative Services</h2>
            <p className="section-desc">
              Tailored post-production and visual design solutions built to elevate your channel, brand, or digital campaign.
            </p>
          </div>

          <div className="services-grid">
            {PORTFOLIO_DATA.skills.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                  </svg>
                </div>
                <div className="service-category">{service.category}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Pathways */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio Showcase</span>
            <h2 className="section-title">Explore Abhishek's Work</h2>
            <p className="section-desc">
              Browse through completed video editing projects and high-CTR thumbnail designs.
            </p>
          </div>

          <div className="portfolio-preview-grid">
            <div className="preview-card">
              <div>
                <div className="preview-tag">Video Portfolio</div>
                <h3 className="preview-title">Video Editing Showcase</h3>
                <p className="preview-desc">
                  Watch 4 curated video edits featuring commercial advertisements, in-depth podcasts, and concise educational lecture breakdowns embedded with interactive video players.
                </p>
              </div>
              <Link to="/video-editing" className="btn btn-primary">
                <span>Watch Video Edits</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>

            <div className="preview-card">
              <div>
                <div className="preview-tag">Design Gallery</div>
                <h3 className="preview-title">Graphic Design Showcase</h3>
                <p className="preview-desc">
                  Explore thumbnail designs directly scanned from the project folder. Features high-resolution image previews with click-to-enlarge lightbox viewing.
                </p>
              </div>
              <Link to="/graphic-design" className="btn btn-primary">
                <span>View Graphic Gallery</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-tag">Get in Touch</span>
              <h2 className="contact-title">Let's Create Something Memorable</h2>
              <p className="contact-desc">
                Have a project in mind, need regular video editing, or want eye-catching thumbnails for your next release? Feel free to reach out directly.
              </p>

              {/* Email Copy Card */}
              <div className="contact-email-card">
                <div>
                  <div className="email-label">Direct Email</div>
                  <div className="email-value">{PORTFOLIO_DATA.profile.email}</div>
                </div>
                <button className="btn-copy" onClick={handleCopyEmail} aria-label="Copy email address">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{copied ? '✓ Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="contact-socials-wrap">
                <div className="socials-label">Connect & Follow</div>
                <div className="socials-list">
                  <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span>✉ Email</span>
                  </a>
                  <a href={PORTFOLIO_DATA.profile.socials.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span>
                  </a>
                  <a href={PORTFOLIO_DATA.profile.socials.youtube} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span>YouTube</span>
                  </a>
                  <a href={PORTFOLIO_DATA.profile.socials.instagram} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span>Instagram</span>
                  </a>
                  <a href={PORTFOLIO_DATA.profile.socials.twitter} className="social-pill" target="_blank" rel="noopener noreferrer">
                    <span>X / Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="senderName" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="senderName" 
                  className="form-input" 
                  placeholder="e.g. Rahul Sharma" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail" className="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="senderEmail" 
                  className="form-input" 
                  placeholder="you@example.com" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderSubject" className="form-label">Project Type</label>
                <input 
                  type="text" 
                  id="senderSubject" 
                  className="form-input" 
                  placeholder="Video Editing, Thumbnails, or Full Production"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderMessage" className="form-label">Project Brief / Message</label>
                <textarea 
                  id="senderMessage" 
                  className="form-textarea" 
                  placeholder="Tell me about your footage, timeline, and goals..." 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
