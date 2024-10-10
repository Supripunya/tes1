document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Normally, you would send this data to your server here
    console.log('Email:', email);
    console.log('Password:', password);

    // Dummy check for demonstration
    if (email === 'user@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Normally, you would send this data to your server here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Dummy message for demonstration
    alert('Account created successfully!');
});
