import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, onClick }) {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"} onClick={onClick}> 
        {text}
      </a>
    </div>
  );
}
