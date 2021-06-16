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

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

export default firebase;
