import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCopDH8dVFV1QDcu-ZWVVLqivAoeTFqH0c",
  authDomain: "winveo.firebaseapp.com",
  projectId: "winveo",
  storageBucket: "winveo.firebasestorage.app",
  messagingSenderId: "628523938179",
  appId: "1:628523938179:web:cbc8141a9774ddbc0f06b6",
  measurementId: "G-BQ3XFMKD5X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
