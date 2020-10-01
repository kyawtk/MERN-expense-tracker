import React, { useState } from "react";
const DiceScore = (props) => {

  
  let { myscore, computerscore } = props;
  
  if (myscore > computerscore) {
    return (
    <div className="results">
      <div className="man win"><h1>{myscore}</h1></div>
    <div className="computer lose"><h1>{computerscore}</h1></div>
    <div className="message">YOu win</div>
    </div>
  );
  } else if (myscore == computerscore) {
return (
     <div className="results">
      <div className="man draw"><h1>{myscore}</h1></div>
    <div className="computer draw"><h1>{computerscore}</h1></div>
    <div className="message" style={{display:`${myscore?'block':'none'}`}}>Draw</div>
    </div>
  );
  } else {
  return (
    <div className="results">
      <div className="man lose"><h1>{myscore}</h1></div>
    <div className="computer win"><h1>{computerscore}</h1></div>
    <div className="message">Computer Wins</div>
    </div>
  );
  }


  
};

export default DiceScore;
