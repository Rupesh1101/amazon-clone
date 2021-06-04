// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-ungJAxIu4jwD3e1vj_McI7InhA7H0gE",
    authDomain: "clone-b2435.firebaseapp.com",
    projectId: "clone-b2435",
    storageBucket: "clone-b2435.appspot.com",
    messagingSenderId: "1026646378313",
    appId: "1:1026646378313:web:9e57b8e4bd1a6f05ba3c98",
    measurementId: "G-583MDRPGMF",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};