// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase, ref, set, get, child, update, remove } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGv8k3FZBKgjHl0_0vC0dSKxPEOc931CE",
    authDomain: "lost-and-found-2c5e6.firebaseapp.com",
    databaseURL: "https://lost-and-found-2c5e6-default-rtdb.firebaseio.com",
    projectId: "lost-and-found-2c5e6",
    storageBucket: "lost-and-found-2c5e6.firebasestorage.app",
    messagingSenderId: "514956918082",
    appId: "1:514956918082:web:83d33d7ea6ed733b521cdb",
    measurementId: "G-V5B9FWWDH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { getDatabase, ref, set, get, child, update, remove };