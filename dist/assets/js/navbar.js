document.addEventListener('DOMContentLoaded', () => {
    // Add Bootstrap's collapse functionality to navbar toggler
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            const target = document.getElementById(navbarToggler.getAttribute('data-bs-target').substring(1));
            if (target) {
                target.classList.toggle('show');
            }
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70, // Offset for fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add animation classes to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        // Add animation classes when elements come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
});
