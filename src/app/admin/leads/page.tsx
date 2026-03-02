import { createClient } from "@supabase/supabase-js";

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  category: string | null;
  lead_score: number | null;
  lead_score_rationale: string | null;
  brief_subject: string | null;
}

function scoreColour(score: number | null) {
  if (!score) return "#475569";
  if (score >= 8) return "#22c55e";
  if (score >= 5) return "#f59e0b";
  return "#ef4444";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminLeadsPage() {

  // ── Fetch leads from Supabase ───────────────────────────────────────────────
  let leads: Lead[] = [];
  let fetchError = "";

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);

    if (error) fetchError = error.message;
    else leads = data ?? [];
  } catch (e) {
    fetchError = e instanceof Error ? e.message : "Unknown error";
  }

  // ── Stats ───────────────────────────────────────────────────────────────────
  const avgScore = leads.length
    ? Math.round(leads.reduce((s, l) => s + (l.lead_score ?? 0), 0) / leads.length * 10) / 10
    : 0;

  const categoryCounts = leads.reduce<Record<string, number>>((acc, l) => {
    const c = l.category ?? "Unknown";
    acc[c] = (acc[c] ?? 0) + 1;
    return acc;
  }, {});

  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";

  const hotLeads = leads.filter((l) => (l.lead_score ?? 0) >= 8).length;

  return (
    <main style={{ minHeight: "100vh", background: "#0a0f1e", padding: "32px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Admin nav */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: "8px",
              background: "rgba(6,182,212,0.1)",
              color: "#06b6d4",
              border: "1px solid rgba(6,182,212,0.25)",
            }}
          >
            Leads
          </span>
          <a
            href="/admin/blog"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.03)",
              color: "#94a3b8",
              border: "1px solid #1e293b",
              textDecoration: "none",
            }}
          >
            Blog Generator
          </a>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "24px" }}>🔦</span>
            <h1 style={{ color: "#fff", fontSize: "24px", fontWeight: 800, margin: 0 }}>
              Beacon Lead Dashboard
            </h1>
          </div>
          <p style={{ color: "#475569", fontSize: "13px", margin: 0 }}>
            Solent Signal · Internal use only · {leads.length} leads total
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { label: "Total Leads", value: leads.length, colour: "#06b6d4" },
            { label: "Hot Leads (8+)", value: hotLeads, colour: "#22c55e" },
            { label: "Avg Lead Score", value: `${avgScore}/10`, colour: "#f59e0b" },
            { label: "Top Category", value: topCategory, colour: "#a78bfa" },
          ].map(({ label, value, colour }) => (
            <div
              key={label}
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                {label}
              </div>
              <div style={{ color: colour, fontSize: "26px", fontWeight: 800 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Analytics links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "32px" }}>
          {[
            {
              label: "Google Analytics",
              description: "Traffic, sessions & conversions",
              href: "https://analytics.google.com",
              colour: "#f59e0b",
              icon: "📊",
            },
            {
              label: "Vercel Analytics",
              description: "Page views & web vitals",
              href: "https://vercel.com/dashboard",
              colour: "#06b6d4",
              icon: "⚡",
            },
            {
              label: "Vercel Speed Insights",
              description: "Core Web Vitals & performance",
              href: "https://vercel.com/dashboard",
              colour: "#a78bfa",
              icon: "🚀",
            },
          ].map(({ label, description, href, colour, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(13,20,36,0.8)",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                padding: "16px 20px",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "16px" }}>{icon}</span>
                <span style={{ color: colour, fontSize: "13px", fontWeight: 700 }}>{label}</span>
                <span style={{ color: "#475569", fontSize: "11px", marginLeft: "auto" }}>↗</span>
              </div>
              <div style={{ color: "#475569", fontSize: "11px" }}>{description}</div>
            </a>
          ))}
        </div>

        {/* Error state */}
        {fetchError && (
          <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "10px", padding: "16px", color: "#fca5a5", marginBottom: "24px", fontSize: "14px" }}>
            ⚠ Supabase error: {fetchError}
          </div>
        )}

        {/* Leads table */}
        {leads.length === 0 && !fetchError ? (
          <div style={{ textAlign: "center", color: "#475569", padding: "64px 0" }}>
            No leads yet. Submissions from The Beacon form will appear here.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {leads.map((lead) => (
              <div
                key={lead.id}
                style={{
                  background: "rgba(13,20,36,0.8)",
                  border: "1px solid #1e293b",
                  borderRadius: "14px",
                  padding: "20px 24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                  {/* Left: contact info */}
                  <div style={{ flex: "1", minWidth: "220px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{lead.name}</span>
                      {lead.lead_score !== null && (
                        <span style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "2px 10px",
                          borderRadius: "999px",
                          background: `${scoreColour(lead.lead_score)}18`,
                          color: scoreColour(lead.lead_score),
                          border: `1px solid ${scoreColour(lead.lead_score)}40`,
                        }}>
                          {lead.lead_score}/10
                        </span>
                      )}
                    </div>
                    <a href={`mailto:${lead.email}`} style={{ color: "#06b6d4", fontSize: "13px", textDecoration: "none" }}>
                      {lead.email}
                    </a>
                    {lead.company && (
                      <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>{lead.company}</div>
                    )}
                  </div>

                  {/* Right: meta */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    {lead.category && (
                      <div style={{
                        display: "inline-block",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "6px",
                        background: "rgba(167,139,250,0.1)",
                        color: "#a78bfa",
                        border: "1px solid rgba(167,139,250,0.2)",
                        marginBottom: "6px",
                      }}>
                        {lead.category}
                      </div>
                    )}
                    <div style={{ color: "#475569", fontSize: "11px" }}>{formatDate(lead.created_at)}</div>
                  </div>
                </div>

                {/* Message */}
                <div style={{
                  marginTop: "14px",
                  paddingTop: "14px",
                  borderTop: "1px solid #1e293b",
                  color: "#94a3b8",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}>
                  {lead.message.length > 280 ? lead.message.slice(0, 280) + "…" : lead.message}
                </div>

                {/* Rationale + brief subject */}
                {(lead.lead_score_rationale || lead.brief_subject) && (
                  <div style={{ marginTop: "10px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {lead.lead_score_rationale && (
                      <div style={{ fontSize: "11px", color: "#475569", fontStyle: "italic" }}>
                        💡 {lead.lead_score_rationale}
                      </div>
                    )}
                  </div>
                )}

                {/* Reply button */}
                <div style={{ marginTop: "12px" }}>
                  <a
                    href={`mailto:${lead.email}?subject=Re: ${encodeURIComponent(lead.brief_subject ?? "Your Solent Signal Enquiry")}`}
                    style={{
                      display: "inline-block",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: "8px",
                      background: "rgba(6,182,212,0.08)",
                      color: "#06b6d4",
                      border: "1px solid rgba(6,182,212,0.2)",
                      textDecoration: "none",
                    }}
                  >
                    Reply →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "32px", textAlign: "center", fontSize: "11px", color: "#1e293b" }}>
          Solent Signal Admin · {new Date().getFullYear()}
        </div>
      </div>
    </main>
  );
}
