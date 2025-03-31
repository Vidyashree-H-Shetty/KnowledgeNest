import { openai } from "../lib/openai.js";

// Generate AI-based Quiz
export const generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty } = req.body; // Get topic & difficulty from frontend

    const prompt = `Generate a ${difficulty} level quiz on ${topic}. 
    Provide 5 multiple-choice questions with 4 options each, and indicate the correct answer. 
    Format: JSON array of { question, options, answer }.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const quizQuestions = JSON.parse(response.choices[0].message.content);

    res.json({ success: true, quiz: quizQuestions });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ success: false, message: "Failed to generate quiz" });
  }
};

// Evaluate Quiz Answers
export const evaluateQuiz = async (req, res) => {
  try {
    const { userAnswers, quiz } = req.body;
    let score = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === quiz[index].answer) score++;
    });

    res.json({ success: true, score });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to evaluate quiz" });
  }
};
