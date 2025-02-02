document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    
    if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }

    
    const usernameLabel = document.querySelector("label[for='username']");
    if (usernameLabel) {
        console.log("Username label is visible");
    } else {
        console.error("Username label not found");
    }

    
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
        existingBtn.style.display = "block"; // Show the existing login button
    });

    
    existingBtn.addEventListener("click", function () {
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
});