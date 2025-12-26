/* ================= NAVBAR ================= */
function toggleMenu(){
  const nav = document.getElementById("navMenu");
  if(nav) nav.classList.toggle("show");
}

/* ================= LIGHTBOX GALERI ================= */
function openImg(src){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  if(lightbox && img){
    lightbox.style.display = "flex";
    img.src = src;
  }
}

function closeImg(){
  const lightbox = document.getElementById("lightbox");
  if(lightbox) lightbox.style.display = "none";
}

/* ================= ANIMASI FADE UP ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});
// ===== HERO SLIDER =====
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
