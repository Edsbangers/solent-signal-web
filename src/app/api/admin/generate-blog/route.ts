import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(req: NextRequest) {
  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const { topic, keywords, tone, wordCount } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required." },
        { status: 400 }
      );
    }

    const systemPrompt = `You are a GEO-optimised content writer for Solent Signal, a Portsmouth-based digital authority agency specialising in AI search visibility.

Write blog posts that are:
- Optimised for Generative Engine Optimisation (GEO) — structured for AI citation
- Written in UK English with a ${tone || "professional"} tone
- Rich in E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
- Locally relevant to Portsmouth, Solent, and Hampshire businesses
- Authored by Jason Misters, IRCA Registered Principal Auditor and founder of Solent Signal

OUTPUT FORMAT — respond with ONLY a raw JSON object (no markdown, no code fences):
{
  "title": "<SEO-optimised blog title>",
  "content": "<full blog post in HTML format with <h2>, <h3>, <p>, <ul>, <strong> tags — do NOT include <html>, <head>, or <body> wrappers>",
  "excerpt": "<2-3 sentence summary for meta description, max 160 characters>",
  "socialSnippet": "<engaging social media caption with relevant hashtags, max 280 characters>"
}`;

    const userMessage = `Write a blog post about: ${topic}
${keywords ? `Target keywords: ${keywords}` : ""}
Target word count: approximately ${wordCount || 800} words.`;

    const llmResponse = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [{ role: "user", content: userMessage }],
      system: systemPrompt,
    });

    const rawText =
      llmResponse.content[0].type === "text"
        ? llmResponse.content[0].text
        : "";

    let parsed: {
      title: string;
      content: string;
      excerpt: string;
      socialSnippet: string;
    };

    try {
      parsed = JSON.parse(rawText);
    } catch {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("LLM did not return valid JSON.");
      parsed = JSON.parse(jsonMatch[0]);
    }

    return NextResponse.json(parsed);
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("/api/admin/generate-blog error:", detail);
    return NextResponse.json(
      { error: "Blog generation failed.", detail },
      { status: 500 }
    );
  }
}
