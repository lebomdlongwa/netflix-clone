import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx0189FmhqQMVUi7xL8OJRjL8fRV11aCE",
  authDomain: "netflix-clone-dd930.firebaseapp.com",
  projectId: "netflix-clone-dd930",
  storageBucket: "netflix-clone-dd930.appspot.com",
  messagingSenderId: "594870911618",
  appId: "1:594870911618:web:9d01404a65c900d01daa9b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
