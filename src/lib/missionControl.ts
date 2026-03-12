// Mission Control integration — Solent Signal → AIOS
const MC_URL =
  process.env.MISSION_CONTROL_URL ||
  "https://mission-control-jet-omega.vercel.app";

export async function createMCTask(
  title: string,
  agent: string,
  skillId?: string,
  priority: string = "medium",
  notes?: string
) {
  try {
    const res = await fetch(`${MC_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        agent,
        skill_id: skillId || null,
        priority,
        status: "todo",
        notes: notes || null,
      }),
    });
    if (!res.ok) {
      console.error("MC task creation failed:", await res.text());
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error("MC task creation error:", err);
    return null;
  }
}

export async function notifyMC(
  agentId: string,
  eventType: string,
  title: string,
  data?: Record<string, unknown>
) {
  try {
    const res = await fetch(`${MC_URL}/api/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NOTIFY_API_KEY || ""}`,
      },
      body: JSON.stringify({
        agent_id: agentId,
        event_type: eventType,
        title,
        data: data || {},
        notify: true,
      }),
    });
    if (!res.ok) {
      console.error("MC notify failed:", await res.text());
    }
  } catch (err) {
    console.error("MC notify error:", err);
  }
}
