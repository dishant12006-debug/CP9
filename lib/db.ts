import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  created_at?: string;
}

// Add a contact submission
export async function addContact(submission: Omit<ContactSubmission, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([submission])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as ContactSubmission;
}

// Add a newsletter subscriber (duplicate-safe)
export async function addNewsletter(email: string): Promise<{ success: boolean; alreadyExists: boolean }> {
  const normalizedEmail = email.toLowerCase().trim();

  // Check if already subscribed
  const { data: existing } = await supabase
    .from('newsletter')
    .select('email')
    .eq('email', normalizedEmail)
    .single();

  if (existing) {
    return { success: false, alreadyExists: true };
  }

  const { error } = await supabase
    .from('newsletter')
    .insert([{ email: normalizedEmail }]);

  if (error) throw new Error(error.message);
  return { success: true, alreadyExists: false };
}

// Read all contacts (for admin)
export async function getAllContacts(): Promise<ContactSubmission[]> {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data as ContactSubmission[];
}

// Read all newsletter subscribers (for admin)
export async function getAllNewsletter(): Promise<NewsletterSubscriber[]> {
  const { data, error } = await supabase
    .from('newsletter')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data as NewsletterSubscriber[];
}
