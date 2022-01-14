import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9dXfiZMc1VrlhFFOWDd976U3byxBPhGA",
    authDomain: "finances-control-87a5c.firebaseapp.com",
    projectId: "finances-control-87a5c",
    storageBucket: "finances-control-87a5c.appspot.com",
    messagingSenderId: "554682393409",
    appId: "1:554682393409:web:a4cffbe71fb4406376f7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };