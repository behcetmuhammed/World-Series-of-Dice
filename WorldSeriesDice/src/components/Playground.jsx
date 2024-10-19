import React, { useState, useEffect } from "react";
import { GiBackForth } from "react-icons/gi";
import Tooltip from "./Tooltip.jsx"; // Tooltip bileşenini içe aktar
import "../css/playground.css";
import "../css/header.css";
import { winning } from "./winning";

// Zar resimleri
import dice1 from "../image/dice1.png";
import dice2 from "../image/dice2.png";
import dice3 from "../image/dice3.png";
import dice4 from "../image/dice4.png";
import dice5 from "../image/dice5.png";
import dice6 from "../image/dice6.png";

function Playground() {
  const [playerOne, setPlayerOne] = useState("Player1 [Siz]");
  const [playerTwo, setplayerTwo] = useState("Player2 [PC]");
  const [inputValue, setInputValue] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  let intervalId; // Aralık ID

  /*Zarlar*/
  const [diceOne, setDiceOne] = useState(1); // İlk zarın başlangıç değeri
  const [diceTwo, setDiceTwo] = useState(1); // İkinci zarın başlangıç değeri

  useEffect(() => {
    return () => {
      // bileşen kaldırıldığında intervali temizle
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

  // Zarları render etme fonksiyonu
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

  //Butona basıldığı zaman
  const clickButton = () => {
    setIsRolling(true);

    // Zarları döndürmeye başla
    intervalId = setInterval(() => {
      setDiceOne(getRandomNumber());
      setDiceTwo(getRandomNumber());
    }, 100); // 100 ms aralıklarla zar değerlerini güncelle

    // 3 saniye sonra zarları durdur ve rastgele bir değer al
    setTimeout(() => {
      clearInterval(intervalId);
      const finalDiceOne = getRandomNumber();
      const finalDiceTwo = getRandomNumber();
      setDiceOne(finalDiceOne);
      setDiceTwo(finalDiceTwo);
      setIsRolling(false);
      winning(finalDiceOne, finalDiceTwo); // Son değerleri winning fonksiyonuna geçir
    }, 3000);
  };

  //1 ile 6 arasında Randum sayı
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //Kazanan
  // function winning() {
  //   if (diceOne > diceTwo) {
  //     console.log("Kazandın");
  //   } else if (diceOne === diceTwo) {
  //     console.log("Berabere");
  //   } else {
  //     console.log("Kaybettin");
  //   }
  // }

  return (
    <div className="middle-area">
      {/* Player Text */}
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
      {/* Game Area */}
      <div className="game-area">
        <div className="dice-area">
          {renderDice(diceOne)}
          {renderDice(diceTwo)}
          {/* {winning()} */}
        </div>
      </div>
      {/* Button */}
      <button onClick={clickButton} className="button-area">
        <GiBackForth className="button-icon" />
      </button>
    </div>
  );
}

export default Playground;
