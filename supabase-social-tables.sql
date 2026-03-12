-- Social Media Engine tables for Solent Signal
-- Run this in Supabase SQL Editor

-- Social posts queue (tracks all social media activity)
CREATE TABLE IF NOT EXISTS social_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID REFERENCES blog_posts(id),
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'facebook', 'instagram', 'x')),
  content TEXT NOT NULL,
  link_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'queued', 'posted', 'failed')),
  post_url TEXT,
  post_id TEXT,
  error TEXT,
  brand TEXT DEFAULT 'solent-signal',
  scheduled_for TIMESTAMPTZ,
  posted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social tokens (OAuth access tokens per platform)
CREATE TABLE IF NOT EXISTS social_tokens (
  platform TEXT PRIMARY KEY,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMPTZ,
  scope TEXT,
  user_id TEXT,
  user_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for social posts queue queries
CREATE INDEX IF NOT EXISTS idx_social_posts_status ON social_posts(status);
CREATE INDEX IF NOT EXISTS idx_social_posts_platform ON social_posts(platform);
CREATE INDEX IF NOT EXISTS idx_social_posts_brand ON social_posts(brand);
