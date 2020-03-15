let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    alert("Logeado!");
    e.preventDefault();
});