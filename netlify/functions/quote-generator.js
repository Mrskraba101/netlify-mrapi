const { getUniqueQuote } = require("./_utils/quotes");

exports.handler = async () => {
  try {
    const quote = getUniqueQuote();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ quote })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" })
    };
  }
};
