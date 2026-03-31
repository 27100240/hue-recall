export default function WelcomeScreen({ onStart }) {
  return (
    <div className="glass-card hero-card">
      <div className="hero-content">
        <div className="eyebrow">Guess the Color game</div>
        <h1>Hue Recall</h1>
        <p className="hero-text">
            Study the color. Rebuild the vibe. Survive the commentary.
        </p>

        <div className="hero-mini-grid">
          <div className="mini-pill">3 rounds</div>
          <div className="mini-pill">Random colors</div>
          <div className="mini-pill">Score out of 100</div>
        </div>

        <button className="primary-btn" onClick={onStart}>
          Start game
        </button>
      </div>
    </div>
  );
}