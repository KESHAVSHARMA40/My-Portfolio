 // ====== Toggle mobile navigation ======
 const menuToggle = document.getElementById("menu-toggle");
 const navList = document.getElementById("nav-list");

 menuToggle.addEventListener("click", () => {
   navList.classList.toggle("active");
 });

 // ====== Smooth scroll for nav links ======
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener("click", function (e) {
     e.preventDefault();
     const target = document.querySelector(this.getAttribute("href"));
     if (target) {
       target.scrollIntoView({
         behavior: "smooth"
       });
       navList.classList.remove("active"); // Close menu on mobile after click
     }
   });
 });

 // ====== Highlight active section in navbar (ScrollSpy) ======
 const sections = document.querySelectorAll("section");
 const navLinks = document.querySelectorAll(".nav-list a");

 window.addEventListener("scroll", () => {
   let current = "";
   sections.forEach(section => {
     const sectionTop = section.offsetTop - 60;
     if (scrollY >= sectionTop) {
       current = section.getAttribute("id");
     }
   });

   navLinks.forEach(link => {
     link.classList.remove("active");
     if (link.getAttribute("href") === `#${current}`) {
       link.classList.add("active");
     }
   });
 });