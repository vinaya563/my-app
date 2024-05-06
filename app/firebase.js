// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth'
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBZylygwLEdU_BQl9yFu9-0Hvi4u0bUMAA",
    authDomain: "signup-12648.firebaseapp.com",
    projectId: "signup-12648",
    storageBucket: "signup-12648.appspot.com",
    messagingSenderId: "766719130520",
    appId: "1:766719130520:web:4f74e1fa724664c47789ed",
    measurementId: "G-ZK8535TF53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getAuth(app);

export {app,database};