// 1. Music Autoplay Handler (Browsers block direct autoplay)
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play().then(() => {
            musicBtn.textContent = "⏸️ Pause Music";
        }).catch(err => {
            console.log("Audio play blocked: ", err);
        });
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});

// 2. Countdown Timer / Days Together Counter
// APNI ENGAGEMENT DATE YAHA SET KAREIN (Format: YYYY-MM-DD)
const engagementDate = new Date('2024-03-06T00:00:00'); 

function updateCounter() {
    const now = new Date();
    const difference = now - engagementDate; // Calculate time passed since engagement

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    
    countdownElement.innerHTML = `
        <div class="box"><span>${days}</span>Days</div>
        <div class="box"><span>${hours}</span>Hours</div>
        <div class="box"><span>${minutes}</span>Minutes</div>
        <div class="box"><span>${seconds}</span>Seconds</div>
    `;
}

// Update counter every second
setInterval(updateCounter, 1000);
updateCounter();
