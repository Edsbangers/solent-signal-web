// SignalPost API client — Solent Signal → SignalPost central hub
const SP_URL =
  process.env.SIGNALPOST_API_URL || "https://signalpost-api.vercel.app";
const SP_KEY = process.env.SIGNALPOST_API_KEY || "";

function headers() {
  return {
    Authorization: `Bearer ${SP_KEY}`,
    "Content-Type": "application/json",
  };
}

export async function spPublish(
  platform: string,
  content: string,
  linkUrl?: string,
  source?: string
) {
  const res = await fetch(`${SP_URL}/api/publish`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ platform, content, linkUrl, source }),
  });
  return res.json();
}

export async function spGetPosts() {
  const res = await fetch(`${SP_URL}/api/posts`, {
    headers: headers(),
  });
  return res.json();
}

export async function spGetPlatforms() {
  const res = await fetch(`${SP_URL}/api/platforms`, {
    headers: headers(),
  });
  return res.json();
}

export async function spGenerate(
  prompt: string,
  platforms: string[],
  tone?: string
) {
  const res = await fetch(`${SP_URL}/api/generate`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ prompt, platforms, tone }),
  });
  return res.json();
}
