document.addEventListener('DOMContentLoaded', () => {
    // Bengali Date Setup
    const dateEl = document.getElementById('bengali-date');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('bn-BD', options);
        dateEl.innerText = today;
    }
});

// Live Search Filter Function
function searchNews() {
    const input = document.getElementById('pa-search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.news-item');

    articles.forEach(item => {
        const title = item.innerText.toLowerCase();
        if (title.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}