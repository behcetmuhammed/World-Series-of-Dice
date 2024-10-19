import React, { useState } from "react";
import { GiBackForth } from "react-icons/gi";
import Tooltip from "./Tooltip.jsx"; // Tooltip bileşenini içe aktar
import "../css/playground.css";

function Playground() {
  const [playerOne, setPlayerOne] = useState("Player1");
  const [playerTwo, setplayerTwo] = useState("Player2");
  const [inputValue, setInputValue] = useState("");

  const focus = () => {
    setPlayerOne("");
  };

  const handleInputChange = (event) => {
    const x = event.target.value;
    setInputValue(x);
  };

  return (
    <div className="middle-area">
      <div className="player-area">
        <Tooltip text="İsminizi değiştirmek için tıklayınız!">
          <div>
            <input
              type="text"
              placeholder={playerOne}
              value={inputValue}
              onFocus={focus}
              onChange={handleInputChange}
              className={inputValue ? "filled-input" : "empty-input"}
            />
          </div>
        </Tooltip>
        <Tooltip text="Bu isim değiştirilemez!">
          <div>
            <input
              title="İsim değiştirilemez!"
              type="text"
              placeholder={playerTwo}
              readOnly
            />
          </div>
        </Tooltip>
      </div>
      <div className="player-area">
        <div>oyun alanı 1</div>
        <div>oyun alanı 2</div>
      </div>
      <div className="button-area">
        <GiBackForth className="button-icon" />
      </div>
    </div>
  );
}

export default Playground;
