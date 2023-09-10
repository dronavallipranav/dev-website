const { runWithEmbeddings } = require('./index.js');

export const handler = async function(event, context) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body);
    const question = data.question;

    if (!question) {
      return { statusCode: 400, body: "Question required" };
    }

    const answer = await runWithEmbeddings(question);
    const text = answer.text;
    console.log(text);
    return {
      statusCode: 200,
      body: JSON.stringify({ text })
    };

  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
