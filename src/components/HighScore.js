function HighScore(props) {
  return (
    <div className="flex-small one-fourth">
      <p className="no-margin-bottom">High Score</p>
      <h2 className="no-top gray-text">{props.highScore}</h2>
    </div>
  );
}

export default HighScore;
