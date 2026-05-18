// 1. Mobile Seamless Music Button Trigger
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');
const trackStatus = document.querySelector('.track-status');

playBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().then(() => {
            playBtn.textContent = "⏸ PAUSE";
            trackStatus.textContent = "Playing love notes...";
            trackStatus.style.color = "#85e3b3"; // Subtle Green for playing state
        }).catch(err => {
            console.log("Audio standard mobile block active: ", err);
        });
    } else {
        music.pause();
        playBtn.textContent = "▶ PLAY";
        trackStatus.textContent = "Music paused";
        trackStatus.style.color = "#c5a059";
    }
});

// 2. Mobile Interactive Tap Envelope Handler
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// 3. Precision Luxury Countdown Timer Engine
// APNI ENGAGEMENT DATE SET KAREIN (Format: YYYY-MM-DD)
const engagementDate = new Date('2024-03-06T00:00:00'); 

function updateMobileClock() {
    const now = new Date();
    const difference = now - engagementDate; 

    // Time Math
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const clockElement = document.getElementById('luxury-clock');
    
    if(clockElement) {
        clockElement.innerHTML = `
            <div class="counter-box"><span>${days}</span><p>Days</p></div>
            <div class="counter-box"><span>${hours}</span><p>Hours</p></div>
            <div class="counter-box"><span>${minutes}</span><p>Mins</p></div>
            <div class="counter-box"><span>${seconds}</span><p>Secs</p></div>
        `;
    }
}

// Tick interval initialization
setInterval(updateMobileClock, 1000);
updateMobileClock();
