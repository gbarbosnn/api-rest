import fastify from "fastify";
import { env } from "./env";

const server = fastify();

server.get("/hello", async () => {
	console.log("Hello");
});

const start = async () => {
	try {
		server.listen({ port: env.PORT });
		console.log("HTTP Server Running!");
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

start();
