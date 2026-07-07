import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";

import connectDB from "./config/db.js";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

await connectDB();

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

server.applyMiddleware({
  app,
  path: "/graphql",
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("🚀 Blog GraphQL API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL Endpoint: http://localhost:${PORT}/graphql`);
});