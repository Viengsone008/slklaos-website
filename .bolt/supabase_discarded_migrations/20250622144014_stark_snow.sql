/*
  # Add public insert policy for newsletter subscribers
  
  1. Security
    - Add policy to allow public users to subscribe to the newsletter
    - This allows anonymous users to insert new subscribers without authentication
*/

-- Allow public users to subscribe to the newsletter
CREATE POLICY "Public can subscribe" 
  ON public.newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);