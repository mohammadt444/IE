import React from "react";
import "./infoInput.css";

function InfoInput({ text, placeholder }) {
  return (
    <div className="infoInput">
      <label className="infoInput-text">{text}</label>
      <input
        className="infoInput-input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

InfoInput.defaultProps = {
  text: "متن",
  placeholder: "محل نگهدارنده",
};

export default InfoInput;
