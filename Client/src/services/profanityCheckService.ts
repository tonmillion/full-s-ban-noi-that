import axios from "axios";

export const checkProfanityWithHuggingFace = async (
  text: string
): Promise<boolean> => {
  try {
    const response = await axios.post(
      "/api/profanity-check",
      { text }
    );

    return response.data.isToxic;
  } catch (error) {
    console.error("Error checking profanity with backend:", error);
    return false;
  }
};