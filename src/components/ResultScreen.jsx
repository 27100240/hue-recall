import { hslToCss } from "../utils/colorUtils";

export default function ResultScreen({
  roundNumber,
  totalRounds,
  targetColor,
  guess,
  score,
  remark,
  onNext,
  isLastRound,
}) {
  return (
    <div className="glass-card">
      <div className="eyebrow">
        Round {roundNumber} of {totalRounds}
      </div>
      <h2>Your result</h2>

      <div className="result-hero">
        <div className="score-orb">
          <span>{score}</span>
          <small>/100</small>
        </div>

        <div className="remark-card">
          <div className="remark-label">Verdict</div>
          <p className="remark">{remark}</p>
        </div>
      </div>

      <div className="swatch-grid">
        <div className="swatch-panel">
          <p className="panel-label">Target</p>
          <div
            className="color-swatch large"
            style={{ background: hslToCss(targetColor) }}
          />
          <p className="panel-subtext">
            HSL({targetColor.h}, {targetColor.s}%, {targetColor.l}%)
          </p>
        </div>

        <div className="swatch-panel">
          <p className="panel-label">Your guess</p>
          <div
            className="color-swatch large"
            style={{ background: hslToCss(guess) }}
          />
          <p className="panel-subtext">
            HSL({guess.h}, {guess.s}%, {guess.l}%)
          </p>
        </div>
      </div>

      <button className="primary-btn" onClick={onNext}>
        {isLastRound ? "See final score" : "Next color"}
      </button>
    </div>
  );
}