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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      unSubscribe();
      res(userAuth);
    },rej);
  });
};

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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = fireStore.collection(collectionKey);
  const batch = fireStore.batch();

  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((docSnapShot) => {
    const { title, items } = docSnapShot.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapShot.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
