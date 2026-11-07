import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Browser-safe Supabase client. Uses only NEXT_PUBLIC_ variables, so no
// secret ever reaches the browser. Returns null when env vars are missing,
// so the storefront falls back to the local catalog in lib/products.ts.
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}

export const SUPABASE_URL = "https://cjatliwegffjsbyanbjk.supabase.co";
