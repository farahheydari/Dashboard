import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCTD_NEeGziwhquHjN9Eq99aqpQ8V-D51s",
  authDomain: "dashboard-ee765.firebaseapp.com",
  projectId: "dashboard-ee765",
  storageBucket: "dashboard-ee765.firebasestorage.app",
  messagingSenderId: "351777550165",
  appId: "1:351777550165:web:d3d0a5d88ca9d7a1dc89dc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);