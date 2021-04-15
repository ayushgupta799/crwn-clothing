import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCZCUQPiyoVaK8wzK4deAqfvveATDWG8rs",
  authDomain: "crwn-db-d5469.firebaseapp.com",
  projectId: "crwn-db-d5469",
  storageBucket: "crwn-db-d5469.appspot.com",
  messagingSenderId: "211783168730",
  appId: "1:211783168730:web:6aa3903fc0d0ea8bb06be3",
  measurementId: "G-3T2DL8FX5G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;