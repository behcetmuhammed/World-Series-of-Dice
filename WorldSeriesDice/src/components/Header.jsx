import React from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import "../css/header.css";
function Header() {
  return (
    <div className="header">
      {/*text*/}
      <div className="draw-text">Draw!</div>
      {/*icon*/}
      <div className="draw-icon">
        <FaHandshakeAngle className="draw-icon-Handshake" />
      </div>
    </div>
  );
}

export default Header;
