import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

// Clients are instantiated inside the handler so env vars are read at runtime,
// not at build time (which would throw on Vercel with no keys configured yet).
const JASON_EMAIL = "hello@solentsignal.com";
const FROM_DOMAIN = "hello@solentsignal.com";

export async function POST(req: NextRequest) {
  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const resend = new Resend(process.env.Re_Send_Key);

    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email, and message are required." },
        { status: 400 }
      );
    }

    // ── 1. LLM: generate brief + client response ─────────────────────────────
    const systemPrompt = `You are The Beacon — the AI Lead Intelligence Agent for Solent Signal, a specialist GEO (Generative Engine Optimisation) and AI agentic solutions agency based in Portsmouth, UK.

Jason Misters (the founder) is an IRCA Registered Principal Auditor with expertise in ISO 42001 (AI Management Systems), ISO 27001, and has built PICMS — a production SaaS platform for compliance professionals operating across five countries. He approaches every engagement with audit rigour, not just developer enthusiasm.

Your role: analyse the incoming lead's message and produce two structured outputs in valid JSON.

OUTPUT FORMAT — respond with ONLY a raw JSON object (no markdown, no code fences):
{
  "category": "<one of: Agentic Web | Workflow Automation | ISO 42001 Compliance | GEO Website | Mixed>",
  "lead_score": <integer 1–10>,
  "lead_score_rationale": "<one sentence>",
  "brief": {
    "subject": "<email subject for Jason>",
    "body": "<full HTML email body for Jason — structured like a professional audit report. Include: Executive Summary, Client Profile, Identified Business Needs, Recommended Service(s), Suggested Discovery Questions, Risk / Opportunity Assessment, Suggested Next Action>"
  },
  "client_response": {
    "subject": "<email subject for the client>",
    "body": "<full HTML email body in UK English for the client — warm, professional, specific to their message. Sign off as 'The Beacon, Solent Signal'. Confirm Jason will review a personalised brief and be in touch within one business day. Do NOT make specific pricing promises.>"
  }
}`;

    const userMessage = `New enquiry received:

Name: ${name}
Email: ${email}
Company / Business: ${company || "Not provided"}
Message: ${message}`;

    const llmResponse = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2048,
      messages: [{ role: "user", content: userMessage }],
      system: systemPrompt,
    });

    const rawText =
      llmResponse.content[0].type === "text"
        ? llmResponse.content[0].text
        : "";

    let parsed: {
      category: string;
      lead_score: number;
      lead_score_rationale: string;
      brief: { subject: string; body: string };
      client_response: { subject: string; body: string };
    };

    try {
      parsed = JSON.parse(rawText);
    } catch {
      // Attempt to extract JSON from within the response
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("LLM did not return valid JSON.");
      parsed = JSON.parse(jsonMatch[0]);
    }

    // ── 2. Email Jason: Lead brief ────────────────────────────────────────────
    const scoreColour =
      parsed.lead_score >= 8
        ? "#22c55e"
        : parsed.lead_score >= 5
        ? "#f59e0b"
        : "#ef4444";

    const jasonEmailBody = `
<!DOCTYPE html>
<html lang="en-GB">
<head><meta charset="UTF-8"><style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0a0f1e; color:#e2e8f0; margin:0; padding:0; }
  .wrapper { max-width:680px; margin:0 auto; padding:32px 24px; }
  .header { background:linear-gradient(135deg,#0891b2,#06b6d4); border-radius:12px; padding:24px 28px; margin-bottom:24px; }
  .header h1 { color:#fff; margin:0 0 4px; font-size:22px; }
  .header p { color:rgba(255,255,255,0.75); margin:0; font-size:13px; }
  .score-badge { display:inline-block; background:${scoreColour}22; border:1px solid ${scoreColour}; color:${scoreColour}; border-radius:999px; padding:4px 14px; font-size:13px; font-weight:700; margin-bottom:20px; }
  .meta { background:#111827; border:1px solid #1e293b; border-radius:10px; padding:16px 20px; margin-bottom:20px; font-size:13px; }
  .meta tr td:first-child { color:#94a3b8; padding-right:16px; white-space:nowrap; vertical-align:top; padding-bottom:6px; }
  .meta tr td:last-child { color:#f1f5f9; font-weight:500; }
  .brief { color:#94a3b8; font-size:14px; line-height:1.7; }
  .brief h2 { color:#e2e8f0; font-size:15px; margin:20px 0 6px; border-left:3px solid #06b6d4; padding-left:10px; }
  .footer { margin-top:32px; font-size:11px; color:#334155; text-align:center; }
</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>🔦 New Signal — The Beacon</h1>
    <p>Agentic Lead Intelligence Report · Solent Signal</p>
  </div>
  <div class="score-badge">Lead Score: ${parsed.lead_score}/10 — ${parsed.lead_score_rationale}</div>
  <div class="meta">
    <table cellpadding="0" cellspacing="0" style="width:100%">
      <tr><td>Name</td><td>${name}</td></tr>
      <tr><td>Email</td><td><a href="mailto:${email}" style="color:#06b6d4">${email}</a></td></tr>
      <tr><td>Company</td><td>${company || "—"}</td></tr>
      <tr><td>Category</td><td>${parsed.category}</td></tr>
    </table>
  </div>
  <div class="brief">
    ${parsed.brief.body}
  </div>
  <div class="footer">Generated by The Beacon · Solent Signal · solentsignal.com</div>
</div>
</body>
</html>`;

    // ── 3. Email Client: personalised acknowledgement ─────────────────────────
    const clientEmailBody = `
<!DOCTYPE html>
<html lang="en-GB">
<head><meta charset="UTF-8"><style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#0a0f1e; color:#e2e8f0; margin:0; padding:0; }
  .wrapper { max-width:600px; margin:0 auto; padding:32px 24px; }
  .header { background:linear-gradient(135deg,#0891b2,#06b6d4); border-radius:12px; padding:24px 28px; margin-bottom:24px; }
  .header h1 { color:#fff; margin:0 0 4px; font-size:20px; }
  .header p { color:rgba(255,255,255,0.75); margin:0; font-size:12px; }
  .body-text { color:#94a3b8; font-size:14px; line-height:1.75; }
  .body-text a { color:#06b6d4; }
  .footer { margin-top:32px; font-size:11px; color:#334155; text-align:center; border-top:1px solid #1e293b; padding-top:16px; }
</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <h1>🔦 Signal Received</h1>
    <p>Solent Signal · Portsmouth, Hampshire</p>
  </div>
  <div class="body-text">
    ${parsed.client_response.body}
  </div>
  <div class="footer">
    Solent Signal · hello@solentsignal.com · solentsignal.com<br>
    Portsmouth, Hampshire, UK · © 2026
  </div>
</div>
</body>
</html>`;

    const [jasonResult, clientResult] = await Promise.all([
      resend.emails.send({
        from: `The Beacon <${FROM_DOMAIN}>`,
        to: [JASON_EMAIL],
        subject: `🔦 ${parsed.brief.subject} [Score: ${parsed.lead_score}/10]`,
        html: jasonEmailBody,
      }),
      resend.emails.send({
        from: `The Beacon — Solent Signal <${FROM_DOMAIN}>`,
        to: [email],
        replyTo: JASON_EMAIL,
        subject: parsed.client_response.subject,
        html: clientEmailBody,
      }),
    ]);

    if (jasonResult.error || clientResult.error) {
      const detail = JSON.stringify({ jason: jasonResult.error, client: clientResult.error });
      console.error("Resend errors:", detail);
      return NextResponse.json(
        { error: "Email delivery failed.", detail },
        { status: 500 }
      );
    }

    // ── 4. Save lead to Supabase ──────────────────────────────────────────────
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
      await supabase.from("leads").insert({
        name,
        email,
        company: company || null,
        message,
        category: parsed.category,
        lead_score: parsed.lead_score,
        lead_score_rationale: parsed.lead_score_rationale,
        brief_subject: parsed.brief.subject,
      });
    } catch (dbErr) {
      // Non-fatal: emails already sent, just log the DB error
      console.error("Supabase insert error:", dbErr);
    }

    return NextResponse.json({
      success: true,
      category: parsed.category,
      lead_score: parsed.lead_score,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("/api/beacon error:", detail);
    return NextResponse.json(
      { error: "Internal server error.", detail },
      { status: 500 }
    );
  }
}
