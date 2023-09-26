import React from "react";
import { useAppContext } from "../../context/appContext";

const SharedLayout = () => {
  const { logoutUser } = useAppContext();
  function sayHello() {
    logoutUser();
  }
  return (
    <div>
      <button onClick={sayHello}>Log Out</button>;{" "}
    </div>
  );
};

export default SharedLayout;
