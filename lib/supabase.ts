import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
        };
      };
      analysis_history: {
        Row: {
          id: string;
          user_id: string;
          general_impression: string | null;
          characteristics: any;
          routine: any;
          products: any;
          wellness_tips: any;
          photo_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          general_impression?: string | null;
          characteristics?: any;
          routine?: any;
          products?: any;
          wellness_tips?: any;
          photo_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          general_impression?: string | null;
          characteristics?: any;
          routine?: any;
          products?: any;
          wellness_tips?: any;
          photo_url?: string | null;
          created_at?: string;
        };
      };
    };
  };
};