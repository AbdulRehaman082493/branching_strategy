function greetUser() {
    alert("Hello! Apache2 is serving this content with style.");
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Message sent (not really, just a demo)!");
    return false; // Prevent actual form submission
}
