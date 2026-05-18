const loveBtn = document.getElementById("loveBtn");
const musicBtn = document.getElementById("musicBtn");
const surpriseText = document.getElementById("surpriseText");
const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

let musicPlaying = false;

loveBtn.addEventListener("click", () => {
  surpriseText.classList.remove("hidden");
  surpriseText.style.animation = "none";
  void surpriseText.offsetWidth;
  surpriseText.style.animation = "fadeInUp 0.7s ease forwards";
  createHearts(12);
});

musicBtn.addEventListener("click", async () => {
  try {
    if (musicPlaying) {
      bgMusic.pause();
      musicBtn.textContent = "Play Song 🎵";
    } else {
      await bgMusic.play();
      musicBtn.textContent = "Pause Song ⏸️";
    }
    musicPlaying = !musicPlaying;
  } catch (err) {
    alert("Song play nahi hua. Please ensure song.mp3 file exists.");
  }
});

// Create floating hearts continuously
setInterval(() => {
  createHearts(1);
}, 1800);

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";

    const size = Math.random() * 12 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 4 + 5;

    heart.style.left = `${left}%`;
    heart.style.bottom = `-20px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.opacity = `${Math.random() * 0.5 + 0.35}`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}

// Smooth fade animation for surprise text
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
