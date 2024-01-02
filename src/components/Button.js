import React from "react";
import "./Button.css";

function Buttons({ href, children, value, bgcolor }) {
  const handleClick = () => {};

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button
        className={`button-31 ${href === "" ? "disabled" : ""}`}
        id={value}
        onClick={handleClick}
        style={{ backgroundColor: bgcolor }}
        disabled={href === ""}
      >
        {children}
      </button>
    </a>
  );
}

export default Buttons;
