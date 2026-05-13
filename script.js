// Function for Chapter Navigation
function nextChapter(num) {
    const music = document.getElementById('bgMusic');
    if(music.paused) music.play();

    document.querySelectorAll('.chapter').forEach(c => c.classList.remove('active'));
    setTimeout(() => {
        const target = document.getElementById('chap' + num);
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    if(num === 2) startTyping();
}

// Deep Apology Typing
function startTyping() {
    const text = "Misbah, mere alfaz gusse mein niklay thay, lekin meri mohabbat sachi hai. Aap meri zindagi ki sab se khoobsurat haqiqat hain. Please, mujhe apne dil se door mat karna... ❤️";
    const el = document.getElementById('typing-text');
    if(el.innerHTML !== "") return; // Prevent double typing
    
    let i = 0;
    const timer = setInterval(() => {
        if(i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else { clearInterval(timer); }
    }, 50);
}

// Sparkle/Particle Effect
setInterval(() => {
    const container = document.body;
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '110vh';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#d4af37';
    particle.style.boxShadow = '0 0 10px #d4af37';
    particle.style.borderRadius = '50%';
    particle.style.animation = `floatParticle ${Math.random() * 3 + 4}s linear forwards`;
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 7000);
}, 200);

const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes floatParticle {
        to { transform: translateY(-120vh); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);
