import React, { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Joining from "./pages/Joining.jsx";
import CalishaAudio from "./pages/CalishaAudio.jsx";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      getTokenAndDisplay();
    } else {
      alert("You denied the notification");
    }
  }

  async function getTokenAndDisplay() {
    try {
      const token = await getToken(messaging, {
        vapidKey: "BGgdDrDpLiFOfwWxcewOH9eSZrO0wyBZ4btZnTAMlfWLeWlNSBid01kw6UG_BULJ41TsqXhufWXohQLJCc9Pma8",
      });
      const deviceName = navigator.userAgent;
      console.log('Device Name:', deviceName);
      console.log("Token no.:-", token);
      
      // Send this token to server (db)
      await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ notificationToken: token, deviceName })
      });

      localStorage.setItem('notificationToken', token);
      localStorage.setItem('deviceName', deviceName);
    } catch (error) {
      console.error("Error getting token:", error);
    }
  }

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);

          // Check if notifications are already granted
          if (Notification.permission === "granted") {
            getTokenAndDisplay();
          } else if (Notification.permission !== "denied") {
            // Request permission if not already denied
            requestPermission();
          }
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/CalishaAudio" element={<CalishaAudio />} />
          <Route exact path="/Joining" element={<Joining />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
