import React, { useState } from "react";
import logo from "./assets/logo.png";
import GroupedImage from "./assets/GroupedImage1.png";
import GroupedImage2 from "./assets/GroupedImag2.png";
import Dubai from "./assets/dubai.jpg";
import HongKong from "./assets/hongkong.3ef5c934532bdea394bb.jpg";
import Singapore from "./assets/singapore.jpg";
import {
  FaApple,
  FaGooglePlay,
  FaWifi,
  FaHouseUser,
  FaPersonBooth,
  FaMoneyBill,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Routes, Route } from "react-router-dom";
import Landing from "./Screens/AuthScreens/Landing";
import { BiLogIn } from "react-icons/bi";
import Login from "./Screens/AuthScreens/Login";
import Home from "./Screens/HomeScreens/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
