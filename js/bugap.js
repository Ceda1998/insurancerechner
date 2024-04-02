let buGapContainer = document.getElementById('buGapContainer');


function calculateBuGap() {
    let netIncome = document.getElementById('netincome').value;
    let otherIncome = document.getElementById('otherincome').value;
    let allIncome = Number(netIncome) + Number(otherIncome)
    console.log(allIncome);
    buGapContainer.innerHTML = renderBuGapResult();
    createChart(allIncome);
}

