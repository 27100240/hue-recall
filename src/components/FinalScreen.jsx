export default function FinalScreen({ results, onRestart }) {
  const total = results.reduce((sum, item) => sum + item.score, 0);
  const average = Math.round(total / results.length);

  const finalRemark =
    average >= 85
      ? "Honestly? Very strong. Colour theory may fear you."
      : average >= 70
      ? "Cute. You see the visionnn."
      : average >= 50
      ? "There is potential here. Good chaotic vibes."
      : "A humbling experience, but a memorable one?";

  return (
    <div className="glass-card">
      <div className="eyebrow">Game complete</div>
      <h2>Final score</h2>

      <div className="result-hero">
        <div className="final-score-orb">
          <span>{average}</span>
          <small>/100 average</small>
        </div>

        <div className="remark-card">
          <div className="remark-label">Final verdict</div>
          <p className="remark">{finalRemark}</p>
        </div>
      </div>

      <div className="results-list">
        {results.map((result, index) => (
          <div className="result-row" key={index}>
            <span>Round {index + 1}</span>
            <strong>{result.score}/100</strong>
          </div>
        ))}
      </div>

      <button className="primary-btn" onClick={onRestart}>
        Play again
      </button>
    </div>
  );
}