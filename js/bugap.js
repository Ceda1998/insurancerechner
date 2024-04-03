let buGapContainer = document.getElementById('buGapContainer');


function calculateBuGap() {
    let netIncome = document.getElementById('netincome').value;
    let otherIncome = document.getElementById('otherincome').value;
    let spendings = document.getElementById('monthlyOutgoings').value;
    let allIncome = Number(netIncome) + Number(otherIncome);
    let halfEmr = Math.round(allIncome * 0.25);
    let fullEmr = Math.round(allIncome * 0.5);
    let buGap = Math.round(allIncome * 0.8);
    console.log(allIncome);
    buGapContainer.innerHTML = renderBuGapResult(buGap);
    createChart(allIncome, spendings, buGap, fullEmr, halfEmr);
}

