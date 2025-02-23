import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateScamQuestions(scamType) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `Generate 5 different ${scamType} scenarios that could be used in a phishing awareness test. 
    Format as a plain JSON array with fields: question, options (array of 4 choices), correctAnswer (index 0-3), explanation.
    Make scenarios realistic but with subtle red flags. Include both obvious and tricky cases. Do NOT include Markdown formatting or code blocks (e.g., no \`\`\`json).`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let responseText = response.text();
    // Remove potential Markdown JSON formatting
    responseText = responseText.replace(/```json|```/g, "").trim();

    return JSON.parse(response.text());
  } catch (error) {
    console.error('Error generating questions:', error);
    return null;
  }
}

// FEEDBACK
export async function getPersonalizedFeedback(scamType, userAnswers, correctAnswers) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Analyze this user's performance on ${scamType} phishing test.
    They got ${userAnswers.filter((a, i) => a === correctAnswers[i]).length} out of ${userAnswers.length} correct.
    Give personalized cybersecurity advice based on their mistakes.
    Be encouraging but point out specific red flags they missed.
    Keep response under 150 words and use a friendly, mentor-like tone.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating feedback:', error);
    return "Sorry, I couldn't generate personalized feedback at this time.";
  }
}
