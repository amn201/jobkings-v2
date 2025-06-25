document.getElementById("jobForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Show a simple success message
  document.getElementById("message").innerText = "🎉 Your application has been submitted successfully!";

  // Reset the form after 2 seconds
  setTimeout(() => {
    document.getElementById("jobForm").reset();
    document.getElementById("message").innerText = "";
  }, 3000);
});
