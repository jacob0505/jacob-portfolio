// scripts/setup-db.mjs
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is missing in .env.local");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

await sql`
  CREATE TABLE IF NOT EXISTS contacts (
    id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name       VARCHAR(100)  NOT NULL,
    email      VARCHAR(254)  NOT NULL,
    subject    VARCHAR(150)  NOT NULL,
    message    TEXT          NOT NULL,
    created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
  )
`;

console.log("contacts table is ready.");