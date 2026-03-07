// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqsLDpzRhY1_X3CGkyZdIrl_CTHNlvk3Q",
  authDomain: "trailpioneer-15.firebaseapp.com",
  databaseURL: "https://trailpioneer-15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trailpioneer-15",
  storageBucket: "trailpioneer-15.firebasestorage.app",
  messagingSenderId: "986556051300",
  appId: "1:986556051300:web:84d508450f346df4b61471",
  measurementId: "G-LZLRJZYZWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
