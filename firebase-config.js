// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyChwpbFb6M4HtG6zwjg0AXh7Lz9KjnrGZk",
  authDomain: "adminneast.firebaseapp.com",
  databaseURL: "https://adminneast-default-rtdb.firebaseio.com",
  projectId: "adminneast",
  storageBucket: "adminneast.appspot.com",
  messagingSenderId: "883877553418",
  appId: "1:883877553418:web:84ce8200f4b471bfffc6f3",
  measurementId: "G-PCH99BDF1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };