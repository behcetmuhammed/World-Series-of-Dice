import React, { useState, useEffect } from "react";
import { GiBackForth } from "react-icons/gi";
import Tooltip from "./Tooltip.jsx";
import "../css/playground.css";
import { winning } from "./winning";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";

// Zar resimleri
import dice1 from "../image/dice1.png";
import dice2 from "../image/dice2.png";
import dice3 from "../image/dice3.png";
import dice4 from "../image/dice4.png";
import dice5 from "../image/dice5.png";
import dice6 from "../image/dice6.png";

function Playground() {
  const [playerOne, setPlayerOne] = useState("Player1 [Siz]");
  const [playerTwo, setPlayerTwo] = useState("Player2 [PC]");
  const [inputValue, setInputValue] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [resultMessage, setResultMessage] = useState("Wait"); // Oyun durumu mesajı
  let intervalId;

  /*Zarlar*/
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const focus = () => {
    setPlayerOne("");
  };

  const handleInputChange = (event) => {
    const x = event.target.value;
    setInputValue(x);
  };

  const renderDice = (diceValue) => {
    switch (diceValue) {
      case 1:
        return <img src={dice1} alt="Zar 1" />;
      case 2:
        return <img src={dice2} alt="Zar 2" />;
      case 3:
        return <img src={dice3} alt="Zar 3" />;
      case 4:
        return <img src={dice4} alt="Zar 4" />;
      case 5:
        return <img src={dice5} alt="Zar 5" />;
      case 6:
        return <img src={dice6} alt="Zar 6" />;
      default:
        return null;
    }
  };

  const clickButton = () => {
    setIsRolling(true);
    setResultMessage("Wait");

    // Zarları döndürmeye başla
    intervalId = setInterval(() => {
      setDiceOne(getRandomNumber());
      setDiceTwo(getRandomNumber());
    }, 100);

    // 3 saniye sonra zarları durdur
    setTimeout(() => {
      clearInterval(intervalId);
      const finalDiceOne = getRandomNumber();
      const finalDiceTwo = getRandomNumber();
      setDiceOne(finalDiceOne);
      setDiceTwo(finalDiceTwo);
      setIsRolling(false);

      // Sonucu belirle ve mesajı güncelle
      const result = winning(finalDiceOne, finalDiceTwo);
      if (result === "win") {
        setResultMessage("You Win!");
      } else if (result === "draw") {
        setResultMessage("Draw!");
      } else {
        setResultMessage("You Lost!");
      }
    }, 3000);
  };

  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  return (
    <div className="middle-area">
      {/* Oyun Durumu Mesajı */}
      <div className="game-status">
        <h2>{resultMessage}</h2>{" "}
        {/* Wait, You Win, Draw, You Lost mesajları burada */}
      </div>

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

      <div className="game-area">
        <div className="dice-area">
          {renderDice(diceOne)}
          {renderDice(diceTwo)}
        </div>
      </div>

      <button onClick={clickButton} className="button-area">
        <GiBackForth className="button-icon" />
      </button>
    </div>
  );
}

export default Playground;
