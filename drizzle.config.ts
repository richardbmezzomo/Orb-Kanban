import { env } from "@/config/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infra/db/drizzle/schema/**",
  out: ".src/infra/db/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  casing: "snake_case",
});
