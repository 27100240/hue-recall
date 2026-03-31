import { hslToCss } from "../utils/colorUtils";

export default function GameScreen({
  roundNumber,
  totalRounds,
  targetColor,
  guess,
  setGuess,
  onSubmit,
}) {
  function updateValue(key, value) {
    setGuess((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  }

  return (
    <div className="glass-card">
      <div className="top-row">
        <div>
          <div className="eyebrow">
            Round {roundNumber} of {totalRounds}
          </div>
          <h2>Recreate this color</h2>
        </div>
        <button className="primary-btn" onClick={onSubmit}>
          Submit guess
        </button>
      </div>

      <div className="swatch-grid">
        <div className="swatch-panel">
          <p className="panel-label">Target</p>
          <div
            className="color-swatch large"
            style={{ background: hslToCss(targetColor) }}
          />
          <p className="panel-subtext">Memorize the vibe. Then match it.</p>
        </div>

        <div className="swatch-panel">
          <p className="panel-label">Your guess</p>
          <div
            className="color-swatch large"
            style={{ background: hslToCss(guess) }}
          />
          <p className="panel-subtext">
            Adjust hue, saturation, and lightness.
          </p>
        </div>
      </div>

      <div className="sliders-wrap">
        <div className="slider-block">
          <div className="slider-label-row">
            <label>Hue</label>
            <span>{guess.h}</span>
          </div>
          <input
            type="range"
            min="0"
            max="359"
            value={guess.h}
            onChange={(e) => updateValue("h", e.target.value)}
          />
        </div>

        <div className="slider-block">
          <div className="slider-label-row">
            <label>Saturation</label>
            <span>{guess.s}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={guess.s}
            onChange={(e) => updateValue("s", e.target.value)}
          />
        </div>

        <div className="slider-block">
          <div className="slider-label-row">
            <label>Lightness</label>
            <span>{guess.l}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={guess.l}
            onChange={(e) => updateValue("l", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}