/* =============================================================
   IPP Ltd — main.js
   Header scroll · Hamburger · Fade-in · Active nav
   Sin librerías externas.
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ─── 1. HEADER: transparent at top → dark on scroll ─────── */
  const header = document.getElementById("site-header");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); /* run once on load */
  }

  /* ─── 2. HAMBURGER MENU ───────────────────────────────────── */
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    /* Close drawer when any link is tapped */
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ─── 3. ACTIVE NAV LINK ──────────────────────────────────── */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a, .footer__nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* ─── 3b. HERO CAROUSEL ──────────────────────────────────── */
  const carousel = document.getElementById("hero-carousel");

  if (carousel) {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots   = carousel.querySelectorAll(".carousel-dot");
    let current  = 0;
    let timer    = null;

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
    }

    function startTimer() {
      timer = setInterval(() => goTo(current + 1), 6000);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        stopTimer();
        goTo(Number(dot.dataset.index));
        startTimer();
      });
    });

    carousel.addEventListener("mouseenter", stopTimer);
    carousel.addEventListener("mouseleave", startTimer);

    startTimer();
  }

  /* ─── 4. SCROLL ANIMATIONS (fade-in + float-in) ─────────── */
  const animEls = document.querySelectorAll(".fade-in, .float-in");

  if ("IntersectionObserver" in window && animEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); /* animate once */
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -40px 0px" }
    );
    animEls.forEach(el => observer.observe(el));
  } else {
    animEls.forEach(el => el.classList.add("visible"));
  }

});
