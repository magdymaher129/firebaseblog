// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import{getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gnb1TlnKsTIJ8uve04ipeLcT8VKB8TQ",
  authDomain: "react-firebase-app-7dfd0.firebaseapp.com",
  projectId: "react-firebase-app-7dfd0",
  storageBucket: "react-firebase-app-7dfd0.appspot.com",
  messagingSenderId: "928273314833",
  appId: "1:928273314833:web:97446320f721d4ff0b6db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//---------create all conections to our projects-----
export const auth=getAuth(app);
export const db=getFirestore(app);
export const provider= new GoogleAuthProvider();
//---------create all conections to our projects-----