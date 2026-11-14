/**
 * Portfolio Data Configuration
 * Abhishek Choudhary – Video Editor & Graphic Designer
 */

export const PORTFOLIO_DATA = {
  profile: {
    name: "Abhishek Choudhary",
    role: "Video Editor & Graphic Designer",
    tagline: "Crafting Cinematic Edits & High-Impact Visuals",
    experienceYears: "3+",
    email: "abhishekchoudhary.edits@gmail.com",
    bio: "Hi, I'm Abhishek Choudhary — a passionate Video Editor and Graphic Designer with 3 years of hands-on experience creating engaging visual content. I specialize in precision video editing, dynamic storytelling, and graphic design, transforming raw ideas into visually compelling narratives that capture attention and communicate effectively.",
    socials: {
      email: "mailto:abhishekchoudhary.edits@gmail.com",
      linkedin: "https://linkedin.com/",
      youtube: "https://youtube.com/",
      instagram: "https://instagram.com/",
      twitter: "https://twitter.com/",
      behance: "https://behance.net/"
    }
  },

  skills: [
    {
      title: "Tech & Documentary Videos",
      category: "Video Editing",
      description: "Fast-paced tech breakdowns, financial analyses, and AI documentary edits with kinetic charts, B-roll pacing, and high retention hooks.",
      icon: "cpu"
    },
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

  videos: [
    {
      id: "tech-01",
      category: "Tech Videos",
      badge: "Tech & AI",
      title: "China's AI Stocks Crashed 40% — Could It Happen in America?",
      description: "High-retention documentary-style tech breakdown analyzing AI market volatility, geopolitical tensions, and macroeconomic trends. Formatted with dynamic data visualizations, motion graphics, and fast-paced B-roll storytelling.",
      embedUrl: "https://drive.google.com/file/d/1qj6NJysVwYcUGgxfRMz4igmPcroouPs7/preview",
      driveUrl: "https://drive.google.com/file/d/1qj6NJysVwYcUGgxfRMz4igmPcroouPs7/view",
      tags: ["Tech Breakdown", "Documentary Pacing", "Motion Graphics", "Data Visuals", "Premiere Pro"]
    },
    {
      id: "ad-01",
      category: "Advertisement",
      badge: "Commercial",
      title: "Commercial Brand Advertisement",
      description: "High-velocity commercial cut with rhythmic beat synchronization, dynamic motion typography, and sound design formulated to seize attention and drive audience action.",
      embedUrl: "https://drive.google.com/file/d/1Wok2qpaojcw_SsCnmY5wqBPDvky1tABj/preview",
      driveUrl: "https://drive.google.com/file/d/1Wok2qpaojcw_SsCnmY5wqBPDvky1tABj/preview",
      tags: ["Premiere Pro", "Sound Design", "Rhythm Cut", "Commercial"]
    },
    {
      id: "podcast-01",
      category: "Podcast",
      badge: "Talk Show",
      title: "In-Depth Podcast Episode",
      description: "Long-form talk show post-production featuring multi-camera framing, dialogue clarity and leveling, subtle graphic callouts, and conversational narrative continuity.",
      embedUrl: "https://drive.google.com/file/d/1WIYUluLDPXf0q_zh_Kq8WM73s7-MPMDx/preview",
      driveUrl: "https://drive.google.com/file/d/1WIYUluLDPXf0q_zh_Kq8WM73s7-MPMDx/preview",
      tags: ["Multi-Cam", "Audio Mastering", "Long-Form", "Talk Show"]
    },
    {
      id: "lecture-01",
      category: "Lecture Clip Edit",
      badge: "Educational",
      title: "Lecture Clip Edit – Part 1",
      description: "Instructional lecture clipping with focused zoom-ins, concept annotations, and pacing tailored to highlight key takeaways for modern online learners.",
      embedUrl: "https://drive.google.com/file/d/1XwyI4tDS7b9lCsWcyEcuvyoP-0gJuadu/preview",
      driveUrl: "https://drive.google.com/file/d/1XwyI4tDS7b9lCsWcyEcuvyoP-0gJuadu/preview",
      tags: ["Educational", "Visual Callouts", "Micro-Content", "Key Takeaways"]
    },
    {
      id: "lecture-02",
      category: "Lecture Clip Edit",
      badge: "Educational",
      title: "Lecture Clip Edit – Part 2",
      description: "Engaging educational presentation edit with seamless speaker flow, clear audio balance, and structured visual segmentation for effortless comprehension.",
      embedUrl: "https://drive.google.com/file/d/1TsfcRof9dKnQXEaFhHcu8dNBSNasxpm0/preview",
      driveUrl: "https://drive.google.com/file/d/1TsfcRof9dKnQXEaFhHcu8dNBSNasxpm0/preview",
      tags: ["Lecture Short", "Content Chunking", "Audio Clean-up", "Educational"]
    }
  ],

  thumbnails: [
    {
      id: "thumb-1",
      filename: "Podcast_thumbnail.png",
      filenamePath: "thumbnails/Podcast_thumbnail.png",
      resolution: "1280 × 720 • PNG",
      caption: "Visual asset crafted with high-contrast color grading, dramatic lighting, and focal typography built for talk show releases and digital channels."
    },
    {
      id: "thumb-2",
      filename: "education_thumbnail.png",
      filenamePath: "thumbnails/education_thumbnail.png",
      resolution: "1280 × 720 • PNG",
      caption: "Educational thumbnail graphic utilizing bold contrast and crisp graphic hierarchy to communicate concepts quickly and drive higher click-through rates."
    },
    {
      id: "thumb-3",
      filename: "tech_thumbnail.png",
      filenamePath: "thumbnails/tech_thumbnail.png",
      resolution: "1280 × 720 • PNG",
      caption: "Modern tech thumbnail design featuring atmospheric neon accents, sharp subject framing, and clean negative space designed for technology channels."
    }
  ]
};
