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

// Function to handle real-time user comment submission
function addComment(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('commenter-name');
    const messageInput = document.getElementById('commenter-message');
    const commentList = document.getElementById('comments-list');

    if (!nameInput.value || !messageInput.value) return;

    // Create new comment element
    const newComment = document.createElement('div');
    newComment.className = 'border-bottom pb-2 mb-2 bg-light p-2 rounded';
    newComment.innerHTML = `
        <strong class="small d-block text-dark">${nameInput.value}</strong>
        <span class="text-secondary d-block mb-1" style="font-size: 0.75rem;">এখনই পোস্ট করা হয়েছে</span>
        <p class="small mb-0 text-dark">${messageInput.value}</p>
    `;

    // Append to top of comment list
    commentList.prepend(newComment);

    // Reset input fields
    nameInput.value = '';
    messageInput.value = '';
}