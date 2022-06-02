import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAY0ZL_Qb-gEEKhLY91q7MUfWX182YbZGM",
    authDomain: "ds-dashboard-e021d.firebaseapp.com",
    projectId: "ds-dashboard-e021d",
    storageBucket: "ds-dashboard-e021d.appspot.com",
    messagingSenderId: "513620718317",
    appId: "1:513620718317:web:08409424e08d9b13e752e4",
    measurementId: "G-QCB3S4341C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;







