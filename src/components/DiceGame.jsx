import React, { useState, useEffect } from "react";
import DiceScore from './DiceScore';
import '../DiceStyle.css' 
const DiceGame = () => {
  let [myscore, setmyscore] = useState('');
  let [computerscore, setcomputerscore] = useState('');

  const startgame = () => {
    let myresult = Math.floor(Math.random() * 6) + 1;
    let computerresult = Math.floor(Math.random() * 6) + 1;
    setmyscore(myresult);
    setcomputerscore(computerresult);
  };
  return (
    <div className="dice-game-wrapper">
      <button type="button" onClick={startgame}>
        Go!
      </button>
      <DiceScore myscore={myscore} computerscore={computerscore} />
    </div>
  );
};

export default DiceGame;
