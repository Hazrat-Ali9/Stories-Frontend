// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAm_5wacwOMdCL0tNvIasa_0m2x7vINX04",
    authDomain: "hazrat-ali-blogsite.firebaseapp.com",
    projectId: "hazrat-ali-blogsite",
    storageBucket: "hazrat-ali-blogsite.appspot.com",
    messagingSenderId: "583500880927",
    appId: "1:583500880927:web:0d569f8a512f687b2ac92a",
    measurementId: "G-B8CRK5PPR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;