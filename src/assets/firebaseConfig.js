// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKyzSITO3DWeBo_xyuJyGLcGxvNuXJGRo",
  authDomain: "groupplanner-71cd7.firebaseapp.com",
  databaseURL: "https://groupplanner-71cd7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "groupplanner-71cd7",
  storageBucket: "groupplanner-71cd7.appspot.com",
  messagingSenderId: "304650147943",
  appId: "1:304650147943:web:30b1e0f6a97a0f520bdcc2",
  measurementId: "G-LL5031RSMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);