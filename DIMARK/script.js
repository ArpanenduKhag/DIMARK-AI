// Add event listener to each page
document.addEventListener("DOMContentLoaded", function () {
  // Get the main section
  const main = document.querySelector("main");

  // Add the slide-in class to the main section
  main.classList.add("slide-in");

  // Add a timeout to remove the slide-in class after 0.5 seconds
  setTimeout(function () {
    main.classList.remove("slide-in");
  }, 500);
});
