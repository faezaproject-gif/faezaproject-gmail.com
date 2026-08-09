console.log("Faeza Project Siap Dibangun 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const navMenu = document.querySelector("nav ul");

  if (!menuButton || !navMenu) return;

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
