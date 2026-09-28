function updateDateTime() {
    const el = document.getElementById("liveClock");
    if (!el) return;
    const now = new Date();
    el.innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

function handleReservation(event) {
    event.preventDefault();

    const name = document.getElementById("resName").value;
    const email = document.getElementById("resEmail").value;
    const phone = document.getElementById("resPhone").value;
    const guests = document.getElementById("resGuests").value;
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;

    const summaryText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`;

    document.getElementById("resSummaryDetails").innerText = summaryText;

    const modal = new bootstrap.Modal(document.getElementById("resModal"));
    modal.show();
}