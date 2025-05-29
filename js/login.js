document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginError = document.getElementById('login-error');
    const signupError = document.getElementById('signup-error');

    loginToggle.addEventListener('click', () => {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
    });

    // Show login form by default
    loginForm.style.display = 'flex';
    loginToggle.classList.add('active');

    // Login form validation
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();
        loginError.textContent = '';

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (validateEmail(email) && password) {
            // Submit login form
            console.log('Login form submitted');
        } else {
            loginError.textContent = 'Please enter valid credentials';
        }
    });

    // Signup form validation
    document.getElementById('signup').addEventListener('submit', (e) => {
        e.preventDefault();
        signupError.textContent = '';

        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (username && validateEmail(email) && password && confirmPassword && password === confirmPassword) {
            // Submit signup form
            console.log('Signup form submitted');
        } else {
            signupError.textContent = 'Please fill out all fields correctly';
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});