/*
  # Add Newsletter Subscribers Table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamp)
      - `status` (text)
      - `source` (text)
      - `preferences` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for authenticated users to read subscribers
    - Add policy for system to insert subscribers
*/

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'active',
  source text,
  preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add status check constraint
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'newsletter_subscribers_status_check'
  ) THEN
    ALTER TABLE newsletter_subscribers 
    ADD CONSTRAINT newsletter_subscribers_status_check 
    CHECK (status = ANY (ARRAY['active'::text, 'unsubscribed'::text, 'bounced'::text, 'complained'::text]));
  END IF;
END $$;

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Authorized users can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE ((users.id)::text = (uid())::text) 
      AND (users.role = ANY (ARRAY['admin'::text, 'manager'::text]))
    )
  );

CREATE POLICY "System can insert subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create index on email
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);