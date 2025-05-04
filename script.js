// ====== Toggle mobile navigation ======
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// ====== Smooth scroll for nav links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Close mobile nav after clicking a link
      if (navList && navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    }
  });
});

// ====== ScrollSpy: Highlight active nav item ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
    }
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Save the user's preference in localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  });