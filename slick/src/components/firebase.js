import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPUzsPJnnVB2Ld70bHHZFYLFMAGgqMz4",
  authDomain: "e-e085f.firebaseapp.com",
  projectId: "e-e085f",
  storageBucket: "e-e085f.appspot.com",
  messagingSenderId: "736770588365",
  appId: "1:736770588365:web:3c584e6e819bd81da7f384",
  measurementId: "G-02Q19531BB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth };