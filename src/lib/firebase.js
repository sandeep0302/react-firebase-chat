import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c60d5.firebaseapp.com",
  projectId: "reactchat-c60d5",
  storageBucket: "reactchat-c60d5.appspot.com",
  messagingSenderId: "522114084676",
  appId: "1:522114084676:web:b1b0e277a117ef15df3111"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth()
export const db = getFirestore()
export const storage = getStorage()