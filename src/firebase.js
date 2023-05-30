// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbTTdVUNayr8bjUSeKGYgYvBPuYphxFgc",
  authDomain: "chatgpt-clone-903e1.firebaseapp.com",
  projectId: "chatgpt-clone-903e1",
  storageBucket: "chatgpt-clone-903e1.appspot.com",
  messagingSenderId: "386150704968",
  appId: "1:386150704968:web:8f1f30fd194e048147757d",
  measurementId: "G-2VHHWSXVZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();