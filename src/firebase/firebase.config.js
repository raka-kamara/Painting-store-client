// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVeRoeqquWpp7cbbSfgH6drLYRCibr1Ms",
  authDomain: "painting-store-3c75c.firebaseapp.com",
  projectId: "painting-store-3c75c",
  storageBucket: "painting-store-3c75c.appspot.com",
  messagingSenderId: "900536153758",
  appId: "1:900536153758:web:47b3ab71e8da7e80c32d8f",
  measurementId: "G-CJJQNVN5ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;