// 1. Custom Luxury Cursor Logic
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Enhanced Chapter Navigation
function nextChapter(num) {
    // Music play logic
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play().catch(error => console.log("Audio play deferred until interaction."));
    }

    // Chapters transition
    const chapters = document.querySelectorAll('.chapter');
    chapters.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none'; // Performance optimization
    });

    const target = document.getElementById('chap' + num);
    target.style.display = 'flex';
    
    // Smooth delay for opacity transition
    setTimeout(() => {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

    // Trigger specific animations based on chapter
    if (num === 2) {
        startTyping();
    }
}

// 3. Professional Typing Animation for Misbah
function startTyping() {
    const text = "Misbah❤️ Meri Jaan❤️ Sorry Yaar🥺❤️... Main aap pe blkl ghussa nahi krna chahta... But Misbah❤️ you are My Girl❤️ My Love❤️ My life❤️... is waja se thora zyadah keh diya shayd... I know you are loyal Meri Jaan❤️... Bs Misbah💗💖 Hamari khushiyan ek doosre se honi chahiyen... Main chahta hun k hamare drmayana just husband wife jesa na ho.. bl k ek friend ki trha hansi mazak bhi ho❤️... Hum ek doosre k saath khoob enjoy kren... ya Family k saath kren... jb hamari enjoyment sirf ek doosre k saath hogi ya Family k saath hogi... To kabhi aesa kuch hoga hi nahi jis se is trha k ma'amlaat hon jis se hamnara rishta kmzor pr jae.. Misbah❤️ mere dil mein sch mein bohot ajeeb sa ho rha tha... Phir aaap se baat kr k sukoon mila.. wrna main kl bhi nahi so pata... Mujhe aap se emptionally attachment hai... Main aap se real LOVE krta hun... Mujhe aap se emptionally attachment hai❤️ Plzz ab ye baat na nikle.. I know aap Loyal hain mere liye❤️... Aur bohot Achi hain❤️ aur Intention ghalt nahi thi aapki... So plzz ab aap relax rahen.. Agr aap chahti hian k main bhi normal rahun... to aap blkl bhi upset na hon aur na upst dikhen❤️ I LOVE YOU MISBAH MERI JAAN❤️💗❤️";
    
    const el = document.getElementById('typing-text');
    if (el.innerHTML !== "") return; // Avoid re-triggering

    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            // Random speed for a more "human" feel
            setTimeout(type, Math.random() * 50 + 30);
        }
    }
    type();
}

// 4. Elegant Gold Dust (Particles)
function createGoldDust() {
    const container = document.body;
    const particle = document.createElement('div');
    
    const size = Math.random() * 3 + 1 + 'px';
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '110vh';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.background = 'rgba(212, 175, 55, 0.6)';
    particle.style.boxShadow = '0 0 8px #d4af37';
    particle.style.borderRadius = '50%';
    particle.style.zIndex = '1';
    particle.style.pointerEvents = 'none';
    
    particle.style.animation = `floatParticle ${Math.random() * 4 + 6}s linear forwards`;
    
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 8000);
}

setInterval(createGoldDust, 150);

// Style for Particles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes floatParticle {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
    }
    .cursor {
        width: 20px;
        height: 20px;
        border: 1px solid #d4af37;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
    }
`;
document.head.appendChild(styleSheet);
