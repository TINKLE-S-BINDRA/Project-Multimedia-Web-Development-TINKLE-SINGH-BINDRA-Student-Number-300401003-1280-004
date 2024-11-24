document.getElementById('createaccount').addEventListener('submit', function(event) {
    event.preventDefault();

    if (email === "" || password === "") {
        document.getElementById('errorMessage').innerText = "Please fill in both fields.";
        return;
    }

    if (email === "user@example.com" && password === "password123") {
        alert("Sign In Successful!");
        window.location.href = "receipt.html";
    } else {
        document.getElementById('errorMessage').innerText = "Invalid email or password.";
    }

});
