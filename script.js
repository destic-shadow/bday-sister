// 🎊 Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function ConfettiPiece() {
  this.x = random(0, canvas.width);
  this.y = random(-20, canvas.height);
  this.size = random(5, 10);
  this.color = `hsl(${random(0,360)}, 100%, 50%)`;
  this.speed = random(2, 5);
}

function startConfetti() {
  for (let i = 0; i < 300; i++) {
    confettiParticles.push(new ConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach((p, i) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) confettiParticles.splice(i, 1);
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 📸 Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".photo-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    // Open bigger version (if available)
    lightboxImg.src = img.src.replace("200", "600");
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}
