// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJIEau3tH_E5JavhBxvaDt5oXDIveizdQ",
  authDomain: "smart-burme.firebaseapp.com",
  databaseURL: "https://smart-burme-default-rtdb.firebaseio.com",
  projectId: "smart-burme",
  storageBucket: "smart-burme.firebasestorage.app",
  messagingSenderId: "827488800415",
  appId: "1:827488800415:web:7553f4d59d8c6a0f119caa",
  measurementId: "G-N0YGXKXSE4"
};
// Firebase initialization must be done before import of other modules that use Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
export default app;
