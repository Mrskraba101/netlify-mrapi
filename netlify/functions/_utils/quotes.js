let usedQuotes = new Set();

const quotes = [
  "Stay hungry, stay foolish.",
  "The only limit is your mind.",
  "Dream big. Start small. Act now.",
  "Do something today that your future self will thank you for.",
  "Success is not final; failure is not fatal.",
  "Push yourself, because no one else will do it for you.",
  "Great things never come from comfort zones.",
  "Discipline beats motivation.",
  "Consistency is key.",
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
