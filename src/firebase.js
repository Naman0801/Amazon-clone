import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTB2Gzi1Eoy0lATBPc_acIWHxdqHjl8b0",
  authDomain: "clone-c823f.firebaseapp.com",
  projectId: "clone-c823f",
  storageBucket: "clone-c823f.appspot.com",
  messagingSenderId: "905612589317",
  appId: "1:905612589317:web:071e5dde6a06b2293b5f6c",
  measurementId: "G-7TNG2H71XX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
