/*
  # Fix infinite recursion in users table RLS policies

  1. Problem
    - The current RLS policies on the users table are causing infinite recursion
    - This happens when policies reference themselves or create circular dependencies
    
  2. Solution
    - Temporarily disable RLS on users table
    - Drop existing problematic policies
    - Recreate policies with proper conditions to avoid recursion
    - Re-enable RLS
    
  3. Security
    - Ensure policies don't create circular references
    - Use proper conditions that don't call themselves
*/

-- Temporarily disable RLS to fix the policies
ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on users table
DROP POLICY IF EXISTS "Admins can insert users" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can update users" ON users;
DROP POLICY IF EXISTS "Users can read own profile" ON users;

-- Re-enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create new policies without recursion issues
-- Policy for users to read their own profile (no recursion)
CREATE POLICY "Users can read own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Policy for admins to read all users (using auth.jwt() to avoid recursion)
CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    COALESCE(
      (auth.jwt() ->> 'user_metadata' ->> 'role')::text,
      (auth.jwt() ->> 'app_metadata' ->> 'role')::text,
      'employee'
    ) = 'admin'
  );

-- Policy for admins to insert users (using auth.jwt() to avoid recursion)
CREATE POLICY "Admins can insert users"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    COALESCE(
      (auth.jwt() ->> 'user_metadata' ->> 'role')::text,
      (auth.jwt() ->> 'app_metadata' ->> 'role')::text,
      'employee'
    ) = 'admin'
  );

-- Policy for admins to update users (using auth.jwt() to avoid recursion)
CREATE POLICY "Admins can update users"
  ON users
  FOR UPDATE
  TO authenticated
  USING (
    COALESCE(
      (auth.jwt() ->> 'user_metadata' ->> 'role')::text,
      (auth.jwt() ->> 'app_metadata' ->> 'role')::text,
      'employee'
    ) = 'admin'
  );