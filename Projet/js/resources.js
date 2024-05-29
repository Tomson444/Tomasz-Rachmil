document.addEventListener('DOMContentLoaded', () => {
    const countries = [
        { name: 'Polska', gold: 10, silver: 20, coal: 300, iron: 100, copper: 50, oil: 30, gas: 40 },
        { name: 'Niemcy', gold: 15, silver: 25, coal: 200, iron: 80, copper: 60, oil: 20, gas: 50 },
        { name: 'Francja', gold: 5, silver: 10, coal: 150, iron: 70, copper: 40, oil: 10, gas: 30 },
        { name: 'Włochy', gold: 8, silver: 18, coal: 100, iron: 60, copper: 30, oil: 25, gas: 20 },
        { name: 'Hiszpania', gold: 12, silver: 22, coal: 90, iron: 55, copper: 35, oil: 15, gas: 25 },
        { name: 'Norwegia', gold: 20, silver: 30, coal: 50, iron: 40, copper: 20, oil: 100, gas: 80 },
        { name: 'Szwecja', gold: 18, silver: 28, coal: 60, iron: 50, copper: 25, oil: 5, gas: 10 },
        { name: 'Finlandia', gold: 17, silver: 27, coal: 55, iron: 45, copper: 22, oil: 8, gas: 12 },
        { name: 'Holandia', gold: 3, silver: 6, coal: 70, iron: 35, copper: 15, oil: 12, gas: 20 },
        { name: 'Belgia', gold: 2, silver: 5, coal: 65, iron: 30, copper: 12, oil: 10, gas: 18 },
    ];

    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    table.border = 1;
    table.style.margin = '0 auto';
    table.style.width = '80%';
    table.style.borderCollapse = 'collapse';

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    
    const headerRow = document.createElement('tr');
    const headers = ['Kraj', 'Złoto', 'Srebro', 'Węgiel', 'Żelazo', 'Miedź', 'Ropa naftowa', 'Gaz'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.backgroundColor = '#0073e6';
        th.style.color = 'white';
        th.style.padding = '10px';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    
    countries.forEach((country, index) => {
        const row = document.createElement('tr');

        const countryCell = document.createElement('td');
        countryCell.textContent = country.name;
        countryCell.style.backgroundColor = '#f0f0f0';
        countryCell.style.padding = '10px';
        row.appendChild(countryCell);

        const goldCell = document.createElement('td');
        goldCell.textContent = country.gold;
        goldCell.style.backgroundColor = '#f0f0f0';
        goldCell.style.padding = '10px';
        row.appendChild(goldCell);

        const silverCell = document.createElement('td');
        silverCell.textContent = country.silver;
        silverCell.style.backgroundColor = '#f0f0f0';
        silverCell.style.padding = '10px';
        row.appendChild(silverCell);

        const coalCell = document.createElement('td');
        coalCell.textContent = country.coal;
        coalCell.style.backgroundColor = '#f0f0f0';
        coalCell.style.padding = '10px';
        row.appendChild(coalCell);

        const ironCell = document.createElement('td');
        ironCell.textContent = country.iron;
        ironCell.style.backgroundColor = '#f0f0f0';
        ironCell.style.padding = '10px';
        row.appendChild(ironCell);

        const copperCell = document.createElement('td');
        copperCell.textContent = country.copper;
        copperCell.style.backgroundColor = '#f0f0f0';
        copperCell.style.padding = '10px';
        row.appendChild(copperCell);

        const oilCell = document.createElement('td');
        oilCell.textContent = country.oil;
        oilCell.style.backgroundColor = '#f0f0f0';
        oilCell.style.padding = '10px';
        row.appendChild(oilCell);

        const gasCell = document.createElement('td');
        gasCell.textContent = country.gas;
        gasCell.style.backgroundColor = '#f0f0f0';
        gasCell.style.padding = '10px';
        row.appendChild(gasCell);

        tbody.appendChild(row);


        
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
});


