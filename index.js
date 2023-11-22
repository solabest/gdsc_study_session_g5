function calculateBMI() {
  // Get values from input fields
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  // Check if inputs are not empty
  if (weight && height) {
    // Calculate BMI
    var bmi = weight / (height * height);

    // Display the result
    document.getElementById("result").innerHTML =
      "Your BMI is: " + bmi.toFixed(2);
  } else {
    // Display an error message if inputs are empty
    document.getElementById("result").innerHTML =
      "Please enter both weight and height.";
  }
}
