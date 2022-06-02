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
  } else if (BMI > 18.5 && BMI < 24.9) {
    statement.innerText = "No worries bruh!";
    document.body.style.background = "green";
    hide;
  } else if (BMI > 25 && BMI < 29.9) {
    statement.innerText = "Husky!";
    document.body.style.background = "orange";
    hide;
  } else {
    statement.innerText = "T-Rex!";
    document.body.style.background = "red";
    img.classList.toggle("unhide-glass");
  }
}

/*
// Get the input field
let input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); 

*/

// document.getElementById("btn").addEventListener("keyup", (e) => {
//   e.preventDefault();
//   if (e.key === "enter") {
//     document.getElementById("btn").click();
//   }
// });
/*
document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});

*/
/*
BMI 	Nutritional Status
Below 18.5 	Underweight
18.5 – 24.9 	Normal Weight
25.0 – 29.9 	Pre-obesity
30.0 – 34.9 	Obesity Class I
35 – 39.9 	Obesity Class II
Above 40 	Obesity Class III 
*/
