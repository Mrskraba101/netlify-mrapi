exports.handler = async () => {
  try {
    const res = await fetch("https://meme-api.com/gimme");
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: data.url })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch meme" })
    };
  }
};
