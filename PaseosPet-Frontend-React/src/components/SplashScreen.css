import React, { useEffect } from "react";
import "./SplashScreen.css";
import logo from "../assets/paseospet-logo.png"; // coloca aquí tu logo

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500); // 2.5 segundos de duración
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img src={logo} alt="PaseosPet" className="splash-logo" />
      <h2 className="splash-text">PaseosPet</h2>
    </div>
  );
};

export default SplashScreen;

