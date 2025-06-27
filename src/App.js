import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1 = Q1, 2 = Q2
  const [message, setMessage] = useState(null);
  const [yesSize, setYesSize] = useState(1);

  const [message2, setMessage2] = useState(null);
  const [yesSize2, setYesSize2] = useState(1);

  const handleNoClick = () => {
    let msg = "";
    switch (yesSize) {
      case 1:
        msg = "Ena Pasama Pesamata!";
        break;
      case 2:
        msg = "Naane Kozhandha!";
        break;
      case 3:
        msg = "Hey Mental Adichiduvan pathuko!";
        break;
      case 4:
        msg = "Hey Mental! Yes Press Panu Idhuku Mela Onu Ila No Press Panna Varadhuku!";
        break;
      default:
        msg = "Konuduvan pathuko🤪 yes solu";
        break;
    }
    setYesSize((prev) => prev + 1);
    setMessage(msg);
    // Do NOT move to question 2
  };

  const handleYesClick = () => {
    setMessage("Awwww 💕 Naanum pesuran da 😍");
    setTimeout(() => {
      setStep(2);
    }, 3000);
  };

  const handleNo2Click = () => {
    let msg = "";
    switch (yesSize2) {
      case 1:
        msg = "Ena nee irukama ena pana pora!";
        break;
      case 2:
        msg = "Nee iruthu than aaganum vera option ellam ila!";
        break;
      default:
        msg = "Naa ellam unaku bestfrnd ah kedaika nee ena puniyam paniko..!";
        break;
    }
    setYesSize2((prev) => prev + 1);
    setMessage2(msg);
  };

  const handleYes2Click = () => {
    setMessage2("Epavum Bestfrnd ah irukalam ena fight vanhdalum sari 💖");
    setTimeout(() => {
      navigate("/Act");
    }, 1000);
  };

  return (
    <div className="container">
      {step === 1 && (
        <>
          <h1 style={{ color: "blue" }}>Oii unkita konjam question kekava</h1>
          <h1>Question: Pasama Pesuviya?</h1>
          <img
            src="https://i.pinimg.com/originals/74/c8/b9/74c8b9ec15202192a09c540d75e14aa6.gif"
            alt="Bubududu GIF"
            style={{
           width: "300px",
           borderTopLeftRadius: "149px",
           borderBottomRightRadius: "112px"
  }}
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
        </>
      )}

      {step === 2 && (
        <>
          <h1>Question: En kuda irupiya epavum bestfrnd ah?</h1>
          <img
            src="https://i.pinimg.com/originals/74/c8/b9/74c8b9ec15202192a09c540d75e14aa6.gif"
            alt="Bubududu GIF"
            style={{
           width: "300px",
           borderTopLeftRadius: "149px",
           borderBottomRightRadius: "112px"
  }}
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
        </>
      )}
    </div>
  );
};

export default App;
