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
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        // Optional parameters
        freeMode: true,
        loop: true,
        allowTouchMove: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 5.5,
        spaceBetween: 32,
        speed: 10000,
        // Responsive breakpoints
        // Customize how many slides are shown based on screen size
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
