/**
 * Portfolio Data Configuration
 * Abhishek Choudhary – Video Editor & Graphic Designer
 * Easily update personal details, videos, and graphics here.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Abhishek Choudhary",
    role: "Video Editor & Graphic Designer",
    tagline: "Crafting Cinematic Edits & High-Impact Visuals",
    experienceYears: "3+",
    location: "India / Available Worldwide",
    email: "abhishekchoudhary.edits@gmail.com",
    bio: "Hi, I'm Abhishek Choudhary — a passionate Video Editor and Graphic Designer with 3 years of hands-on experience creating engaging visual content. I specialize in precision video editing, dynamic storytelling, and graphic design, transforming raw ideas into visually compelling narratives that capture attention and communicate effectively.",
    socials: {
      email: "mailto:abhishekchoudhary.edits@gmail.com",
      linkedin: "https://linkedin.com/in/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      twitter: "https://twitter.com/",
      behance: "https://behance.net/"
    }
  },

  skills: [
    {
      title: "Commercial & Ad Editing",
      category: "Video Editing",
      description: "Hook-driven pacing, rhythmic cuts, and kinetic typography designed to maximize viewer retention and conversion.",
      icon: "film"
    },
    {
      title: "Podcast & Talk Show Edits",
      category: "Post-Production",
      description: "Multi-camera switching, dialogue enhancement, noise reduction, and engaging short-form social media cutdowns.",
      icon: "mic"
    },
    {
      title: "Lecture & Educational Clips",
      category: "Video Editing",
      description: "Structured pacing with focused visual callouts, diagrams, and lower thirds to simplify complex topics.",
      icon: "book-open"
    },
    {
      title: "High-CTR YouTube Thumbnails",
      category: "Graphic Design",
      description: "Eye-catching compositions, expressive color contrast, and bold typography proven to boost click-through rates.",
      icon: "image"
    },
    {
      title: "Motion Graphics & VFX",
      category: "Animation",
      description: "Smooth title reveals, sleek lower-thirds, graphic overlays, and seamless cinematic scene transitions.",
      icon: "layers"
    },
    {
      title: "Color Grading & Sound Design",
      category: "Finishing",
      description: "Rich color grading and immersive sound staging with custom Foley, sound effects, and balanced music ducking.",
      icon: "sliders"
    }
  ],

  tools: [
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "DaVinci Resolve",
    "CapCut Pro"
  ],

  // Google Drive Embedded Videos
  videos: [
    {
      id: "tech-01",
      category: "Tech Videos",
      badge: "Tech & AI",
      title: "China's AI Stocks Crashed 40% — Could It Happen in America?",
      description: "High-retention documentary-style tech breakdown analyzing AI market volatility, geopolitical tensions, and macroeconomic trends. Formatted with dynamic data visualizations, motion graphics, and fast-paced B-roll storytelling.",
      embedUrl: "https://drive.google.com/file/d/1qj6NJysVwYcUGgxfRMz4igmPcroouPs7/preview",
      driveUrl: "https://drive.google.com/file/d/1qj6NJysVwYcUGgxfRMz4igmPcroouPs7/view"
    },
    {
      id: "ad-01",
      category: "Advertisement",
      badge: "Commercial",
      title: "Product & Brand Advertisement",
      description: "High-energy commercial edit with snappy cuts, synchronized sound design, and sharp visual pacing.",
      embedUrl: "https://drive.google.com/file/d/1Wok2qpaojcw_SsCnmY5wqBPDvky1tABj/preview",
      driveUrl: "https://drive.google.com/file/d/1Wok2qpaojcw_SsCnmY5wqBPDvky1tABj/view"
    },
    {
      id: "podcast-01",
      category: "Podcast",
      badge: "Long-form / Show",
      title: "In-Depth Podcast Episode",
      description: "Dynamic multi-cam talk show edit with clear dialogue leveling, speaker framing, and fluid pacing.",
      embedUrl: "https://drive.google.com/file/d/1WIYUluLDPXf0q_zh_Kq8WM73s7-MPMDx/preview",
      driveUrl: "https://drive.google.com/file/d/1WIYUluLDPXf0q_zh_Kq8WM73s7-MPMDx/view"
    },
    {
      id: "lecture-01",
      category: "Lecture Clip Edit",
      badge: "Educational",
      title: "Lecture Clip Edit – Part 1",
      description: "Informative lecture clipping with strategic zooms, key takeaways highlighted, and crisp pacing.",
      embedUrl: "https://drive.google.com/file/d/1XwyI4tDS7b9lCsWcyEcuvyoP-0gJuadu/preview",
      driveUrl: "https://drive.google.com/file/d/1XwyI4tDS7b9lCsWcyEcuvyoP-0gJuadu/view"
    },
    {
      id: "lecture-02",
      category: "Lecture Clip Edit",
      badge: "Educational",
      title: "Lecture Clip Edit – Part 2",
      description: "Engaging instructional breakdown with seamless visual continuity, clean cuts, and focused presentation.",
      embedUrl: "https://drive.google.com/file/d/1TsfcRof9dKnQXEaFhHcu8dNBSNasxpm0/preview",
      driveUrl: "https://drive.google.com/file/d/1TsfcRof9dKnQXEaFhHcu8dNBSNasxpm0/view"
    }
  ],

  // Scanned thumbnails from project thumbnails folder
  // Uses exact filenames as required
  thumbnails: [
    {
      id: "thumb-1",
      filename: "Podcast_thumbnail.png",
      path: "thumbnails/Podcast_thumbnail.png",
      format: "PNG",
      resolution: "1280 × 720",
      description: "Podcast episode visual cover designed for high viewer curiosity and strong digital presence."
    },
    {
      id: "thumb-2",
      filename: "education_thumbnail.png",
      path: "thumbnails/education_thumbnail.png",
      format: "PNG",
      resolution: "1280 × 720",
      description: "Educational graphic asset utilizing vibrant contrast and clear visual hierarchy for fast comprehension."
    },
    {
      id: "thumb-3",
      filename: "tech_thumbnail.png",
      path: "thumbnails/tech_thumbnail.png",
      format: "PNG",
      resolution: "1280 × 720",
      description: "Modern technology presentation thumbnail with sleek glow effects and prominent focal framing."
    }
  ]
};

// Expose on window for scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
