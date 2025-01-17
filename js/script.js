// JavaScript functionality for Nexar Institute Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Apply Now button functionality
    const applyNowButton = document.querySelector(".btn");
    if (applyNowButton) {
        applyNowButton.addEventListener("click", () => {
            window.location.href = "admission-form.html";
        });
    }

    // Placeholder interaction for images
    const imagePlaceholders = document.querySelectorAll(".image-placeholder");
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener("click", () => {
            alert("This is a placeholder. Replace it with your desired image.");
        });
    });

    // Form validation for admissions form
    const admissionForm = document.querySelector("#admission-form");
    if (admissionForm) {
        admissionForm.addEventListener("submit", event => {
            const name = document.querySelector("#fullName").value.trim();
            const email = document.querySelector("#email").value.trim();
            const program = document.querySelector("#program").value;

            if (!name || !email || !program) {
                event.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.querySelector("#back-to-top");

    // Show the button when the user scrolls down 300px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to the top smoothly when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

