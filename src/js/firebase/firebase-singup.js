import firebase from './firebase-data';
import Notiflix from 'notiflix';

export default function firebaseSingUp(email, password, userName) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;

      firebase.database().ref('users/' + userId).set({
        name: userName,
      });

      return Notiflix.Notify.success(`Sign Up Success`);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
          return Notiflix.Notify.failure(`Email already in use`);
          
      } else {
          Notiflix.Notify.failure('Registration failed :', error);
       
      }
    });

}