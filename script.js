

function calculate() {
  let bmi;
  const result = document.querySelector('#result');

  const weight = parseInt(document.querySelector('#weight').value);
    document.querySelector('#weight-val').textContent = weight + "kg";
  const height = parseInt(document.querySelector('#height').value);
    document.querySelector('#height-val').textContent = height + "cm";

  bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
  result.textContent = bmi;

  if(bmi < 18.5) {
    category = "Недостаточный вес 😒";
    result.style.color = "#ffc44d";
  } else if(bmi >= 18.5 && bmi <= 24.9) {
    category = "Нормальный вес 😍";
    result.style.color = "#0be881";
  } else if(bmi >= 25 && bmi <= 29.9) {
    category = "Избыточный вес 😮";
    result.style.color = "#ff884d";
  } else if (bmi >= 30 && bmi < 35) {
    category = "Ожирение I степени 😱";
    result.style.color = "#ff5e57";
  } else if (bmi >= 35 && bmi < 40) {
    category = "Ожирение II степени 😱";
    result.style.color = "#FF3229";
  } else if (bmi >= 40) {
    category = "Ожирение III степени 😱";
    result.style.color = "#FF0B00";
  }

  document.querySelector('#category').textContent = category;
}