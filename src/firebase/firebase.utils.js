import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJkCmW7c8I9vrEIiU1yhtubBq7jybpEy4',
  authDomain: 'zoe-style-db.firebaseapp.com',
  projectId: 'zoe-style-db',
  storageBucket: 'zoe-style-db.appspot.com',
  messagingSenderId: '753015345962',
  appId: '1:753015345962:web:2b8dcb7505ca8be9b68453',
  measurementId: 'G-KBGVHH692L',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
