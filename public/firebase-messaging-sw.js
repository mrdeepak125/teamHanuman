importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDUbUTnvxVE2PDViNr4ex-P9M49gKMWtFE",
  authDomain: "team-bfcbe.firebaseapp.com",
  projectId: "team-bfcbe",
  storageBucket: "team-bfcbe.appspot.com",
  messagingSenderId: "285905383470",
  appId: "1:285905383470:web:a51125992d16399aa5afbf",
  measurementId: "G-6E4XZNXFFN"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
