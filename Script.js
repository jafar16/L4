const loginButton = document.getElementById('toggle-login');
const signupButton = document.getElementById('toggle-signup');
const loginForm = document.getElementById('login');
const signupForm = document.getElementById('signup');

loginButton.addEventListener('click', () => {
    loginForm.style.opacity = 1;
    loginForm.style.transform = 'translateY(0)';
    signupForm.style.opacity = 0;
    signupForm.style.transform = 'translateY(-100%)';
    loginButton.classList.add('active');
    signupButton.classList.remove('active');
});

signupButton.addEventListener('click', () => {
    loginForm.style.opacity = 0;
    loginForm.style.transform = 'translateY(100%)';
    signupForm.style.opacity = 1;
    signupForm.style.transform = 'translateY(0)';
    signupButton.classList.add('active');
    loginButton.classList.remove('active');
});
