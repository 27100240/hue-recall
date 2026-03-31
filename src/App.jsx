import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import FinalScreen from "./components/FinalScreen";
import { calculateScore, generateRounds } from "./utils/colorUtils";
import { getRemark } from "./utils/remarks";

const TOTAL_ROUNDS = 3;

function createInitialGuess() {
  return { h: 180, s: 50, l: 50 };
}

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [rounds, setRounds] = useState([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [guess, setGuess] = useState(createInitialGuess());
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);

  function startGame() {
    const newRounds = generateRounds(TOTAL_ROUNDS);
    setRounds(newRounds);
    setRoundIndex(0);
    setGuess(createInitialGuess());
    setResults([]);
    setCurrentResult(null);
    setScreen("game");
  }

  function handleSubmit() {
    const targetColor = rounds[roundIndex];
    const score = calculateScore(targetColor, guess);
    const remark = getRemark(score);

    const result = {
      targetColor,
      guess: { ...guess },
      score,
      remark,
    };

    setResults((prev) => [...prev, result]);
    setCurrentResult(result);
    setScreen("result");
  }

  function handleNext() {
    if (roundIndex === TOTAL_ROUNDS - 1) {
      setScreen("final");
      return;
    }

    setRoundIndex((prev) => prev + 1);
    setGuess(createInitialGuess());
    setCurrentResult(null);
    setScreen("game");
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="container">
        {screen === "welcome" && <WelcomeScreen onStart={startGame} />}

        {screen === "game" && rounds.length > 0 && (
          <GameScreen
            roundNumber={roundIndex + 1}
            totalRounds={TOTAL_ROUNDS}
            targetColor={rounds[roundIndex]}
            guess={guess}
            setGuess={setGuess}
            onSubmit={handleSubmit}
          />
        )}

        {screen === "result" && currentResult && (
          <ResultScreen
            roundNumber={roundIndex + 1}
            totalRounds={TOTAL_ROUNDS}
            targetColor={currentResult.targetColor}
            guess={currentResult.guess}
            score={currentResult.score}
            remark={currentResult.remark}
            onNext={handleNext}
            isLastRound={roundIndex === TOTAL_ROUNDS - 1}
          />
        )}

        {screen === "final" && (
          <FinalScreen results={results} onRestart={startGame} />
        )}
      </div>
    </div>
  );
}