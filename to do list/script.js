// Toggle Menu Sidebar
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", (e) => {
    document.body.classList.toggle("collapsed");
    e.currentTarget.classList.toggle("fa-chevron-right");
    e.currentTarget.classList.toggle("fa-chevron-left");
});

// Smooth Scroll untuk Scroll Down Button
document.querySelector(".scroll-down").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#section-target").scrollIntoView({
        behavior: "smooth"
    });
});

// Animasi Fade-In dari Bawah ke Atas saat Scroll
document.addEventListener("DOMContentLoaded", function () {
    const mainPage = document.querySelector(".main-page");

    function fadeInOnScroll() {
        const rect = mainPage.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50) {
            mainPage.classList.add("active");
        }
    }

    // Jalankan saat halaman di-scroll
    window.addEventListener("scroll", fadeInOnScroll);
    // Jalankan sekali saat halaman dimuat
    fadeInOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const line = document.querySelector(".scroll-line");

  function animateLine() {
      const rect = line.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
          line.style.width = "50%";
      }
  }

  window.addEventListener("scroll", animateLine);
  animateLine();
});
