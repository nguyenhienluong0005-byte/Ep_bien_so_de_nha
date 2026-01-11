import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCibYu3iUjiyin7aBOSDTU0FItw1dIy3c",
  authDomain: "ep-bien-so.firebaseapp.com",
  projectId: "ep-bien-so",
  storageBucket: "ep-bien-so.firebasestorage.app",
  messagingSenderId: "195377911777",
  appId: "1:195377911777:web:b93b205e1fd5bb1a7664a0",
  measurementId: "G-VR4RPF5VQ2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
