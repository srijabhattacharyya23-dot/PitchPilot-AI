const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  try {
    console.log("Testing model 'gemini-2.5-flash'...");
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      const result = await model.generateContent("Respond with the word 'Success'.");
      console.log("gemini-2.5-flash response:", result.response.text());
      return;
    } catch (e) {
      console.log("gemini-2.5-flash failed:", e.message);
    }

    console.log("Testing model 'gemini-2.0-flash'...");
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const result = await model.generateContent("Respond with the word 'Success'.");
      console.log("gemini-2.0-flash response:", result.response.text());
      return;
    } catch (e) {
      console.log("gemini-2.0-flash failed:", e.message);
    }

    console.log("Testing model 'gemini-1.5-flash-latest'...");
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
      const result = await model.generateContent("Respond with the word 'Success'.");
      console.log("gemini-1.5-flash-latest response:", result.response.text());
      return;
    } catch (e) {
      console.log("gemini-1.5-flash-latest failed:", e.message);
    }
  } catch (err) {
    console.error("General error:", err);
  }
}

test();
