import React from "react";
import "./modal.css";

function Modal({ onClose, title, children }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {/* <h4 className="modal-title">{title}</h4> */}
          <button onClick={onClose} className="modal-exit">
            X
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {/* <div className="modal-footer">
          <button onClick={onClose} className="button">
            X
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
