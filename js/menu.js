export function dropdownMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".menu");
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("toggle");
    });
}