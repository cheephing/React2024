import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qrujuujtujqtrcnowzrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydWp1dWp0dWpxdHJjbm93enJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxNDAxNDQsImV4cCI6MjAxNzcxNjE0NH0.D5szoLPCu_ko5EpH3VM0USYuNTTapS1FjJreveiNFz8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
