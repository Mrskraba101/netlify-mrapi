exports.handler = async () => {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: data[0].url })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch cat image" })
    };
  }
};
