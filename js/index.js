document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector('.btn');
    
    // Form Validation
    const validateForm = () => {
        let valid = true;
        
        // Email validation
        if (!emailInput.value.includes('@')) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            alert('Password must be at least 8 and it should have characters long.');
            valid = false;
        }

        return valid;
    };

    // Form Submit Event Listener
    form.addEventListener('login', (event) => {
        event.preventDefault();  // Prevent the default form submission

        if (validateForm()) {
            // Simulate form submission (e.g., send data to server)
            alert('Login successful!');
            form.reset();  // Reset the form after submission
        }
    });

    // Example: Real-time validation
    emailInput.addEventListener('input', () => {
        if (!emailInput.value.includes('@')) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = '';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 6) {
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.borderColor = '';
        }
    });
});
