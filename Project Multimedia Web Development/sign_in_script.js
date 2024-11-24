document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        document.getElementById('errorMessage').innerText = "Please fill in both fields.";
        return;
    }

    if (email === "user@example.com" && password === "password123") {
        alert("Sign In Successful!");
        window.location.href = "pp_home.html";
    } else {
        document.getElementById('errorMessage').innerText = "Invalid email or password.";
    }
});