// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add a fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".home").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".home").style.transition = "opacity 1.5s ease-in-out";
        document.querySelector(".home").style.opacity = 1;
    }, 200);
});

// Toggle a mobile-friendly menu (if needed in the future)
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector("header").prepend(menuToggle);

menuToggle.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            
            // Redirect smoothly to the clicked page
            window.location.href = targetPage;
        });
    });
});
