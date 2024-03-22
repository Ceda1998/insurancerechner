let bmiForm = document.getElementById('bmiCalculatorForm');
let currentAge = document.getElementById("currentAge");
let currentWeight;
let currentHeight;
let currentHealthStatus = document.getElementById("currentStatus");
let yourBmi = document.getElementById("yourCurrentBmi");
let bmi;

function calculateBmi() {
  currentWeight = document.getElementById("currentWeight").value;
  currentHeight = document.getElementById("currentHeight").value;
  bmi = Math.round(currentWeight / Math.pow(currentHeight / 100, 2));
  yourBmi.innerHTML = `${bmi}`;
  renderBmiHealthStatus();
  bmiForm.reset();

}

function renderBmiHealthStatus() {
    let status;
    if (bmi < 18.5) {
        status = "Du bist untergewichtig";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normales Gewicht";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Du bist leicht übergewichtig";
    } else if (bmi >= 30 && bmi < 35) {
        status = "Du bist übergewichtig";
    } else {
        status = "Du bist adipös"
    }
    currentHealthStatus.innerHTML = ` (${status})`;
}

function checkCheckboxes() {
    let male = document.getElementById('maleCheckbox');
    let female = document.getElementById('femaleCheckbox');
    let divers = document.getElementById('diversCheckbox');

    if (male.checked == true) {
        female.checked = false;
        female.disabled = true;
        divers.checked = false;
        divers.disabled = true;
    } else {
        female.disabled = false;
        divers.disabled = false;
    }
}
