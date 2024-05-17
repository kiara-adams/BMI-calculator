var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var bmiResult = document.getElementById("bmi-result");


function calculateBMI() {
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

  
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);


    var result = "Your BMI is: " + bmi;
    bmiResult.innerText = result;
}