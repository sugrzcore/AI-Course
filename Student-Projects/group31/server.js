// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // THIS IS IMPORTANT

const PORT = process.env.PORT || 3000;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/ask", async (req, res) => {
  try {
    const { question, model } = req.body;

    if (!question || question.trim().length === 0) {
      return res.status(400).json({ error: "No question provided" });
    }

    const chosenModel = model || "gpt-4o-mini"; // default model

    const response = await client.chat.completions.create({
      model: chosenModel,
      messages: [
        {
          role: "system",
          content: "You are a friendly university chatbot. Answer concisely and helpfully."
        },
        { role: "user", content: question }
      ],
      max_tokens: 400
    });

    const answer = response.choices?.[0]?.message?.content || "No answer returned.";
    res.json({ answer });

  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ answer: "Error contacting AI. Check server logs." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
