import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        height: 55,
        width: "100%",
        background: "rgb(49,52,54)",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <p style={{ display: "flex", color: "rgb(114,120,125)" }}>
        تمامی حقوق برای توسعه دهندگان محفوظ است
      </p>
    </div>
  );
}

export default Footer;
