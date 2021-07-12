import React from "react";
import "./input.css";

function Input({ type, text, placeholder }) {
  return (
    <div className="input">
      <input
        type={type}
        name="txtSearch"
        placeholder={placeholder}
        pattern={type === "email" ? "*@*.*" : type === "name" ? "s" : ""}
        className="input-placeholder"
      />
      <label for="user-name" className="input-label">
        {text}
      </label>
    </div>
  );
}

export default Input;
