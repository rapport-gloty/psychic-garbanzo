function reverseIt() {
  const FahrenheitClass = document.querySelector(".Fahrenheit-js");
  const CelsiusClass = document.querySelector(".Celsius-js");
  
  // Toggle the classes for input fields
  FahrenheitClass.classList.toggle("Fahrenheit-js");
  FahrenheitClass.classList.toggle("Celsius-js");
  CelsiusClass.classList.toggle("Celsius-js");
  CelsiusClass.classList.toggle("Fahrenheit-js");
  
  const FahrenheitLabel = document.querySelector(".Fahrenheit-label");
  const CelsiusLabel = document.querySelector(".Celsius-label");
  
  // Toggle the labels
  const temp = FahrenheitLabel.textContent;
  FahrenheitLabel.textContent = CelsiusLabel.textContent;
  CelsiusLabel.textContent = temp;
}
  

function convertIt() {
  // Get the input values
  
 
  const FahrenheitInput= document.querySelector(".Fahrenheit-js");
  const CelsiusInput = document.querySelector(".Celsius-js");
  let CelsiusValue = parseFloat(CelsiusInput.value);
  
  let FahrenheitValue = parseFloat(FahrenheitInput.value);
  if (!isNaN(CelsiusValue)) {
    FahrenheitValue = 32+CelsiusValue*(9/5);
    FahrenheitInput.value = Math.floor(FahrenheitValue);
  } else if (!isNaN(FahrenheitValue)) {
    CelsiusValue = (FahrenheitValue-32) * 5/9;
    CelsiusInput.value = Math.floor(CelsiusValue);
    
  } else {
    alert("Please enter a valid number.");
  }
}

function resetForm() {
  const FahrenheitInput = document.querySelector(".Fahrenheit-js");
  const CelsiusInput = document.querySelector(".Celsius-js");

  // Clear the input fields
  FahrenheitInput.value = "";
  CelsiusInput.value = "";
}