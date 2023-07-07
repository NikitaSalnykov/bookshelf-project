import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
apiKey: "AIzaSyCo7Hm3k-gsUsQ5NwATa_fhUGPi8TrU9Lo",
authDomain: "localhost",
projectId: "bookshelf-2f203",
databaseURL: "https://bookshelf-2f203-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

