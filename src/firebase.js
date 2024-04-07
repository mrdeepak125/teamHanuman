import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAhOHG1FZ8GeKW1u1wIeIEV221FGPaThSY",
    authDomain: "myseocmdproject.firebaseapp.com",
    projectId: "myseocmdproject",
    storageBucket: "myseocmdproject.appspot.com",
    messagingSenderId: "201642783268",
    appId: "1:201642783268:web:6629a967e883f3b1239eb1",
    measurementId: "G-E1NC3150ER"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);