import Express, { Request, Response } from "express";
import { apiRouter } from "./routes";

const app = Express();
const PORT = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
