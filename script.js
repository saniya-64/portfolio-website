const sideMenu = document.querySelector('#sideMenu');
const navBar=document.querySelector("nav");
const navLink=document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );

    navLink.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );

    navLink.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50"
    );
  }
});
// -------- Dark Mode --------

// Apply saved theme on page load
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Toggle theme
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
