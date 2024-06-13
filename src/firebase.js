// src/firebase.js

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDUbUTnvxVE2PDViNr4ex-P9M49gKMWtFE",
  authDomain: "team-bfcbe.firebaseapp.com",
  projectId: "team-bfcbe",
  storageBucket: "team-bfcbe.appspot.com",
  messagingSenderId: "285905383470",
  appId: "1:285905383470:web:a51125992d16399aa5afbf",
  measurementId: "G-6E4XZNXFFN"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
