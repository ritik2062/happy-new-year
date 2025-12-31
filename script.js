// Generate twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Generate falling snow/confetti
function createSnow() {
    const snowContainer = document.getElementById('snow');
    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
        snowContainer.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 10000);
    }, 200);
}

// Fireworks animation on button click
document.getElementById('fireworks-btn').addEventListener('click', function() {
    const fireworks = document.getElementById('fireworks');
    for (let i = 0; i < 25; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random colors
        fireworks.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    }
});

// Initialize effects on load
window.onload = function() {
    createStars();
    createSnow();
};