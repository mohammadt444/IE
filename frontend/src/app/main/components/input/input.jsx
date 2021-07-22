import React, { useState } from "react";
import "./input.css";

function Input({ type, text, placeholder, onChange, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="input">
      <input
        onChange={onChange}
        type={type}
        name="txtSearch"
        placeholder={placeholder}
        pattern={
          type === "email"
            ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            : type === "password"
            ? ".{6,}"
            : ""
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`input-placeholder ${
          !focused
            ? ""
            : error
            ? "input-placeholder_error"
            : "input-placeholder_correct"
        }`}
      />
      <label for="user-name" className="input-label">
        {text}
      </label>
    </div>
  );
}

export default Input;
