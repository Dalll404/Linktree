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

const timeElement = document.querySelector("#local-time");
const dateElement = document.querySelector("#local-date");
const timezoneElement = document.querySelector("#local-timezone");
const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});
const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function updateClock() {
  const now = new Date();
  timeElement.textContent = timeFormatter.format(now);
  timeElement.dateTime = now.toISOString();
  dateElement.textContent = dateFormatter.format(now);
  timezoneElement.textContent = timezone.replaceAll("_", " ");
}

updateClock();
window.setInterval(updateClock, 1000);

document.querySelector("#year").textContent = new Date().getFullYear();
