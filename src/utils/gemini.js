import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SCAM_PROMPTS = {
  'login scam': `Generate 5 different login security scenarios focusing on:
    - Suspicious URLs and domain names
    - SSL certificate warnings
    - Unusual form fields or requests
    - Browser security indicators
    - Login page inconsistencies
    Format as a plain JSON array with fields: question, options (array of 4 choices), correctAnswer (index 0-3), explanation.
    Make scenarios realistic but with subtle red flags. Include both obvious and tricky cases.`,
    
  'email': `Generate 5 different email phishing scenarios focusing on:
    - Urgency and threat tactics
    - Suspicious sender addresses
    - Grammar and spelling errors
    - Unusual requests or attachments
    - Mismatched links vs display text
    Format as a plain JSON array with fields: question, options (array of 4 choices), correctAnswer (index 0-3), explanation.
    Make scenarios realistic but with subtle red flags. Include both obvious and tricky cases.`,
    
  'customer support scam': `Generate 5 different customer support scam scenarios focusing on:
    - Unsolicited support contacts
    - Requests for personal information
    - Unusual verification methods
    - Remote access requests
    - Payment or gift card requests
    Format as a plain JSON array with fields: question, options (array of 4 choices), correctAnswer (index 0-3), explanation.
    Make scenarios realistic but with subtle red flags. Include both obvious and tricky cases.`,
    
  'giveaway scam': `Generate 5 different giveaway scam scenarios focusing on:
    - Too-good-to-be-true offers
    - Urgency and limited time tactics
    - Required upfront payments or fees
    - Personal information requirements
    - Unusual claim processes
    Format as a plain JSON array with fields: question, options (array of 4 choices), correctAnswer (index 0-3), explanation.
    Make scenarios realistic but with subtle red flags. Include both obvious and tricky cases.`
};

export async function generateScamQuestions(scamType) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(SCAM_PROMPTS[scamType]);
    const response = await result.response;
    let responseText = response.text();
    // Remove potential Markdown JSON formatting
    responseText = responseText.replace(/```json|```/g, "").trim();

    return JSON.parse(responseText);
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
