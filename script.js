"use strict";

var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", () => {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = (weight / height ** 2) * 10000;
  result.innerText = Math.floor(BMI);

  if (BMI < 18.5) {
    statement.innerText = "Skinny skank!";
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText = "No worries bruh!";
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "Husky!";
  } else {
    statement.innerText = "Damn Son! U F.A.T";
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
