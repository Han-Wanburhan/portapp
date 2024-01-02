import React from "react";
import "./Button.css";

function Buttons({ href, children, value }) {
  const handleClick = () => {
    console.log(value);
    // You can perform other actions here if needed
  };
  return (
    <button className="button-31" id={value} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Buttons;
