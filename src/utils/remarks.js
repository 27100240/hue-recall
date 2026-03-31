export function getRemark(score) {
  if (score >= 95) return "Okay... that was annoyingly accurate.";
  if (score >= 88) return "Lowkey ate. You really saw that color.";
  if (score >= 80) return "That was actually kind of gorgeous.";
  if (score >= 70) return "Pretty solid. You had the general vibe.";
  if (score >= 60) return "Not perfect, but at least it made sense.";
  if (score >= 50) return "You were in the neighborhood. Different house though.";
  if (score >= 40) return "This was giving guesswork.";
  if (score >= 30) return "A brave attempt. A deeply inaccurate one.";
  if (score >= 20) return "Respectfully, what was the vision?";
  return "That colour is filing a complaint.";
}