document.getElementById("myButton").addEventListener("click", function (e) {
    document.body.classList.toggle('dark-mode');
    // element.classList.toggle("dark-mode");
    if (e.target.textContent === "Dark Mode") {
      e.target.textContent = "Day Mode";
      document.body.style.backgroundColor = "White";
      
    } else {
      e.target.textContent = "Dark Mode";
      document.body.style.backgroundColor = "Black";
    }
  });
