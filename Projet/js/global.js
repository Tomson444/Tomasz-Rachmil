document.addEventListener('DOMContentLoaded', () => {
   
    let timeSpent = localStorage.getItem('timeSpent');
    if (!timeSpent) {
        timeSpent = 0;
    } else {
        timeSpent = parseInt(timeSpent);
    }

    function updateTimeSpent() {
        timeSpent++;
        localStorage.setItem('timeSpent', timeSpent);
        document.getElementById('time-spent').textContent = `Czas spędzony na stronie: ${timeSpent} sekund`;
    }
    setInterval(updateTimeSpent, 1000);
    updateTimeSpent(); 
});