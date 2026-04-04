let usedQuotes = new Set();

const quotes = [
"Keep pushing forward, no matter what",
"Discipline creates freedom, trust it",
"Your effort today, builds tomorrow",
"Success requires sacrifice, accept it",
"Stay committed, results will follow",
"Nothing worth having, comes easy",
"Work harder today, shine brighter tomorrow",
"Doubt yourself less, do more",
"You have time, use it wisely",
"Struggle now, succeed later",
"Stay sharp, stay ready",
"Focus on solutions, not problems",
"You control your future, act now",
"Be better today, than yesterday",
"Effort never betrays you, remember that",
"Keep improving, never settling",
"Push past limits, grow stronger",
"Make every second count, starting now",
"Stay driven, stay focused",
"Your mindset matters, protect it",
"Turn setbacks into comebacks, always",
"Work until it pays off, fully",
"Keep grinding, results take time",
"Success takes patience, stay consistent",
"Every day matters, use it well",
"Build habits, build success",
"Stay hungry, keep working",
"Keep your vision clear, always",
"Progress takes time, keep going",
"Stay focused, achieve greatness",
"Hard times build strength, embrace them",
"Chase goals daily, not occasionally",
"Consistency builds greatness, never stop",
"Keep learning, keep growing",
"Your future needs you, show up",
"Stay strong, keep moving",
"Commit fully, see results",
"Rise every time, you fall",
"Keep fighting, never quit",
"Believe in yourself, every day",
  "Make it happen."
];

function getUniqueQuote() {
  if (usedQuotes.size === quotes.length) {
    usedQuotes.clear();
  }

  let quote;
  do {
    const index = Math.floor(Math.random() * quotes.length);
    quote = quotes[index];
  } while (usedQuotes.has(quote));

  usedQuotes.add(quote);
  return quote;
}

module.exports = { getUniqueQuote };
