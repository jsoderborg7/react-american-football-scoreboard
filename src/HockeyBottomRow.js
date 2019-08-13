import React, {useState} from "react";
import "./App.css";

function BottomRow(){
  const [player1Home, setPlayer1Home]= useState(0);
  const [player2Home, setPlayer2Home]= useState(0);
  const [penalty1Home, setPenalty1Home]= useState(0);
  const [penalty2Home, setPenalty2Home]= useState(0);
  const [player1Away, setPlayer1Away]= useState(0);
  const [player2Away, setPlayer2Away]= useState(0);
  const [penalty1Away, setPenalty1Away]= useState(0);
  const [penalty2Away, setPenalty2Away]= useState(0);
  // const [shotsHome, setShotsHome]= useState(0);
  // const [shotsAway, setShotsAway]= useState(0);

  return (
    <div className="bottomRow">
      <div className="bottomRowHome">
        <div className="Player">
          <h3 className="player__title">Player</h3>
          <div className="player__value">{player1Home}</div>
          <div className="player__value">{player2Home}</div>
        </div>
        <div className="Penalty">
          <h3 className="penalty__title">Penalty</h3>
          <div className="penalty__value">{penalty1Home}</div>
          <div className="penalty__value">{penalty2Home}</div>
        </div>
      </div>
      {/* <div className="shotsOnGoal">
        <h3 className="shots__title">Shots on Goal</h3>
        <div className="shots_boxes">
          <div className="shots__value">{shotsHome}</div>
          <div className="shots__value">{shotsAway}</div>
        </div>
      </div> */}
      <div className="bottomRowAway">
        <div className="Player">
          <h3 className="player__title">Player</h3>
          <div className="player__value">{player1Away}</div>
          <div className="player__value">{player2Away}</div>
        </div>
        <div className="Penalty">
          <h3 className="penalty__title">Penalty</h3>
          <div className="penalty__value">{penalty1Away}</div>
          <div className="penalty__value">{penalty2Away}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;