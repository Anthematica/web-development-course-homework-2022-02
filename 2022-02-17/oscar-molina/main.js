const sideMenu = document.querySelector(".side-menu-container");
const menuIcon = document.querySelector(".icon-menu");
const closeIcon = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
    sideMenu.style.transform = "translateX(0)";
});

closeIcon.addEventListener("click", () => {
    sideMenu.style.transform = "translateX(100%)";
});
