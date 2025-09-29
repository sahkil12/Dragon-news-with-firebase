// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoaVaqt7IaXBCwlaQQMRUQsghyb1LQWP8",
  authDomain: "dragon-news-code-a9ba5.firebaseapp.com",
  projectId: "dragon-news-code-a9ba5",
  storageBucket: "dragon-news-code-a9ba5.firebasestorage.app",
  messagingSenderId: "865499376069",
  appId: "1:865499376069:web:fc6305e6b7bd84131203ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);