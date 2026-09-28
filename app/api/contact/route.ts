// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { validateContact, type ContactInput } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  // 蜜罐欄位:真人看不到也不會填,機器人會填。假裝成功但不寫入。
  if (typeof raw.website === "string" && raw.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const input: ContactInput = {
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    subject: typeof raw.subject === "string" ? raw.subject : "",
    message: typeof raw.message === "string" ? raw.message : "",
  };

  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  try {
    // 參數化查詢:值是分開傳給資料庫的,不會被當成 SQL 執行
    await sql`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (${input.name.trim()}, ${input.email.trim()}, ${input.subject.trim()}, ${input.message.trim()})
    `;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    // 詳細錯誤只寫在伺服器 log,不回傳給訪客
    console.error("Failed to save contact:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}