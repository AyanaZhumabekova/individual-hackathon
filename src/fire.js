import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Na-cMceA7Fo7jCmtWJdq9BEChcBa1O8",
  authDomain: "newproj-d9ee7.firebaseapp.com",
  projectId: "newproj-d9ee7",
  storageBucket: "newproj-d9ee7.appspot.com",
  messagingSenderId: "230073917650",
  appId: "1:230073917650:web:1e2707173874a295118d0b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
