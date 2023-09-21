import React from "react";

const Splash = ({ children }) => {
  const [show, setshow] = React.useState(true);
  if (show) {
    return <div className="splash">{children}</div>;
  }
  return <div className="splash">{children}</div>;
};

export default Splash;
