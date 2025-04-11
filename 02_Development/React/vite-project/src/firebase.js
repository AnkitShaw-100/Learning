import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArx2GDQqtZdHtdyGznY6FGWowDilzOgTc",
  authDomain: "fir-basics-e5f57.firebaseapp.com",
  projectId: "fir-basics-e5f57",
  storageBucket: "fir-basics-e5f57.appspot.com",
  messagingSenderId: "112599554485",
  appId: "1:112599554485:web:502de6e359cfd7120761fc",
  measurementId: "G-JB6WRSK09V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
