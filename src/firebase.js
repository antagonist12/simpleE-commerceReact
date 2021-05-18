import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBaYHZojRm1mE3UMhQCPrvCGm8Wxj-FkU4",
  authDomain: "clone-9ccff.firebaseapp.com",
  projectId: "clone-9ccff",
  storageBucket: "clone-9ccff.appspot.com",
  messagingSenderId: "397629678762",
  appId: "1:397629678762:web:045e3b316bde8ded71dcd3",
  measurementId: "G-FJKZQ1B068",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
