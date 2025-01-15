// Retrieve the counter from local storage or initialize it to 0
let counter = parseInt(localStorage.getItem('hitCounter')) || 0;

// Increment the counter
counter++;

// Save the updated counter back to local storage
localStorage.setItem('hitCounter', counter);

// Format the counter to always show 8 digits
const formattedCounter = counter.toString().padStart(8, '0');

// Display the counter
const hitCounterElement = document.getElementById('hit-counter');
const digits = formattedCounter.split('');

digits.forEach((digit, index) => {
  const digitElement = hitCounterElement.children[index];
  digitElement.textContent = digit;
});