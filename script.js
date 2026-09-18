const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("research-site-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("research-site-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}
