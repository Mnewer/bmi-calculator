"use strict";

const heightInput = document.querySelector(`.height`);
const weightInput = document.querySelector(`weight`);
const bmiOutput = document.querySelector(`.bmioutput`);

function calcBMI(heightInput, weightInput) {
  const bmi = (weightInput / heightInput ** 2) * 10000;
  return bmi;
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
