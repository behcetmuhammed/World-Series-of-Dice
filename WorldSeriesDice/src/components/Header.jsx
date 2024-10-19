import React from "react";
import Playground from "./Playground.jsx";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      {/*Oyun Başlıyor*/}
      <div className="wait">
        <div className="wait-text">Wait!</div>
        <div className="wait-icon">
          <FaHourglassStart className="draw-icon-Handshake" />
        </div>
      </div>
      {/*Kazandın*/}
      <div className="win">
        <div className="youWin-text">YouWin!</div>
        <div className="youWin-icon">
          <FaSmileWink className="draw-icon-Handshake" />
        </div>
      </div>
      <div className="draw">
        {/*Berabere*/}
        <div className="draw-text">Draw!</div>
        <div className="draw-icon">
          <FaHandshakeAngle className="draw-icon-Handshake" />
        </div>
      </div>
      {/*Kaybettin*/}
      <div className="lost">
        <div className="youLost-text">YouLost!</div>
        <div className="youLost-icon">
          <FaSadTear className="draw-icon-Handshake" />
        </div>
      </div>
    </div>
  );
}

export default Header;
