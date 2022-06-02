"use strict";

const calculateButton = document.querySelector(".btn-calculate");
let BMI, height, weight;

function calcBMI() {
  const heightInput = document.querySelector(".height-input");
  const weightInput = document.querySelector(".weight-input");
  const result = document.querySelector(".results");
  const statement = document.querySelector(".result-show");
  const img = document.getElementById("cup");
  height = heightInput.value;
  weight = weightInput.value;
  BMI = (weight / height ** 2) * 10000;
  result.innerText = Math.floor(BMI);
  img.classList.remove("unhide-glass");

  if (BMI < 18.5) {
    statement.innerText = "*bones rattling*";
    document.body.style.background = "white";
  } else if (BMI > 18.5 && BMI < 25) {
    statement.innerText = "No worries bruh!";
    document.body.style.background = "green";
  } else if (BMI > 25 && BMI < 30) {
    statement.innerText = "Husky!";
    document.body.style.background = "orange";
  } else {
    statement.innerText = "T-Rex!";
    document.body.style.background = "red";
    img.classList.toggle("unhide-glass");
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
