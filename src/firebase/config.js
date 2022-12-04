// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2eDmwkiXA9VC3-IwJ8ljRIGPVnu_zAbQ",
  authDomain: "reactjscoderhouse-a669d.firebaseapp.com",
  projectId: "reactjscoderhouse-a669d",
  storageBucket: "reactjscoderhouse-a669d.appspot.com",
  messagingSenderId: "293550771445",
  appId: "1:293550771445:web:70c66f9b52c7202a1a49bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);