// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbwMQAa8e7GNPCN9aBE1gDAJs0_JG2qq4",
    authDomain: "socialconnect-e4cdf.firebaseapp.com",
    projectId: "socialconnect-e4cdf",
    storageBucket: "socialconnect-e4cdf.appspot.com",
    messagingSenderId: "572770083866",
    appId: "1:572770083866:web:e14a3228a640efe8bb5da3"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

const storage = getStorage()

export { app, db, storage }
