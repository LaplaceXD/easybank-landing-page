const hamburger = document.querySelector(".js-hamburger");
const hamburgerIcon = document.querySelector(".js-hamburger-icon");
const hamburgerClose = document.querySelector(".js-hamburger-close");
const tint = document.querySelector(".js-tint");
const navItemContainer = document.querySelector(".js-container");
const navItems = document.querySelectorAll(".js-item");

let navToggled = false;

hamburger.addEventListener("click", async function () {
    if (!navToggled) {
        hamburgerIcon.classList.remove("is-active");
        hamburgerClose.classList.add("is-active");
        tint.classList.add("is-active");
        navItemContainer.classList.add("is-active");
        await new Promise((resolve) => setTimeout(resolve, 250));
        navItems.forEach((navItem) => navItem.classList.add("is-active"));
    } else {
        hamburgerClose.classList.remove("is-active");
        hamburgerIcon.classList.add("is-active");
        navItems.forEach((navItem) => navItem.classList.remove("is-active"));
        await new Promise((resolve) => setTimeout(resolve, 250));
        navItemContainer.classList.remove("is-active");
        await new Promise((resolve) => setTimeout(resolve, 250));
        tint.classList.remove("is-active");
    } navToggled = !navToggled;
});
