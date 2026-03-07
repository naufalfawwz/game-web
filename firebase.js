import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getDatabase, ref, set, onValue, update }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { getAnalytics }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";


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

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const analytics = getAnalytics(app);

export { db, ref, set, onValue, update };
