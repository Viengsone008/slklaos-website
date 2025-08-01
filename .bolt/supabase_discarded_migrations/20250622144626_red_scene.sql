/*
  # Add public insert policy for newsletter subscribers
  
  1. Security
    - Enable RLS on newsletter_subscribers table if not already enabled
    - Add policy for public users to insert new subscribers
    - This allows website visitors to subscribe without authentication
  
  2. Changes
    - Adds "Public can subscribe" policy to newsletter_subscribers table
*/

-- First ensure RLS is enabled
ALTER TABLE IF EXISTS public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public users to subscribe
CREATE POLICY "Public can subscribe" 
  ON public.newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);