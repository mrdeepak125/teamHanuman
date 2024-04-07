import React from 'react'
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
// import components
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'; 
// import components
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
//import pagess
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Joining from "./pages/Joining.jsx"
import Gallery from "./pages/Gallery.jsx"

 
function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BJs4Dcjf0F2c-GXPq_RgcA6ys21_vG_AzS96vSamFeJ3ghXmMysukoXwYRp-ugUCV9ehunGAr35AQJBb61hLJpk",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
      //     code end
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='./Home' element={ <Home/>} />
        <Route exact path='/Gallery' element={ <Gallery/>} />
        <Route exact path='/Joining' element={ <Joining/>} />
        <Route exact path='/About' element={ <About/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
