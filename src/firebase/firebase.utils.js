import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBMDFAwqiFZuQlObrosWHhM5kj-YGtzO0",
  authDomain: "xrwn-db.firebaseapp.com",
  projectId: "xrwn-db",
  storageBucket: "xrwn-db.appspot.com",
  messagingSenderId: "571636658780",
  appId: "1:571636658780:web:9e5b144d048848b4f3ac99",
  measurementId: "G-71HR779J06",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// firebase.auth().signInWithPopup(provider).then(result =>{

//     let credential = result.credential;

//     let token = credential.accessToken;

//     let user = result.user;

// });
