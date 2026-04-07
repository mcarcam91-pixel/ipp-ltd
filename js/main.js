/* =============================================================
   IPP Ltd — main.js
   Header scroll · Hamburger · Fade-in · Active nav
   Sin librerías externas.
   ============================================================= */

/* ─── 1. HEADER: smart transparent/scrolled state ────────────
   Corre inmediatamente (script al final del body = DOM listo).
   También se re-ejecuta en DOMContentLoaded y en scroll.
   ─────────────────────────────────────────────────────────── */
const header = document.getElementById("site-header");

if (header) {
  function updateHeader() {
    const scrolled = window.scrollY > 80;
    const hasHero  = document.querySelector(".hero-carousel, .page-hero");
    const footer   = document.querySelector(".site-footer");

    if (hasHero) {
      header.classList.toggle("header--transparent", !scrolled);
    } else {
      header.classList.remove("header--transparent");
    }

    header.classList.toggle("scrolled", scrolled);

    /* Ocultar header cuando el footer entra en viewport */
    let footerVisible = false;
    if (footer) {
      footerVisible = footer.getBoundingClientRect().top < window.innerHeight;
    }
    header.classList.toggle("header--hidden", footerVisible);
  }

  /* Ejecutar de forma síncrona e inmediata */
  updateHeader();

  /* Re-ejecutar en DOMContentLoaded por si acaso */
  document.addEventListener("DOMContentLoaded", updateHeader);

  window.addEventListener("scroll", updateHeader, { passive: true });
}


/* ─── El resto requiere DOM completamente listo ─────────────── */
document.addEventListener("DOMContentLoaded", () => {

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

  /* ─── 4. HERO CAROUSEL ───────────────────────────────────── */
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

  /* ─── 5. SCROLL ANIMATIONS (fade-in + float-in) ─────────── */
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
