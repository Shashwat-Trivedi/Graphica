const container = document.getElementById('container');
const logInButton = document.getElementById('logIn');
const signUpButton = document.getElementById('signUp');

logInButton.addEventListener('click', () => {
    container.classList.remove('active-right');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('active-right');
});