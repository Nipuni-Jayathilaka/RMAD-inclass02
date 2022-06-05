// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhGMRbIsaQv7YXSB6wk9VLewxSB0ZnquY",
  authDomain: "train-schedule-8fb85.firebaseapp.com",
  projectId: "train-schedule-8fb85",
  storageBucket: "train-schedule-8fb85.appspot.com",
  messagingSenderId: "33606887757",
  appId: "1:33606887757:web:dd79d920301d64746baf04",
  measurementId: "G-8CVLCTJ8EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);