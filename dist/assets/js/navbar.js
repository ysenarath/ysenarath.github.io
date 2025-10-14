document.addEventListener("DOMContentLoaded", () => {
  // Add Bootstrap's collapse functionality to navbar toggler
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      const target = document.getElementById(
        navbarToggler.getAttribute("data-bs-target").substring(1)
      );
      if (target) {
        target.classList.toggle("show");
      }
    });
  }
});

// on click of theme-toggle button, toggle the data-bs-theme attribute on the html element
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-bs-theme", newTheme);

      // Store the theme in localStorage
      localStorage.setItem("theme", newTheme);

      // Update the button icon
      const icon = themeToggleBtn.querySelector("i");
      if (icon) {
        icon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
      }
    });

    // Load the theme from localStorage on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-bs-theme", savedTheme);
      const icon = themeToggleBtn.querySelector("i");
      if (icon) {
        icon.className = savedTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
      }
    }
  }
});
