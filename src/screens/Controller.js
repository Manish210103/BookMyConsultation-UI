import React, { useState } from "react";
import Home from "../screens/home/Home";
import "./controller.css"

const Controller = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [resetKey, setResetKey] = useState(false);

  const handleRouteChange = (newPath) => {
    setCurrentPath(newPath);
    setResetKey((prevResetKey) => !prevResetKey);
    window.history.pushState(null, "", newPath);
  };

  let componentToRender;

  if (currentPath === "/") {
    componentToRender = <Home baseUrl="/api/v1/" key={resetKey} />;
  }

  return (
    <div className="main-container-2">
      {componentToRender}
    </div>
  );
};

export default Controller;
