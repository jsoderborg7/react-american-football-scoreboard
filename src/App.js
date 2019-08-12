//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./HockeyBottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [period, setPeriod]= useState(1);
    const [homePlayer1, setHomePlayer1]= useState();
    const [homePlayer2, setHomePlayer2]= useState();
    const [homePenalty1, setHomePenalty1]= useState();
    const [homePenalty2, setHomePenalty2]= useState();
    const [awayPlayer1, setAwayPlayer1]= useState();
    const [awayPlayer2, setAwayPlayer2]= useState();
    const [awayPenalty1, setAwayPenalty1]= useState();
    const [awayPenalty2, setAwayPenalty2]= useState();

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Home</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="topMiddle">
            <div className="timer">00:03</div>
            <div className="period">
              <h3 className="period__title">Period</h3>
              <div className="period__value">{period}</div>
            </div>
          </div>
          <div className="away">
            <h2 className="away__name">Away</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__goals" onClick={() => setHomeScore(homeScore + 1)}>Home Goals</button>
          
          <button className="homeButtons__player" onClick={() => setHomeScore()}>Home player 1</button>
          
          <button className="homeButtons__player" onClick={() => setHomeScore()}>Home player 2</button>
          
          <button className="homeButtons__penalty" onClick={() => setHomeScore()}>Home penalty 1</button>
          
          <button className="homeButtons__penalty" onClick={() => setHomeScore()}>Home penalty 2</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__goals" onClick={() => setAwayScore(awayScore + 1)}>Away Goals</button>
          
          <button className="awayButtons__player" onClick={() => setAwayScore(awayScore + 3)}>Away player 1</button>

          <button className="awayButtons__player" onClick={() => setAwayScore(awayScore + 3)}>Away player 2</button>

          <button className="awayButtons__penalty" onClick={() => setAwayScore()}>Away penalty 1</button>

          <button className="awayButtons__penalty" onClick={() => setAwayScore()}>Away penalty 2</button>
        
        </div>
        <button className="periodButton" onClick={() => setPeriod(period +1)}>Period</button>
        <button className="resetButton" onClick={() => setHomeScore(0)}>Reset Home</button>
        <button className="resetButton" onClick={() => setAwayScore(0)}>Reset Away</button>
      </section>
    </div>
  );
}

export default App;
