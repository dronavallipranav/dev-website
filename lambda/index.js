import { OpenAI } from 'langchain/llms/openai';
import { RetrievalQAChain } from 'langchain/chains';
import { HNSWLib } from 'langchain/vectorstores/hnswlib';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import * as fs from 'fs';

export const handler = async function(event, context) {
  try {
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: "bruh"
      };
    }
    if (event.httpMethod !== "POST") {
      return { statusCode: 405,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
         body: event.httpMethod};
    }

    const data = JSON.parse(event.body);
    const question = data.question;
    console.log(question);

    if (!question) {
      return { statusCode: 400,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
         body: "Question required" };
    }

    const txtPath = `./data.txt`;
    const VECTOR_STORE_PATH = `data.index`;
    const model = new OpenAI({});

    let vectorStore;
    if (fs.existsSync(VECTOR_STORE_PATH)) {
      console.log('Vector Exists..');
      try {
        console.log("trying");
        vectorStore = await HNSWLib.load(VECTOR_STORE_PATH, new OpenAIEmbeddings());
        console.log("returned yay");
      } catch (err) {
        console.error("Error loading vector store:", err);
      }
    } else {
      const text = fs.readFileSync(txtPath, 'utf8');
      const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
      const docs = await textSplitter.createDocuments([text]);
      vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
      await vectorStore.save(VECTOR_STORE_PATH);
    }

    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());
    const answer = await chain.call({
      query: question,
    });


    const text = answer.text;
    console.log(text);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
      body: JSON.stringify({ text })
    };

  } catch (error) {
      
  return {
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: error.toString()
  };
  }
};
