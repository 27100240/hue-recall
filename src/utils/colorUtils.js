export function hslToCss({ h, s, l }) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function generateRandomColor() {
  return {
    h: Math.floor(Math.random() * 360),
    s: Math.floor(Math.random() * 61) + 30,
    l: Math.floor(Math.random() * 41) + 30,
  };
}

export function generateRounds(count = 3) {
  return Array.from({ length: count }, () => generateRandomColor());
}

export function calculateScore(target, guess) {
  const hueDiffRaw = Math.abs(target.h - guess.h);
  const hueDiff = Math.min(hueDiffRaw, 360 - hueDiffRaw) / 180;
  const satDiff = Math.abs(target.s - guess.s) / 100;
  const lightDiff = Math.abs(target.l - guess.l) / 100;

  const weightedDiff =
    hueDiff * 0.65 +
    satDiff * 0.2 +
    lightDiff * 0.15;

  const harshScore = Math.pow(Math.max(0, 1 - weightedDiff), 2.4) * 100;

  return Math.max(0, Math.round(harshScore));
}