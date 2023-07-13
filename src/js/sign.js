import Firebase from './firebase/firebase.js';
import { save } from './storage.js';
const firebaseInstance = new Firebase();
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const signUpButton = document.querySelector('.sign-up-butt');
const signInForm = document.getElementById('sign-in-form');
const signUpForm = document.getElementById('sign-up-form');
const switchSignup = document.getElementById('switch-signup');
const switchSignin = document.getElementById('switch-signin');

// Відкриття модального вікна з формою "Sign Up" відображеною за замовчуванням
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('sign-up-butt')) {
    event.preventDefault();
    modal.style.display = 'block';
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
    switchSignup.classList.add('active');
    switchSignin.classList.remove('active');
  }
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
  const USeremailIN = document.getElementById('signin-email').value;
  const USerpasswordIN = document.getElementById('signin-password').value;
  let userId;
  let userName;
  firebaseInstance.firebaseSignIn(USeremailIN, USerpasswordIN).then(function(userData) {
    userName = userData.name;
    userId = userData.userId;

    if (userId != null) {
      const userNameElement = document.querySelector('.userName');
      userNameElement.textContent = userName;
      save('UserData', { userID: userId, userName: userName });

      var userTitle = document.querySelector('.userTitle');
      var singINButton = document.querySelector('.button-sing-in');
      var shopingLsit = document.getElementById('nav-item-shopping-list');
      shopingLsit.style.display = 'block';
      userTitle.style.display = 'block';
      singINButton.style.display = 'none';
      modal.style.display = 'none';
    }
  });
});

signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const Username = document.getElementById('signup-name').value;
  const Useremail = document.getElementById('signup-email').value;
  const Userpassword = document.getElementById('signup-password').value;
  
  firebaseInstance.firebaseSignUp(Useremail, Userpassword, Username);
  // Виконати дії при відправленні форми Sign Up
   modal.style.display = 'none';
   
});