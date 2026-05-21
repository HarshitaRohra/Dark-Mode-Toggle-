const bttn = document.getElementById("toggleBtn");

bttn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        bttn.textContent = "Toggle Light Mode";
    } else {
        bttn.textContent = "Toggle Dark Mode";
    }   
});

