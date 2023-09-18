import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbbsL5X0tG_RCL7QtIY6Mn92wlXsYxwak",
  authDomain: "hamzah-mahmood-dashboard.firebaseapp.com",
  projectId: "hamzah-mahmood-dashboard",
  storageBucket: "hamzah-mahmood-dashboard.appspot.com",
  messagingSenderId: "954830958123",
  appId: "1:954830958123:web:8ee1939360c0b9a1ee446e",
  measurementId: "G-HEFTTF3052"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };