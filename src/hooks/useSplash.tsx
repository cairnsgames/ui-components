import React, { useState, useEffect } from "react";

interface SplashScreenProps {
  color: string;
  children: React.ReactNode;
}
const SplashScreen = ({color, children}: SplashScreenProps) => {
  return <div style={{ backgroundColor: color, position: "absolute", top: "0px", bottom:"0px", left: "0px", right:"0px" }} >
    {children}
  </div>
}

const useSplash = (delay = 2500) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, delay);
  }, [delay]);

  return { showSplash, SplashScreen };
};

export default useSplash;
