// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lhmcvybbtatuakklgwbz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobWN2eWJidGF0dWFra2xnd2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMDM0MjMsImV4cCI6MjA3MTc3OTQyM30.UPNmcSSXEAQ8wk4oVXzZ801qFLY1Ew_RZ96fI0itKtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
