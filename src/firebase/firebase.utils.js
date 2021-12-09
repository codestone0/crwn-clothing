import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDK-gY7n8qW_j5vTzuxVH6A1lxEI1laZmg",
  authDomain: "crwn-db-199d4.firebaseapp.com",
  projectId: "crwn-db-199d4",
  storageBucket: "crwn-db-199d4.appspot.com",
  messagingSenderId: "1096631761505",
  appId: "1:1096631761505:web:a6b8cc16079fc9a4704820",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
