const htmlTag = document.getElementById("htmlTag");
const switchBtn = document.getElementById("switch");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

switchBtn.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");

  if (htmlTag.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlTag.classList.add("dark");
  } else {
    htmlTag.classList.remove("dark");
  }
});

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
