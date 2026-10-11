const toast = document.querySelector(".toast");
const themeToggle = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.setAttribute("data-theme", isDark ? "dark" : "light");
  const icon = themeToggle?.querySelector(".theme-icon");

  if (icon) {
    icon.textContent = isDark ? "🌙" : "☀️";
  }

  localStorage.setItem("afdal-theme", theme);
}

const savedTheme = localStorage.getItem("afdal-theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle?.addEventListener("click", () => {
  const currentTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  showToast(`Tema diubah ke ${currentTheme === "dark" ? "gelap" : "terang"}.`);
});

document.querySelectorAll("[data-unavailable]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`Tautan ${link.dataset.unavailable} belum tersedia.`);
  });
});

document
  .querySelector("[data-copy-link]")
  ?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Tautan halaman berhasil disalin.");
    } catch {
      showToast("Browser tidak mengizinkan penyalinan tautan.");
    }
  });

document.querySelector("#year").textContent = new Date().getFullYear();
