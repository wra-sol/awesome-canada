-- awesome-canada likes — D1 schema
--
-- likes: append-only event log. One row per accepted like. Powers the
-- rolling hour/day/month windows (COUNT over created_at).
-- liked_resources: dimension table keyed by resource hash. Maintains the
-- all-time counter (bumped on every like) and stores the exact catalog URL
-- so /api/likes/all and /top can return strings the client can match
-- directly against resources.json entries.

CREATE TABLE IF NOT EXISTS likes (
  resource_hash TEXT NOT NULL,
  visitor_hash  TEXT NOT NULL,
  created_at    INTEGER NOT NULL,
  PRIMARY KEY (resource_hash, visitor_hash, created_at)
);

CREATE INDEX IF NOT EXISTS idx_likes_time ON likes (created_at);
CREATE INDEX IF NOT EXISTS idx_likes_visitor_time ON likes (visitor_hash, created_at);

CREATE TABLE IF NOT EXISTS liked_resources (
  resource_hash  TEXT PRIMARY KEY,
  url            TEXT NOT NULL,
  total          INTEGER NOT NULL DEFAULT 0,
  first_liked_at INTEGER NOT NULL
);
