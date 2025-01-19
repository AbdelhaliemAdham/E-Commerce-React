// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfVZrfx39vOmqIi9Q2pT1E65eWMYyHSUQ",
  authDomain: "react-backend-6a385.firebaseapp.com",
  databaseURL: "https://react-backend-6a385-default-rtdb.firebaseio.com",
  projectId: "react-backend-6a385",
  storageBucket: "react-backend-6a385.firebasestorage.app",
  messagingSenderId: "295678082664",
  appId: "1:295678082664:web:bbdd584f03babca23985dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
