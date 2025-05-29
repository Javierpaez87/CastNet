import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://castnet-8a81c.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhc3RuZXQtOGE4MWMiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwNzE2NTQ0MCwiZXhwIjoyMDIyNzQxNDQwfQ.example';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);