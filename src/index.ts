import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Express, { Request, Response } from "express";
import helmet from "helmet";
import "reflect-metadata";
import * as tq from "type-graphql";
import { resolvers } from "./generated/typegraphql-prisma";
import { apiRouter } from "./routes";
import { createContext } from "./utils/createContext";

const startApp = async () => {
  try {
    /**
     * Main Express configuration
     */
    const app = Express();
    const PORT = process.env.PORT || "4000";
    app.use(cors());
    app.use(helmet());

    /**
     * GraphQL
     */
    const schema = await tq.buildSchema({
      resolvers,
      validate: false,
    });
    const server = new ApolloServer({ schema, context: createContext });
    server.applyMiddleware({ app });

    /**
     * Express routes
     */
    app.get("/", (req: Request, res: Response) => {
      res.send("OK");
    });
    app.use("/api", apiRouter);

    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("ERROR INITIALIZING SERVER", error);
  }
};

startApp();
