document.addEventListener("DOMContentLoaded", () => {
    // Add Bootstrap's collapse functionality to navbar toggler
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
        navbarToggler.addEventListener("click", () => {
            const target = document.getElementById(
                navbarToggler.getAttribute("data-bs-target").substring(1),
            );
            if (target) {
                target.classList.toggle("show");
            }
        });
    }
});
