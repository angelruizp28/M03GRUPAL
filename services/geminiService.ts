
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const apiKey = process.env.API_KEY;

if (!apiKey) {
    console.warn("API key for Gemini not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const generatePostCaption = async (prompt: string): Promise<string> => {
    if (!apiKey) {
        return "Gemini API key not configured. Using placeholder caption.";
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a cool, engaging, and short social media caption for a photo described as: "${prompt}". Include 2-3 relevant hashtags. Keep it concise and under 280 characters.`,
            config: {
                temperature: 0.7,
                topP: 0.9,
            }
        });

        const text = response.text.trim();
        return text;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate caption from Gemini API.");
    }
};
