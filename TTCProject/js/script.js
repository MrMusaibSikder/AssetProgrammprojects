// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    initFAQAccordion();
});

// 1. Current Date & Time Display System (Requirement 14 & 6)
// Smart Dynamic Date & Time System
function updateDateTime() {
    const clockElement = document.getElementById('live-clock');
    const footerClock = document.getElementById('footer-clock');

    const now = new Date();

    // Days & Months (Full Name)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()]; // Full day name (e.g. Thursday)
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
    const smartClockHTML = `
        <span class="badge bg-primary bg-opacity-20 text-info me-2 px-3 py-1 rounded-pill align-middle shadow-sm border border-primary border-opacity-25">
            <span class="live-dot me-1"></span> ${greeting} ${icon}
        </span>
        <span class="fw-semibold text-light">${dayName}, ${dateNum} ${monthName} ${year}</span>
        <span class="text-secondary mx-2">|</span>
        <span class="fw-bold text-info font-monospace fs-6">${formattedHours}:${minutes}:${seconds} <small class="text-uppercase text-light">${ampm}</small></span>
    `;

    if (clockElement) clockElement.innerHTML = smartClockHTML;
    if (footerClock) footerClock.innerHTML = smartClockHTML;
}

// 1 second পর পর সময় আপডেট হবে
setInterval(updateDateTime, 1000);
document.addEventListener('DOMContentLoaded', updateDateTime);

// 2. Custom JavaScript Collapsible FAQ (Requirement d-i & 11)
function initFAQAccordion() {
    const acc = document.getElementsByClassName("faq-accordion-btn");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// 3. Contact Form Validation & Confirmation Popup Message (Requirement c-iii, c-iv & 3, 10)
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const mobile = document.getElementById('user-mobile').value.trim();
    const message = document.getElementById('user-message').value.trim();

    // Mobile validation: Number only & exactly 11 digits
    const mobileRegex = /^[0-9]{11}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Validation Error: Mobile number must contain numbers only and be exactly 11 digits long!");
        return false;
    }

    // Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Validation Error: Please enter a valid email address!");
        return false;
    }

    // Confirmation Popup Window Message
    alert(`Thank you, ${name}!\nYour message has been submitted successfully.\nWe will contact you shortly.`);
    
    // Reset form
    document.getElementById('contact-form').reset();
    return true;
}


// Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('ttc_theme', isDark ? 'dark' : 'light');
}

// Load Saved Theme
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('ttc_theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});


function filterFAQ() {
    const query = document.getElementById('faq-search').value.toLowerCase();
    const buttons = document.getElementsByClassName("faq-accordion-btn");
    
    for (let btn of buttons) {
        const text = btn.innerText.toLowerCase();
        const panel = btn.nextElementSibling;
        if (text.includes(query)) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
            panel.style.maxHeight = null;
        }
    }
}


document.getElementById('user-mobile')?.addEventListener('input', function(e) {
    const val = e.target.value;
    if (/^[0-9]{11}$/.test(val)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
    }
});


window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn?.classList.remove("d-none");
    } else {
        btn?.classList.add("d-none");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}