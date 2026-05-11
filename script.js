function showScreen(screenNum) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    // Show selected screen
    document.getElementById('screen' + screenNum).classList.remove('hidden');

    if(screenNum === 2) {
        startTyping();
    }
}

// Typing Effect
function startTyping() {
    const text = "In every heartbeat of mine, there is a piece of you that I’ll cherish forever... ❤️";
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
    }, 100);
}

// Hearts and Flowers Background
function createFloater() {
    const container = document.getElementById('flow-container');
    const items = ['❤️', '🌸', '💖', '🌹', '✨'];
    const floater = document.createElement('div');
    
    floater.className = 'floater';
    floater.innerHTML = items[Math.floor(Math.random() * items.length)];
    floater.style.left = Math.random() * 100 + 'vw';
    floater.style.fontSize = Math.random() * 20 + 20 + 'px';
    floater.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    container.appendChild(floater);
    setTimeout(() => floater.remove(), 7000);
}

// Randomly rotate polaroids
document.querySelectorAll('.polaroid').forEach(p => {
    const randomRotation = Math.floor(Math.random() * 20 - 10);
    p.style.setProperty('--r', randomRotation + 'deg');
});

setInterval(createFloater, 400);