function showScreen(screenNum) {
    const music = document.getElementById('bgMusic');
    if(music && screenNum === 2) {
        music.play();
    }

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const nextScreen = document.getElementById('screen' + screenNum);
    nextScreen.classList.remove('hidden');

    if(screenNum === 2) {
        startTyping();
    }
}

function startTyping() {
    const text = "Misbah, I'm writing this with a heavy heart. My anger was a mistake, but my love for you is the only truth I know. Please forgive your Osama... ❤️";
    const el = document.getElementById('typing-text');
    el.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
        if(i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else { clearInterval(timer); }
    }, 65);
}

// Interactive floating hearts/embers
setInterval(() => {
    const container = document.getElementById('flow-container');
    const items = ['❤️', '✨', '🌹', '🤍'];
    const floater = document.createElement('div');
    floater.className = 'floater';
    floater.innerHTML = items[Math.floor(Math.random() * items.length)];
    floater.style.left = Math.random() * 100 + 'vw';
    floater.style.fontSize = Math.random() * 20 + 15 + 'px';
    floater.style.animationDuration = Math.random() * 5 + 5 + 's';
    container.appendChild(floater);
    setTimeout(() => floater.remove(), 10000);
}, 400);

document.querySelectorAll('.polaroid').forEach(p => {
    const randomRotation = Math.floor(Math.random() * 10 - 5);
    p.style.setProperty('--r', randomRotation + 'deg');
});
