import fastify from "fastify";
import { knex } from "./database";

const server = fastify();

server.get("/hello", async () => {
  const tables = await knex("sqlite_schema").select("*");
  return tables;
});

const start = async () => {
  try {
    await server.listen({ port: 3333 });
    console.log("Server is running on port 3333");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
