import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBN8kE6nbiA4NtlxjAgV685IZJqSkeOpXY",
  authDomain: "taller2-firebase-51379.firebaseapp.com",
  projectId: "taller2-firebase-51379",
  storageBucket: "taller2-firebase-51379.appspot.com",
  messagingSenderId: "378914919067",
  appId: "1:378914919067:web:331967a4ee0c1f1422ac3e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);