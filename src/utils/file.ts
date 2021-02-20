import path from "path";
import fs from "fs/promises";

export const readEvents = async (): Promise<string | null> => {
  try {
    const file = await fs.readFile(
      path.join(__dirname, "..", "..", "resources", "events.json"),
      { encoding: "utf-8" }
    );
    if (file) {
      return JSON.parse(file);
    } else {
      throw new Error("No file was found");
    }
  } catch (error) {
    throw error;
  }
};
