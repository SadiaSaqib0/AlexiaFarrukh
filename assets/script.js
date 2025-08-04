document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main > div");

    // Function to remove the 'active' class from all nav links
    const removeActive = () => {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
    };

    // Set up the IntersectionObserver
    const observerOptions = {
        root: null, // use the viewport as the container
        rootMargin: "0px",
        threshold: 0.5, // trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                removeActive();
                const sectionId = entry.target.getAttribute("id");
                const activeLink = document.querySelector(
                    `nav a[href="#${sectionId}"]`
                );
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
        observer.observe(section);
    });
});
