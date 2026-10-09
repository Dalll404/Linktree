const toast = document.querySelector(".toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

document.querySelectorAll("[data-unavailable]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`Tautan ${link.dataset.unavailable} belum tersedia.`);
  });
});

document
  .querySelector("[data-copy-link]")
  .addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Tautan halaman berhasil disalin.");
    } catch {
      showToast("Browser tidak mengizinkan penyalinan tautan.");
    }
  });

document.querySelector("#year").textContent = new Date().getFullYear();
