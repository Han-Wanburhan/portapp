import React from "react";
import "./Button.css";

function Buttons({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="button-31">{children}</button>
    </a>
  );
}

export default Buttons;
