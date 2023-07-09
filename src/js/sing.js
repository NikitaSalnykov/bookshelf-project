const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const signUpButton = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');
const switchSignup = document.getElementById('switch-signup');
const switchSignin = document.getElementById('switch-signin');

// Відкриття модального вікна з формою "Sign Up" відображеною за замовчуванням
signUpButton.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
  signUpForm.style.display = 'block';
  signInForm.style.display = 'none';
  switchSignup.classList.add('active');
  switchSignin.classList.remove('active');
});

// Закриття модального вікна
modalCloseBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Переключення між формами "Sign Up" і "Sign In"
switchSignup.addEventListener('click', function() {
  signUpForm.style.display = 'block';
  signInForm.style.display = 'none';
  switchSignup.classList.add('active');
  switchSignin.classList.remove('active');
});

switchSignin.addEventListener('click', function() {
  signUpForm.style.display = 'none';
  signInForm.style.display = 'block';
  switchSignup.classList.remove('active');
  switchSignin.classList.add('active');
});

// Відправлення форми Sign In або Sign Up
signInForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Виконати дії при відправленні форми Sign In
});

signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Виконати дії при відправленні форми Sign Up
});