import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file and ensure the development server is restarted.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add error handling for connection issues
supabase.from('fishing_trips').select('*').limit(1)
  .then(({ error }) => {
    if (error) {
      console.error('Supabase connection test failed:', error.message);
    } else {
      console.log('Supabase connection test successful');
    }
  })
  .catch(err => {
    console.error('Failed to connect to Supabase:', err.message);
  });