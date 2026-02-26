// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx8kdQ7CSY5mv95HaOWZvv9qdUM567aR0",
  authDomain: "antix-b6c56.firebaseapp.com",
  projectId: "antix-b6c56",
  storageBucket: "antix-b6c56.firebasestorage.app",
  messagingSenderId: "770998677346",
  appId: "1:770998677346:web:ff2adae7b712b2c387463b",
  measurementId: "G-ELQNXYTJZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);