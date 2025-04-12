// Get DOM elements
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const ratingButtons = document.querySelectorAll(".rating-buttons button");
const submitButton = document.querySelector(".submit-button");
const ratingResult = document.querySelector(".rating-result");

let selectedRating = 0;

// Add click event listeners to rating buttons
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
    // Store the selected rating
    selectedRating = button.textContent;
  });
});

// Add click event listener to submit button
submitButton.addEventListener("click", () => {
  if (selectedRating !== 0) {
    // Update the rating result text
    ratingResult.textContent = selectedRating;
    // Hide rating state and show thank you state
    ratingState.style.display = "none";
    thankYouState.style.display = "block";
  }
});
