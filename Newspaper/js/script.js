document.addEventListener('DOMContentLoaded', () => {
    const dateEl = document.getElementById('bengali-date');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.innerText = new Date().toLocaleDateString('bn-BD', options);
    }
});

function searchNews() {
    const input = document.getElementById('pa-search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.news-item');

    articles.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? 'block' : 'none';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    updateBengaliDateTime();
    setInterval(updateBengaliDateTime, 1000);
});

// Live Bengali Date and Time Formatter
function updateBengaliDateTime() {
    const dateEl = document.getElementById('bengali-date-time');
    if (!dateEl) return;

    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    };

    // Formats into Bengali Locale Standard
    dateEl.innerText = now.toLocaleString('bn-BD', options);
}

// Live News Search Logic
function searchNews() {
    const input = document.getElementById('pa-search-input')?.value.toLowerCase() || '';
    const articles = document.querySelectorAll('.news-item');

    articles.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? 'block' : 'none';
    });
}