"use strict";

var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
  alert("Logeado!");
  e.preventDefault();
});