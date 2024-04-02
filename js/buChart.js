

function createChart(allIncome) {
// Rufe die Chart.js-Erstellung nach dem Hinzufügen des Canvas-Elements zum DOM auf
const ctx = document.getElementById('buChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Gesamteinkommen', 'Ausgaben', 'BU-Lücke', 'Volle EMR', 'Halbe EMR'],
        datasets: [{
            label: 'BU-Lücke',
            data: [allIncome, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
} 

