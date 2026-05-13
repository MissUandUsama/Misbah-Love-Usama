function showScreen(screenNum) {
    // Music play logic
    const music = document.getElementById('bgMusic');
    if(music) {
        music.play().catch(e => console.log("Music interaction required"));
    }

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('screen' + screenNum).classList.remove('hidden');

    if(screenNum === 2) {
        startTyping();
    }
}

function startTyping() {
    const text = "I am deeply sorry for everything. I never wanted to hurt the person who means the world to me. Please, let's smile together again... ❤️";
    const el = document.getElementById('typing-text');
    el.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
        if(i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 60);
}

function createFloater() {
    const container = document.getElementById('flow-container');
    const items = ['❤️', '🕊️', '🌸', '✨'];
    const floater = document.createElement('div');
    floater.className = 'floater';
    floater.innerHTML = items[Math.floor(Math.random() * items.length)];
    floater.style.left = Math.random() * 100 + 'vw';
    floater.style.fontSize = Math.random() * 15 + 15 + 'px';
    floater.style.animationDuration = Math.random() * 4 + 5 + 's';
    container.appendChild(floater);
    setTimeout(() => floater.remove(), 8000);
}

document.querySelectorAll('.polaroid').forEach(p => {
    const randomRotation = Math.floor(Math.random() * 12 - 6);
    p.style.setProperty('--r', randomRotation + 'deg');
});

setInterval(createFloater, 500);
