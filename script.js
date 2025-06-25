document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission

  // Simple validation for Aadhaar (already pattern set but extra check)
  const aadhaarInput = this.aadhaar.value;
  const aadhaarValid = /^\d{12}$/.test(aadhaarInput);
  if (!aadhaarValid) {
    alert('Please enter a valid 12-digit Aadhaar number.');
    return;
  }

  // Collect languages spoken checkboxes
  const languages = [];
  this.querySelectorAll('input[name="languages"]:checked').forEach((el) => {
    languages.push(el.value);
  });

  if (languages.length === 0) {
    alert('Please select at least one language.');
    return;
  }

  // Show success message
  document.getElementById('message').innerText =
    '🎉 Your application has been submitted successfully!';

  // Reset form after 3 seconds
  setTimeout(() => {
    this.reset();
    document.getElementById('message').innerText = '';
  }, 3000);

  // (Optional) Here you would add code to send form data to backend or Google Sheets
});
