function updateCountdown() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

    const timeDiff = midnight - now;
    if (timeDiff < 120000) {
        // Add 30 minutes (1800000 milliseconds) if less than 2 minutes remain
        timeDiff += 1800000;
    }

    if (timeDiff > 0) {
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        document.getElementById('countdown').textContent = "00:00:00";
    }
}


setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display correct time immediately