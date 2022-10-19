// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChJdTMkJVdoAb2YvRkmPcbRNu80XgEzCM",
  authDomain: "perosteps-28bf6.firebaseapp.com",
  projectId: "perosteps-28bf6",
  storageBucket: "perosteps-28bf6.appspot.com",
  messagingSenderId: "709722604007",
  appId: "1:709722604007:web:faa5320ca3b865ac83bd42"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()