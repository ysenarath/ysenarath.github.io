// Theme toggle shared by the site nav and the /newspaper masthead. ThemeScript.astro sets
// data-theme on <html> before paint; this flips it. A choice that matches the OS is
// forgotten, so the site goes back to following the OS preference.
export function bindThemeToggle(btn: HTMLElement | null) {
    if (!btn) return;
    const root = document.documentElement;
    const syncPressed = () =>
        btn.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));

    syncPressed();
    new MutationObserver(syncPressed).observe(root, {
        attributeFilter: ["data-theme"],
    });

    btn.addEventListener("click", () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        const system = matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        try {
            if (next === system) localStorage.removeItem("theme");
            else localStorage.setItem("theme", next);
        } catch {}
        root.dataset.theme = next;
    });
}
