// JavaScript code for toggling nav menu

    const menuButton = document.querySelector(".bi-three-dots");
    const menu = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("ul_active");
    });