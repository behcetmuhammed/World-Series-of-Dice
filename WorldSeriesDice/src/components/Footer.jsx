import React from "react";
import "../css/footer.css";
import { GiPerspectiveDiceSixFacesThree } from "react-icons/gi";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">www</div>
      <div className="footer-icon">
        <GiPerspectiveDiceSixFacesThree className="dice-icon" />
      </div>
      <div className="footer-text">Dicee Game</div>
      <div className="footer-icon">
        <GiPerspectiveDiceSixFacesThree className="dice-icon" />
      </div>
      <div className="footer-text">com</div>
    </div>
  );
}

export default Footer;
