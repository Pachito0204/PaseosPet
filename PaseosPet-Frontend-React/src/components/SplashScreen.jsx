import React, { useEffect } from "react";
import "./SplashScreen.css";
import logo from "../assets/paseospet-logo.png"; // tu logo

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000); // duración aumentada a 4 segundos
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="PaseosPet" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
