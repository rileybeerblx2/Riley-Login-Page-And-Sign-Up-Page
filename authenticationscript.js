function sendMessage() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username is registered (add your validation logic here)
    if (username === 'admin' && password === 'password') {
        document.getElementById('authNotification').style.display = 'block'; // Display authentication notification
    } else if (username === 'admin' && password !== 'password') {
        alert('Incorrect password. Please try again.'); // Display error message for incorrect password
    } else {
        alert('Your account has not been registered. Please register your account before logging in.'); // Display error message for unregistered account
    }
}

function setupAuthentication() {
    // Add your 2-step verification setup logic here
    alert('Setting up 2-step verification...');
}

function dismissNotification() {
    document.getElementById('authNotification').style.display = 'none'; // Hide authentication notification
    window.location.href = 'https://example.com'; // Redirect to the website
}
