import React from "react";
import "./DisplayContainer.css";

function DisplayContainer({ display, result }) {
  return (
    <div className="display-container">
      <div className="display">
        <div className="combined-field">
          {display || result || "0"}
        </div>
      </div>
    </div>
  );
}

export default DisplayContainer;
