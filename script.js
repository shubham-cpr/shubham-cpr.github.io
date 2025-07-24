const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
