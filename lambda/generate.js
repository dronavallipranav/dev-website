import { handler } from './index.js';

async function generate() {
    try {
        const testEvent = {
            httpMethod: "POST",
            body: JSON.stringify({ question: "Generate data" })
        };
        
        const response = await handler(testEvent, {});
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

generate();