import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    // 🔴 HARD REQUIRED FIELDS (Step 1)
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.company ||
      !data.budget ||
      !data.plan
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Normalize payload for Sheets
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      budget: data.budget,
      plan: data.plan,

      // Step 2 (optional but useful)
      role: data.role || "",
      stage: data.stage || "",
      services: Array.isArray(data.services)
        ? data.services.join(", ")
        : "",
      description: data.description || "",

      submittedAt: new Date().toISOString(),
    };

    // 🔗 Forward to Google Apps Script
    const response = await fetch(process.env.GS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    console.log("Google Script response:", text);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to write to Google Sheet" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
