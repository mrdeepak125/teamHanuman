importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAhOHG1FZ8GeKW1u1wIeIEV221FGPaThSY",
    authDomain: "myseocmdproject.firebaseapp.com",
    projectId: "myseocmdproject",
    storageBucket: "myseocmdproject.appspot.com",
    messagingSenderId: "201642783268",
    appId: "1:201642783268:web:6629a967e883f3b1239eb1",
    measurementId: "G-E1NC3150ER"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});