// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcoYdyLroiBe5OXi_UKClkKa5QljnHJUg",
  authDomain: "inventory-management-8de63.firebaseapp.com",
  projectId: "inventory-management-8de63",
  storageBucket: "inventory-management-8de63.appspot.com",
  messagingSenderId: "687211445679",
  appId: "1:687211445679:web:7111a4fef566eec4dbc35a",
  measurementId: "G-22SQYMKXTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}
