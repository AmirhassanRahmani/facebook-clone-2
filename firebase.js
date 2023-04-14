import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl0xfGGXliBoczIdcY8ey2syiItw_pMrc",
  authDomain: "task-7-29bc3.firebaseapp.com",
  projectId: "task-7-29bc3",
  storageBucket: "task-7-29bc3.appspot.com",
  messagingSenderId: "383092514125",
  appId: "1:383092514125:web:b1d6efda860445e030eb04",
  measurementId: "G-5Q44KNWHQQ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = app.storage;
export { db, storage };
