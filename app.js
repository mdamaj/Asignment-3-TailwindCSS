const switchBtn = document.getElementById("switch");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");


switchBtn.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");
});


window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});


menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
