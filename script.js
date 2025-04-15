// script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Gossaidubi High School website loaded successfully!");

  // Example interactive message
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert("Navigating to: " + link.textContent);
    });
  });
});