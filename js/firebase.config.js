const firebaseConfig = {
  apiKey: "AIzaSyAr7Hv2ApKtNTxF11MhT5cuWeg_Dgsh0TY",
  authDomain: "smart-burme-app.firebaseapp.com",
  projectId: "smart-burme-app",
  storageBucket: "smart-burme-app.appspot.com",
  messagingSenderId: "851502425686",
  appId: "1:851502425686:web:f29e0e1dfa84794b4abdf7"
};
// Firebase initialization must be done before import of other modules that use Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
export default app;
