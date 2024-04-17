function sendMessage() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username is registered (add your validation logic here)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'https://example.com'; // Redirect to the website on successful login
    } else if (username === 'admin' && password !== 'password') {
        alert('Incorrect password. Please try again.'); // Display error message for incorrect password
    } else {
        alert('Your account has not been registered. Please register your account before logging in.'); // Display error message for unregistered account
    }
}
