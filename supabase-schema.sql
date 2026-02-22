-- Run this SQL in your Supabase project:
-- Dashboard → SQL Editor → New Query → paste & run

CREATE TABLE IF NOT EXISTS leads (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      timestamptz DEFAULT now() NOT NULL,
  name            text NOT NULL,
  email           text NOT NULL,
  company         text,
  message         text NOT NULL,
  category        text,
  lead_score      integer,
  lead_score_rationale text,
  brief_subject   text
);

-- Index for fast sorting by date
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- Optional: restrict access so only service_role key can insert
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access"
  ON leads FOR ALL
  USING (true)
  WITH CHECK (true);
