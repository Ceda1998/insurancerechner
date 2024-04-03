function renderBuGapResult(buGap) {
    return `
    <div class="yourBUGapContainer">
        <p>Deine benötigte Berufsunfähigkeitsrente ist: ${buGap}</p>
    </div>
    <div class="chartContainer">
  <canvas id="buChart"></canvas>
</div>
    `;
}