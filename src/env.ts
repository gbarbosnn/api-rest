import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["dev", "prod"]).default("dev"),
	DATABASE_URL: z.string(),
	PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error(_env.error.flatten().fieldErrors);

	throw new Error("⚠️ Invalid environment variables!");
}

export const env = _env.data;
