import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    switch (yesSize) {
      case 1:
        setMessage("Ena Pasama Pesamata!");
        break;
      case 2:
        setMessage("Naane Kozhandha!");
        break;
      case 3:
        setMessage("Hey Mental Adichiduvan pathuko!");
        break;
      case 4:
        setMessage(
          "Hey Mental! Yes Press Panu Idhuku Mela Onu Ila No Press Panna Varadhuku!"
        );
        break;
      default:
        setMessage(null);
        break;
    }
    setYesSize((prevSize) => prevSize + 1);
  };

  const [message2, setMessage2] = useState(null);
  const [yesSize2, setYesSize2] = useState(1);

  const handleNo2Click = () => {
    switch (yesSize2) {
      case 1:
        setMessage2("Naane Kozhandha!");
        break;
      case 2:
        setMessage2("Nee iruthu than aaganum vera option ellam ila!");
        break;
      default:
        setMessage2(null);
        break;
    }
    setYesSize2((prevSize) => prevSize + 1);
  };

  const handleYesClick = () => {
    navigate("/Act");
  };

  const handleYes2Click = () => {
    navigate("/Act");
  };

  return (
    <div className="container">
      <h1>Oii   Thakaliii unkita question kekava</h1>
      <h1>Question 1: Pasama Pesuviya?</h1>
      <img
        src="https://i.pinimg.com/originals/74/c8/b9/74c8b9ec15202192a09c540d75e14aa6.gif"
        alt="Bubududu GIF"
        style={{ width: "300px" }}
      />
      <button className="no-button" onClick={handleNoClick}>
        No
      </button>
      <button
        id="yesButton"
        className={`yes-button ${yesSize > 1 ? "larger" : ""}`}
        onClick={handleYesClick}
      >
        Yes
      </button>

      {message && <p className="message">{message}</p>}

      <h1>Question 2: En kuda irupiya epavum bestfrnd ah?</h1>
      <img
        src="https://i.pinimg.com/originals/74/c8/b9/74c8b9ec15202192a09c540d75e14aa6.gif"
        alt="Bubududu GIF"
        style={{ width: "300px" }}
      />
      <button className="no-button" onClick={handleNo2Click}>
        No
      </button>
      <button
        id="yesButton"
        className={`yes-button ${yesSize2 > 1 ? "larger" : ""}`}
        onClick={handleYes2Click}
      >
        Yes
      </button>

      {message2 && <p className="message">{message2}</p>}
    </div>
  );
};

export default App;
