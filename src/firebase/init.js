import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDk0ptyKAnYtbFpcIHDY3a04fyYdt38hF0",
    authDomain: "axolotron-120a1.firebaseapp.com",
    projectId: "axolotron-120a1",
    storageBucket: "axolotron-120a1.appspot.com",
    messagingSenderId: "948141955254",
    appId: "1:948141955254:web:fab5c3115e4ab29c9aae17",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };