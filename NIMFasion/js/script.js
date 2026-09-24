// Smart Dynamic Date & Time System
function updateSmartClock() {
    const clockElement = document.getElementById('datetime-display');
    if (!clockElement) return;

    const now = new Date();

    // Days & Months
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    // 12-Hour Time Format
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Dynamic Time-based Greeting & Icon
    let greeting = '';
    let icon = '';
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning';
        icon = '☀️';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Good Afternoon';
        icon = '🌤️';
    } else if (hours >= 17 && hours < 21) {
        greeting = 'Good Evening';
        icon = '🌆';
    } else {
        greeting = 'Good Night';
        icon = '🌙';
    }

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');

    // Smart UI HTML Markup
    clockElement.innerHTML = `
        <span class="badge bg-primary bg-opacity-10 text-primary me-2 px-2 py-1 rounded-pill">
            <span class="live-dot me-1"></span> ${greeting} ${icon}
        </span>
        <span class="fw-semibold text-dark">${dayName}, ${dateNum} ${monthName} ${year}</span>
        <span class="text-muted mx-2">|</span>
        <span class="fw-bold text-primary font-monospace fs-6">${formattedHours}:${minutes}:${seconds} <small class="text-uppercase">${ampm}</small></span>
    `;
}

// 1 second interval e update korbe
setInterval(updateSmartClock, 1000);
updateSmartClock();

// Form Submit Handler
function handleFormSubmit(event, message) {
    event.preventDefault();
    alert(message);
}


// 1. Cart initialization (localStorage theke data load korbe)
// 1. Cart initialization
let cart = JSON.parse(localStorage.getItem('nim_cart')) || [];

// Page load halei DOM ready hole count update korbe
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateSmartClock();
});

// 2. Add to Cart Function
function addToCart(productName, price, imageSrc) {
    // LocalStorage theke latest cart state load kora
    cart = JSON.parse(localStorage.getItem('nim_cart')) || [];

    // Existing item check
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            image: imageSrc,
            quantity: 1
        });
    }

    // LocalStorage save
    localStorage.setItem('nim_cart', JSON.stringify(cart));

    // UI Update
    updateCartCount();

    // Feedback alert
    alert(`"${productName}" cart-e add hoyeche!`);
}

// 3. Cart Badge Count Update
function updateCartCount() {
    const cartBadge = document.getElementById('cart-count');
    cart = JSON.parse(localStorage.getItem('nim_cart')) || [];
    
    if (cartBadge) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.innerText = totalCount;
    }
}

// 4. Clock Function
function updateSmartClock() {
    const clockElement = document.getElementById('datetime-display');
    if (!clockElement) return;

    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');

    clockElement.innerHTML = `
        <span class="badge bg-primary bg-opacity-10 text-primary me-2 px-2 py-1 rounded-pill">
            <span class="live-dot me-1"></span> NIM Store
        </span>
        <span class="fw-semibold text-dark">${dayName}, ${dateNum} ${monthName} ${year}</span>
        <span class="text-muted mx-2">|</span>
        <span class="fw-bold text-primary font-monospace fs-6">${formattedHours}:${minutes}:${seconds} <small class="text-uppercase">${ampm}</small></span>
    `;
}

setInterval(updateSmartClock, 1000);

function handleFormSubmit(event, message) {
    event.preventDefault();
    alert(message);
}