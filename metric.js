function reverseIt() {
  const feetClass = document.querySelector(".feet-js");
  const metersClass = document.querySelector(".meters-js");
  
  // Toggle the classes for input fields
  feetClass.classList.toggle("feet-js");
  feetClass.classList.toggle("meters-js");
  metersClass.classList.toggle("meters-js");
  metersClass.classList.toggle("feet-js");
  
  const feetLabel = document.querySelector(".feet-label");
  const metersLabel = document.querySelector(".meters-label");
  
  // Toggle the labels
  const temp = feetLabel.textContent;
  feetLabel.textContent = metersLabel.textContent;
  metersLabel.textContent = temp;
}
  

function convertIt() {
  // Get the input values
  
 
  const feetInput= document.querySelector(".feet-js");
  const metersInput = document.querySelector(".meters-js");
  let metersValue = parseFloat(metersInput.value);
  let feetValue = parseFloat(feetInput.value);
  if (!isNaN(metersValue)) {
    feetValue = metersValue / 0.3048;
    feetInput.value = feetValue.toFixed(2);
  } else if (!isNaN(feetValue)) {
    metersValue = feetValue * 0.3048;
    metersInput.value = metersValue.toFixed(2);
  } else {
    alert("Please enter a valid number.");
  }
}

function resetForm() {
  const feetInput = document.querySelector(".feet-js");
  const metersInput = document.querySelector(".meters-js");

  // Clear the input fields
  feetInput.value = "";
  metersInput.value = "";
}

































