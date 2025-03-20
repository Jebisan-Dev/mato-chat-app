// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCq7H9_6bL3AaH8KZAiRTIJhlIe_aC_TMA",
  authDomain: "mato-app-a0a23.firebaseapp.com",
  projectId: "mato-app-a0a23",
  storageBucket: "mato-app-a0a23.appspot.com",
  messagingSenderId: "309549883814",
  appId: "1:309549883814:web:c41daa6d7b691eaefcef67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const userRef = collection(db, 'users')
export const roomRef = collection(db, 'rooms')
export const orgRef = collection(db, 'oranizattions')

const firestore = getFirestore(app);

export { firestore };