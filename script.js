const container = document.querySelector('.container');
const signUpLink = document.getElementById('signUpLink');
const signInLink = document.getElementById('signInLink');

// Event listener for switching to sign up form
signUpLink.addEventListener('click', () => {
    container.classList.add('active');
});

// Event listener for switching to sign in form
signInLink.addEventListener('click', () => {
    container.classList.remove('active');
});