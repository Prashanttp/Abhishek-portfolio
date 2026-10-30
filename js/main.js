/**
 * Abhishek Choudhary Portfolio – Main JavaScript
 * Clean, lightweight, zero external dependencies
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initLightbox();
  initContactCopy();
  initContactForm();
  initBackToTop();
  highlightActiveNav();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close nav when clicking outside or clicking link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("active");
      navMenu.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Active Navigation Highlight based on current path
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const page = currentPath.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === page ||
      (page === "" && href === "index.html") ||
      (page === "index.html" && href === "index.html")
    ) {
      link.classList.add("active");
    } else if (href && !href.startsWith("#") && href.length > 1) {
      if (page.includes(href)) {
        link.classList.add("active");
      }
    }
  });
}

/**
 * Lightbox Modal for Graphic Design Thumbnails
 */
let currentLightboxIndex = 0;
let lightboxItems = [];

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  const modalImg = document.getElementById("lightboxImg");
  const modalFilename = document.getElementById("lightboxFilename");
  const modalCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  // Collect thumbnail cards
  const cards = document.querySelectorAll(".thumbnail-preview-wrap, .btn-enlarge");
  const thumbnailCards = document.querySelectorAll(".thumbnail-card");

  lightboxItems = Array.from(thumbnailCards).map((card) => {
    const img = card.querySelector(".thumbnail-img");
    const filenameEl = card.querySelector(".thumbnail-filename-title");
    return {
      src: img ? img.getAttribute("src") : "",
      filename: filenameEl ? filenameEl.textContent.trim() : "Thumbnail Image"
    };
  });

  function openLightbox(index) {
    if (index < 0) index = lightboxItems.length - 1;
    if (index >= lightboxItems.length) index = 0;
    currentLightboxIndex = index;

    const item = lightboxItems[currentLightboxIndex];
    if (!item) return;

    modalImg.src = item.src;
    modalImg.alt = item.filename;
    modalFilename.textContent = item.filename;
    if (modalCounter) {
      modalCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function nextLightbox() {
    openLightbox(currentLightboxIndex + 1);
  }

  function prevLightbox() {
    openLightbox(currentLightboxIndex - 1);
  }

  // Attach click to all trigger elements
  thumbnailCards.forEach((card, idx) => {
    const triggerArea = card.querySelector(".thumbnail-preview-wrap");
    const enlargeBtn = card.querySelector(".btn-enlarge");

    if (triggerArea) {
      triggerArea.addEventListener("click", () => openLightbox(idx));
    }
    if (enlargeBtn) {
      enlargeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(idx);
      });
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextLightbox);
  if (prevBtn) prevBtn.addEventListener("click", prevLightbox);

  // Close on backdrop click (outside image container)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
  });
}

/**
 * Copy Email to Clipboard with Toast Notification
 */
function initContactCopy() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailTextEl = document.getElementById("emailValue");

  if (!copyBtn || !emailTextEl) return;

  copyBtn.addEventListener("click", async () => {
    const email = emailTextEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email address copied to clipboard!");
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `✓ Copied`;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    } catch (err) {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("Email address copied to clipboard!");
    }
  });
}

/**
 * Contact Form Handler (Zero-Backend Client-Friendly)
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName")?.value || "";
    const email = document.getElementById("senderEmail")?.value || "";
    const subject = document.getElementById("senderSubject")?.value || "Project Inquiry";
    const message = document.getElementById("senderMessage")?.value || "";

    const targetEmail = "abhishekchoudhary.edits@gmail.com";
    const bodyContent = `Hi Abhishek,%0D%0A%0D%0AMy name is ${encodeURIComponent(
      name
    )} (${encodeURIComponent(email)}).%0D%0A%0D%0A${encodeURIComponent(message)}`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${bodyContent}`;

    window.location.href = mailtoUrl;
    showToast("Launching your email client...");
  });
}

/**
 * Toast Notice
 */
function showToast(message) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/**
 * Smooth Back to Top
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
