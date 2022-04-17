// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOhQ-LYHGRWrddFsjlyk8rDf4WB2-TQI",
  authDomain: "medi-life-bc282.firebaseapp.com",
  projectId: "medi-life-bc282",
  storageBucket: "medi-life-bc282.appspot.com",
  messagingSenderId: "621365750281",
  appId: "1:621365750281:web:c75b4e4bf198b6203be6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;