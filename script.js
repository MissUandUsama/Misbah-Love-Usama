// 1. Premium Music Player Trigger
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().then(() => {
            playBtn.textContent = "⏸ Pause";
        }).catch(err => console.log("Playback issue: ", err));
    } else {
        music.pause();
        playBtn.textContent = "▶ Play";
    }
});

// 2. Interactive Letter Envelope Trigger
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// 3. High-End Countdown/Togetherness Clock
const engagementDate = new Date('2024-03-06T00:00:00'); 

function renderLuxuryCounter() {
    const now = new Date();
    const diff = now - engagementDate;

    // Calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const clockContainer = document.getElementById('luxury-counter');
    
    clockContainer.innerHTML = `
        <div class="counter-box"><span>${days}</span> Days</div>
        <div class="counter-box"><span>${hours}</span> Hours</div>
        <div class="counter-box"><span>${minutes}</span> Minutes</div>
        <div class="counter-box"><span>${seconds}</span> Seconds</div>
    `;
}

// Tick setup
setInterval(renderLuxuryCounter, 1000);
renderLuxuryCounter();
