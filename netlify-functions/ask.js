const axios = require('axios');

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    const body = JSON.parse(event.body);
    const userQuestion = body.question;

    try {
        const response = await axios.post('https://api.openai.com/v2/engines/davinci/completions', {
            prompt: userQuestion,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const answer = response.data.choices[0].text.trim();
        return {
            statusCode: 200,
            body: JSON.stringify({ answer })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error fetching response from OpenAI" })
        };
    }
};
