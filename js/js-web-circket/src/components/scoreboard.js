import React from "react";
export class ScoreBoard extends React.Component {
  render() {
    const stats = this.props.stats;
    if (stats.runs == undefined) return <h1>Press Start Button!</h1>;
    return (
      <div className=" scoreboard text-left">
        <h3>ScoreCard:</h3>
        <h4>
          {stats.batting}:{stats.runs}/{stats.wickets}(R.R :{stats.rr}) ,Overs{" "}
          {stats.overs}
        </h4>
        <h4>Target: {stats.target > 0 ? stats.target : "-"}</h4>
        <h2>{stats.winner}</h2>
        {/* <h4>Batsmen name | Runs| bowls | 4s | 6s | Wicket by | SR</h4>
        <h4>
          Bowler name | Overs | Runs | Wickets | Econ | 0s | 4s | 6s | WD | NB
        </h4> */}
      </div>
    );
  }
}
