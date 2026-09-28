// lib/db.ts
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

// 只能在伺服器端匯入,不要在 "use client" 的元件裡 import 這個檔案
export const sql = neon(databaseUrl);