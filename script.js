// script.js
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Flicker effect
setInterval(() => {
    if (Math.random() > 0.95) {
        document.body.style.opacity = '0.95';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    }
}, 100);

// Konami code easter egg
let keys = [];
const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    keys.push(e.key);
    keys = keys.slice(-8);
    
    if (keys.join(',') === pattern.join(',')) {
        document.querySelector('.cipher').innerHTML += '<br><br>THE VEIL THINS';
    }
});
