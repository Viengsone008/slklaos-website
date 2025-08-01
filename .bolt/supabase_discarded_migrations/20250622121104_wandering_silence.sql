/*
  # Fix RLS policies for users table

  1. Security
    - Drop existing problematic policies
    - Create new policies that avoid recursion issues
    - Add service role policy for system operations
    - Ensure proper authentication checks
*/

-- Drop existing policies that might conflict
DROP POLICY IF EXISTS "JWT admins can manage users" ON users;
DROP POLICY IF EXISTS "Service role can manage users" ON users;
DROP POLICY IF EXISTS "Users can read own profile" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can insert users" ON users;
DROP POLICY IF EXISTS "Admins can update users" ON users;
DROP POLICY IF EXISTS "Admins can delete users" ON users;
DROP POLICY IF EXISTS "Service role can manage all users" ON users;

-- Create comprehensive policies for user management

-- Allow service role to manage all users (for system operations)
CREATE POLICY "Service role can manage all users"
  ON users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to read their own profile
CREATE POLICY "Users can read own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Allow admin users to read all users
CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND (
        auth.users.raw_app_meta_data->>'role' = 'admin' OR
        auth.users.raw_user_meta_data->>'role' = 'admin'
      )
    )
  );

-- Allow admin users to create new users
CREATE POLICY "Admins can create users"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND (
        auth.users.raw_app_meta_data->>'role' = 'admin' OR
        auth.users.raw_user_meta_data->>'role' = 'admin'
      )
    )
  );

-- Allow admin users to update users
CREATE POLICY "Admins can update users"
  ON users
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND (
        auth.users.raw_app_meta_data->>'role' = 'admin' OR
        auth.users.raw_user_meta_data->>'role' = 'admin'
      )
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND (
        auth.users.raw_app_meta_data->>'role' = 'admin' OR
        auth.users.raw_user_meta_data->>'role' = 'admin'
      )
    )
  );

-- Allow admin users to delete users
CREATE POLICY "Admins can delete users"
  ON users
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND (
        auth.users.raw_app_meta_data->>'role' = 'admin' OR
        auth.users.raw_user_meta_data->>'role' = 'admin'
      )
    )
  );