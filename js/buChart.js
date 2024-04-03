

function createChart(allIncome, spendings, buGap, fullEmr, halfEmr) {
// Rufe die Chart.js-Erstellung nach dem Hinzufügen des Canvas-Elements zum DOM auf
const ctx = document.getElementById('buChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Gesamteinkommen', 'Ausgaben', 'BU-Lücke', 'Volle EMR', 'Halbe EMR'],
        datasets: [{
            label: 'Einkommen',
            data: [allIncome, spendings, buGap, fullEmr, halfEmr],
            borderWidth: 1,
            backgroundColor: [
                'rgba(102, 204, 153, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(176, 0, 186, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ]
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

