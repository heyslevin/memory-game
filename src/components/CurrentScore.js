function CurrentScore(props) {
  return (
    <div className="flex-small one-fourth">
      <p className="no-margin-bottom">Current Score:</p>
      <h2 className="no-top">{props.currentScore}</h2>
    </div>
  );
}

export default CurrentScore;
