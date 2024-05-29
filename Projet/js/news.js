document.addEventListener('DOMContentLoaded', () => {

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `Zegar: ${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock(); 

   
    function updateDate() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        document.getElementById('date').textContent = `Data: ${day}.${month}.${year}`;
    }
    updateDate();

   
    function updateVisitCounter() {
        let visitCount = localStorage.getItem('visitCount');
        if (!visitCount) {
            visitCount = 0;
        }
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem('visitCount', visitCount);
        document.getElementById('visit-counter').textContent = `Liczba odwiedzin: ${visitCount}`;
    }
    updateVisitCounter();

    
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
function calculateVoltageDrop() {
    const z0 = parseFloat(document.getElementById('z0').value);
    const iB = parseFloat(document.getElementById('iB').value) || 0;
    const lBA = parseFloat(document.getElementById('lBA').value) || 0;
    const iC = parseFloat(document.getElementById('iC').value) || 0;
    const lCA = parseFloat(document.getElementById('lCA').value) || 0;
    const iD = parseFloat(document.getElementById('iD').value) || 0;
    const lDA = parseFloat(document.getElementById('lDA').value) || 0;

    if (isNaN(z0)) {
        alert("Proszę wprowadzić poprawną wartość liczbową dla Z₀.");
        return;
    }

    const deltaUAD = Math.sqrt(3) * z0 * (iB * lBA + iC * lCA + iD * lDA);
    document.getElementById('voltage-drop-result').textContent = `ΔU_AD = ${deltaUAD.toFixed(2)} V`;
}

function drawGraph() {
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    const c = parseFloat(document.getElementById('c').value) || 0;

    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');

   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    
    ctx.beginPath();
    for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
        const y = a * Math.pow(x / 50, 2) + b * (x / 50) + c;
        ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y * 50);
    }

    ctx.strokeStyle = '#0073e6';
    ctx.stroke();
}