// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGrHRVThmjAOhkUanK_0pR_v7KWj_9i-Q",
  authDomain: "email-password-auth-34a26.firebaseapp.com",
  projectId: "email-password-auth-34a26",
  storageBucket: "email-password-auth-34a26.appspot.com",
  messagingSenderId: "522753911616",
  appId: "1:522753911616:web:179c41628357b28e0128a5",
  measurementId: "G-4L57ZMYRSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;