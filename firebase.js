// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPuJlGAs0MdM1R1XYqwLE9J92jaqEK_zw",
  authDomain: "learninghub-332a1.firebaseapp.com",
  projectId: "learninghub-332a1",
  storageBucket: "learninghub-332a1.appspot.com",
  messagingSenderId: "77456560875",
  appId: "1:77456560875:web:afe98492f85aef887e64ae",
  measurementId: "G-2J24SF13TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}