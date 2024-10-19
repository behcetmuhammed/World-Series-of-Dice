import React, { useState } from "react";
import "../css/tooltip.css"; // Tooltip için stil dosyası

function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip">{text}</div>}
    </div>
  );
}

export default Tooltip;
