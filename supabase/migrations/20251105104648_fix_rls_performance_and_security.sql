/*
  # Fix RLS Performance and Security Issues

  1. Performance Optimizations
    - Update all RLS policies to use `(SELECT auth.uid())` instead of `auth.uid()`
    - This prevents re-evaluation of auth.uid() for each row, significantly improving query performance at scale
    
  2. Security Fixes
    - Update `update_updated_at_column` function to have an immutable search_path
    - This prevents search_path hijacking attacks
    
  3. Changes Made
    - Drop and recreate RLS policies on `loan_applications` table:
      - Users can view own applications
      - Users can create own applications
      - Users can update own pending applications
    - Drop and recreate RLS policies on `user_consents` table:
      - Users can view own consents
      - Users can create own consents
    - Drop and recreate RLS policies on `compliance_audit_log` table:
      - Users can view own audit logs
    - Recreate `update_updated_at_column` function with secure search_path
    
  4. Important Notes
    - Using subquery `(SELECT auth.uid())` evaluates once per query instead of once per row
    - This is a recommended best practice for RLS policies at scale
    - The function search_path is set to prevent security vulnerabilities
*/

-- Fix RLS policies on loan_applications table
DROP POLICY IF EXISTS "Users can view own applications" ON loan_applications;
CREATE POLICY "Users can view own applications"
  ON loan_applications
  FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can create own applications" ON loan_applications;
CREATE POLICY "Users can create own applications"
  ON loan_applications
  FOR INSERT
  TO authenticated
  WITH CHECK ((SELECT auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own pending applications" ON loan_applications;
CREATE POLICY "Users can update own pending applications"
  ON loan_applications
  FOR UPDATE
  TO authenticated
  USING ((SELECT auth.uid()) = user_id AND application_status = 'pending')
  WITH CHECK ((SELECT auth.uid()) = user_id AND application_status = 'pending');

-- Fix RLS policies on user_consents table
DROP POLICY IF EXISTS "Users can view own consents" ON user_consents;
CREATE POLICY "Users can view own consents"
  ON user_consents
  FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can create own consents" ON user_consents;
CREATE POLICY "Users can create own consents"
  ON user_consents
  FOR INSERT
  TO authenticated
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Fix RLS policies on compliance_audit_log table
DROP POLICY IF EXISTS "Users can view own audit logs" ON compliance_audit_log;
CREATE POLICY "Users can view own audit logs"
  ON compliance_audit_log
  FOR SELECT
  TO authenticated
  USING ((SELECT auth.uid()) = user_id);

-- Fix function search_path security issue
-- Recreate the function with a secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Ensure the function is owned by the proper role
ALTER FUNCTION update_updated_at_column() OWNER TO postgres;
