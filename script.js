"use strict";

var heightInput = document.querySelector(".height-input");
var weightInput = document.querySelector(".weight-input");
var calculateButton = document.querySelector(".btn-calculate");
var result = document.querySelector(".results");
var statement = document.querySelector(".result-show");
var BMI, height, weight;

// calculateButton.addEventListener("click", () => {

function calcBMI() {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = (weight / height ** 2) * 10000;
  result.innerText = Math.floor(BMI);

  if (BMI < 18.5) {
    statement.innerText = "Skinny skank!";
    document.body.style.background = "white";
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText = "No worries bruh!";
    document.body.style.background = "green";
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "Husky!";
    document.body.style.background = "orange";
  } else {
    statement.innerText = "Damn Son! U F.A.T test";
    document.body.style.background = "red";
  }
}

calculateButton.addEventListener("keyup", (e) => {
  if (e.keyCode === "Enter") {
    calcBMI();
  }
});
/*
BMI 	Nutritional Status
Below 18.5 	Underweight
18.5 – 24.9 	Normal Weight
25.0 – 29.9 	Pre-obesity
30.0 – 34.9 	Obesity Class I
35 – 39.9 	Obesity Class II
Above 40 	Obesity Class III 
*/
