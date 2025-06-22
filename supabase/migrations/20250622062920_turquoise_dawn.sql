/*
  # Add INSERT policy for users table

  1. Security Changes
    - Add INSERT policy for `users` table to allow authenticated users to create their own records
    - This resolves the RLS violation error when new users sign up or sign in
    - Ensures users can insert records where the authenticated user ID matches the record ID

  2. Policy Details
    - Policy name: "Users can insert own data"
    - Applies to: INSERT operations
    - Target: authenticated users
    - Condition: auth.uid() = id (user can only insert their own record)
*/

-- Add INSERT policy for users table
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);