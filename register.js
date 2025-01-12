/*// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAuJH09nuhqi4zKIWVlopMh6qe46WDlITg",
  authDomain: "dersimo-31041.firebaseapp.com",
  projectId: "dersimo-31041",
  storageBucket: "dersimo-31041.firebasestorage.app",
  messagingSenderId: "653988435501",
  appId: "1:653988435501:web:d933b40d23e8628e7b8aa4",
  measurementId: "G-D2RBEG50Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
*/
// Firebase SDK'larından gerekli fonksiyonları içe aktar
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Firebase yapılandırması
const firebaseConfig = {
    apiKey: "AIzaSyAuJH09nuhqi4zKIWVlopMh6qe46WDlITg",
    authDomain: "dersimo-31041.firebaseapp.com",
    projectId: "dersimo-31041",
    storageBucket: "dersimo-31041.firebasestorage.app",
    messagingSenderId: "653988435501",
    appId: "1:653988435501:web:d933b40d23e8628e7b8aa4",
    measurementId: "G-D2RBEG50Y6",
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Authentication'ı başlat
export const auth = getAuth(app);
