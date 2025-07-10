// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config from the console
const firebaseConfig = {
  apiKey: "AIzaSyDgsVHSMDyIqmlizMUSx9wan-WzQmskKT4",
  authDomain: "fooddeliveryapp-83b4a.firebaseapp.com",
  projectId: "fooddeliveryapp-83b4a",
  storageBucket: "fooddeliveryapp-83b4a.firebasestorage.app",
  messagingSenderId: "1073462326495",
  appId: "1:1073462326495:web:c1a5752e49aadc4577656a",
  measurementId: "G-N1JY802EVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Export it
export const auth = getAuth(app);
export { db };
