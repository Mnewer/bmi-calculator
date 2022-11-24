"use strict";

const calculateButton = document.querySelector(".btn-calculate");
let BMI, height, weight;

function calcBMI() {
  const heightInput = document.querySelector(".height-input");
  const weightInput = document.querySelector(".weight-input");
  const result = document.querySelector(".results");
  const statement = document.querySelector(".result-show");
  const img = document.getElementById("cup");
  height = heightInput.value || 180;
  weight = weightInput.value || 90;
  BMI = (weight / height ** 2) * 10000;
  result.innerText = Math.floor(BMI);

  if (BMI < 18.5) {
    statement.innerText = "*bones rattling*";
  } else if (BMI > 18.5 && BMI < 25) {
    statement.innerText = "No worries bruh!";
  } else if (BMI > 25 && BMI < 30) {
    statement.innerText = "Husky!";
  } else if (BMI > 30 && BMI < 40) {
    statement.innerText = "Daaamn!";
  } else {
    statement.innerText = "Lord have mercy on our souls";
  }
}

/*
BMI 	Nutritional Status
Below 18.5 	Underweight
18.5 – 24.9 	Normal Weight
25.0 – 29.9 	Pre-obesity
30.0 – 34.9 	Obesity Class I
35 – 39.9 	Obesity Class II
Above 40 	Obesity Class III 
*/
