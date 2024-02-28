document.addEventListener("DOMContentLoaded", function() {
    const guestsSelect = document.getElementById("guests");
    const recommendationDiv = document.getElementById("recommendation");
  
    guestsSelect.addEventListener("change", function() {
      const numGuests = parseInt(guestsSelect.value);
  
      if (numGuests >= 0 && numGuests <= 4) {
        recommendationDiv.textContent = "Vi rekommenderar 1 bord.";
      } else if (numGuests > 4 && numGuests <= 8) {
        recommendationDiv.textContent = "Vi rekommenderar 2 bord.";
      } else if (numGuests > 8 && numGuests <= 10) {
        recommendationDiv.textContent = "Kontakta oss för bokningar av större sällskap.";
      } else {
        recommendationDiv.textContent = ""; 
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("booking-form");
    const bookButton = document.getElementById("book-button");
    const confirmationMessage = document.getElementById("confirmation-message");

    bookButton.addEventListener("click", function() {
        bookingForm.style.display = "none";
        confirmationMessage.style.display = "block";
    });
});
