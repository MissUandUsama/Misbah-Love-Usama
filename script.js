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
    const text = "Misbah❤️ Meri Jaan❤️ Sorry Yaar🥺❤️... Main aap pe blkl ghussa nahi krna chahta... But Misbah❤️ you are My Girl❤️ My Love❤️ My life❤️... is waja se thora zyadah keh diya shayd... I know you are loyal Meri Jaan❤️... Bs Misbah💗💖 Hamari khushiyan ek doosre se honi chahiyen... Main chahta hun k hamare drmayana just husband wife jesa na ho.. bl k ek friend ki trha hansi mazak bhi ho❤️... Hum ek doosre k saath khoob enjoy kren... ya Family k saath kren... jb hamari enjoyment sirf ek doosre k saath hogi ya Family k saath hogi... To kabhi aesa kuch hoga hi nahi jis se is trha k ma'amlaat hon jis se hamnara rishta kmzor pr jae.. Misbah❤️ mere dil mein sch mein bohot ajeeb sa ho rha tha... Phir aaap se baat kr k sukoon mila.. wrna main kl bhi nahi so pata... Mujhe aap se emptionally attachment hai... Main aap se real LOVE krta hun... Mujhe aap se emptionally attachment hai❤️ Plzz ab ye baat na nikle.. I know aap Loyal hain mere liye❤️... Aur bohot Achi hain❤️ aur Intention ghalt nahi thi aapki... So plzz ab aap relax rahen.. Agr aap chahti hian k main bhi normal rahun... to aap blkl bhi upset na hon aur na upst dikhen❤️ I LOVE YOU MISBAH MERI JAAN❤️💗❤️";
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
