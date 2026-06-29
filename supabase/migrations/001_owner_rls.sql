-- ─────────────────────────────────────────────────────────────
-- Owner RLS — run this once in the Supabase SQL editor
-- ─────────────────────────────────────────────────────────────

-- 1. Add owner_id to properties (links each property to a Supabase auth user)
alter table properties
  add column if not exists owner_id uuid references auth.users(id);

-- 2. Populate owner_id for existing rows if you have a known user ID:
-- update properties set owner_id = '<your-user-uuid-here>';

-- 3. Enable Row Level Security on all three tables
alter table properties      enable row level security;
alter table bookings        enable row level security;
alter table monthly_revenue enable row level security;

-- 4. Properties: each authenticated user sees only their own properties
create policy "owner_select_properties"
  on properties
  for select
  using (owner_id = auth.uid());

-- 5. Bookings: owner sees bookings whose property belongs to them
create policy "owner_select_bookings"
  on bookings
  for select
  using (
    property_id in (
      select id from properties where owner_id = auth.uid()
    )
  );

-- 6. Monthly revenue: same — owner sees only their properties' rows
create policy "owner_select_monthly_revenue"
  on monthly_revenue
  for select
  using (
    property_id in (
      select id from properties where owner_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────────────────────────
-- After running this:
-- • Open the Supabase Table Editor, find the properties table,
--   and set owner_id for each existing property to the correct
--   user UUID (found in Authentication > Users in the dashboard).
-- • New properties added via the app should always include owner_id.
-- ─────────────────────────────────────────────────────────────
