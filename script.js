// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = document.querySelector(".header").offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(245, 245, 220, 0.98)";
    header.style.boxShadow = "0 2px 10px rgba(139, 69, 19, 0.1)";
  } else {
    header.style.background = "rgba(245, 245, 220, 0.95)";
    header.style.boxShadow = "none";
  }
});

// Hero background opacity change on scroll
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollPosition = window.scrollY;
  const heroHeight = hero.offsetHeight;

  // Calculate opacity based on scroll position
  // At the top (scrollY = 0): opacity = 0.15 (light)
  // At the bottom of hero (scrollY = heroHeight): opacity = 0.6 (dark)
  const maxOpacity = 0.6;
  const minOpacity = 0.15;
  const opacity = Math.min(
    maxOpacity,
    minOpacity + (scrollPosition / heroHeight) * (maxOpacity - minOpacity)
  );

  // Apply the opacity to the hero background
  hero.style.setProperty("--hero-opacity", opacity);
});

// Newsletter form submission (demo functionality)
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // Demo success message
    const formGroup = this.querySelector(".form-group");
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.innerHTML = `
            <p style="color: var(--primary-brown); font-weight: 600; margin-top: 1rem;">
                Thank you for subscribing! We'll keep you updated with our latest news and seasonal specials.
            </p>
        `;

    // Remove any existing success message
    const existingMessage = this.querySelector(".success-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Add success message
    this.appendChild(successMessage);

    // Clear the form
    this.querySelector('input[type="email"]').value = "";

    // Remove success message after 5 seconds
    setTimeout(() => {
      if (successMessage.parentNode) {
        successMessage.remove();
      }
    }, 5000);
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Menu cards animation observer
const menuObserverOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const menuObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const menuCards = entry.target.querySelectorAll(".menu-card");

    if (entry.isIntersecting) {
      // Animate cards in when section comes into view
      menuCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate-in");
        }, index * 200); // Stagger the animation
      });
    } else {
      // Reset cards when section goes out of view
      menuCards.forEach((card) => {
        card.classList.remove("animate-in");
      });
    }
  });
}, menuObserverOptions);

// Observe sections for animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Observe menu section specifically for card animations
  const menuSection = document.querySelector(".menu");
  if (menuSection) {
    menuObserver.observe(menuSection);
  }
});

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
});

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Focus management for mobile menu
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});

// Add focus trap for mobile menu
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  });
}

// Apply focus trap to mobile menu when it's active
const originalToggle = hamburger.onclick;
hamburger.onclick = function () {
  originalToggle && originalToggle.call(this);

  if (navMenu.classList.contains("active")) {
    trapFocus(navMenu);
  }
};
