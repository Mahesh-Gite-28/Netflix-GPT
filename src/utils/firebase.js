// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYXGc1fHElOCwSWvpJSvmwEBFKyoANqZA",
  authDomain: "netflix-gpt-16455.firebaseapp.com",
  projectId: "netflix-gpt-16455",
  storageBucket: "netflix-gpt-16455.firebasestorage.app",
  messagingSenderId: "757545879786",
  appId: "1:757545879786:web:ef73abcf94722949a12f93",
  measurementId: "G-5R0ZZTK9WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();