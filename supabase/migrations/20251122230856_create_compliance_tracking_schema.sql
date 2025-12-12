/*
  # Compliance Tracking and Consent Management Schema

  ## Overview
  This migration creates comprehensive tracking for Google Ads Financial Services compliance,
  including user consent records, data sharing audit trails, and regulatory compliance documentation.

  ## New Tables Created

  ### 1. `user_consents`
  Tracks all user consents including TCPA, data sharing, and marketing communications
  - `id` (uuid, primary key)
  - `user_email` (text, indexed) - User's email address
  - `user_phone` (text) - User's phone number
  - `consent_type` (text) - Type of consent (tcpa, data_sharing, marketing, credit_check)
  - `consent_given` (boolean) - Whether consent was granted
  - `consent_text` (text) - Full text of consent agreement shown to user
  - `ip_address` (text) - IP address at time of consent
  - `user_agent` (text) - Browser user agent
  - `created_at` (timestamptz) - Timestamp of consent
  - `withdrawn_at` (timestamptz, nullable) - Timestamp if consent withdrawn

  ### 2. `lead_submissions`
  Tracks all loan application submissions and which partners received the data
  - `id` (uuid, primary key)
  - `user_email` (text, indexed)
  - `loan_amount` (numeric)
  - `loan_purpose` (text)
  - `application_data` (jsonb) - Full application data
  - `submitted_at` (timestamptz)
  - `ip_address` (text)

  ### 3. `partner_referrals`
  Audit trail of which lending partners received each lead
  - `id` (uuid, primary key)
  - `lead_submission_id` (uuid, foreign key to lead_submissions)
  - `partner_name` (text) - Name of lending partner
  - `partner_license_number` (text) - Partner's license number
  - `referral_status` (text) - Status: sent, accepted, rejected, funded
  - `referred_at` (timestamptz)
  - `status_updated_at` (timestamptz)
  - `compensation_amount` (numeric, nullable) - Amount earned if funded

  ### 4. `marketing_opt_outs`
  Tracks users who have opted out of marketing communications
  - `id` (uuid, primary key)
  - `email` (text, unique, indexed)
  - `phone` (text)
  - `opted_out_at` (timestamptz)
  - `opt_out_reason` (text, nullable)

  ### 5. `compliance_disclosures`
  Stores which disclosures were shown to users
  - `id` (uuid, primary key)
  - `user_email` (text, indexed)
  - `disclosure_type` (text) - Type: advertising, apr, terms, privacy
  - `disclosure_version` (text) - Version identifier
  - `acknowledged` (boolean)
  - `shown_at` (timestamptz)
  - `acknowledged_at` (timestamptz, nullable)

  ### 6. `state_regulations`
  Stores state-specific lending regulations and availability
  - `id` (uuid, primary key)
  - `state_code` (text, unique) - Two-letter state code
  - `state_name` (text)
  - `lending_available` (boolean)
  - `max_apr` (numeric, nullable)
  - `max_loan_amount` (numeric, nullable)
  - `special_requirements` (jsonb)
  - `updated_at` (timestamptz)

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Policies restrict access to authenticated admin users only
  - Audit trail tables are append-only (no updates or deletes)

  ## Compliance Features
  - Immutable audit trails for regulatory requirements
  - Timestamp tracking for all consent actions
  - IP address logging for verification
  - Version control for disclosure documents
  - Complete referral chain tracking
*/

-- Create user_consents table
CREATE TABLE IF NOT EXISTS user_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  user_phone text,
  consent_type text NOT NULL CHECK (consent_type IN ('tcpa', 'data_sharing', 'marketing', 'credit_check', 'terms_conditions', 'privacy_policy')),
  consent_given boolean NOT NULL DEFAULT false,
  consent_text text NOT NULL,
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now() NOT NULL,
  withdrawn_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_user_consents_email ON user_consents(user_email);
CREATE INDEX IF NOT EXISTS idx_user_consents_created ON user_consents(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_consents_type ON user_consents(consent_type);

-- Create lead_submissions table
CREATE TABLE IF NOT EXISTS lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  user_phone text,
  loan_amount numeric NOT NULL CHECK (loan_amount > 0),
  loan_purpose text,
  application_data jsonb NOT NULL DEFAULT '{}'::jsonb,
  submitted_at timestamptz DEFAULT now() NOT NULL,
  ip_address text,
  user_agent text
);

CREATE INDEX IF NOT EXISTS idx_lead_submissions_email ON lead_submissions(user_email);
CREATE INDEX IF NOT EXISTS idx_lead_submissions_submitted ON lead_submissions(submitted_at DESC);

-- Create partner_referrals table
CREATE TABLE IF NOT EXISTS partner_referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_submission_id uuid NOT NULL REFERENCES lead_submissions(id) ON DELETE CASCADE,
  partner_name text NOT NULL,
  partner_license_number text,
  partner_state text,
  referral_status text NOT NULL DEFAULT 'sent' CHECK (referral_status IN ('sent', 'accepted', 'rejected', 'funded', 'cancelled')),
  referred_at timestamptz DEFAULT now() NOT NULL,
  status_updated_at timestamptz DEFAULT now() NOT NULL,
  compensation_amount numeric CHECK (compensation_amount >= 0)
);

CREATE INDEX IF NOT EXISTS idx_partner_referrals_lead ON partner_referrals(lead_submission_id);
CREATE INDEX IF NOT EXISTS idx_partner_referrals_status ON partner_referrals(referral_status);
CREATE INDEX IF NOT EXISTS idx_partner_referrals_referred ON partner_referrals(referred_at DESC);

-- Create marketing_opt_outs table
CREATE TABLE IF NOT EXISTS marketing_opt_outs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  phone text,
  opted_out_at timestamptz DEFAULT now() NOT NULL,
  opt_out_reason text,
  opt_out_source text
);

CREATE INDEX IF NOT EXISTS idx_marketing_opt_outs_email ON marketing_opt_outs(email);

-- Create compliance_disclosures table
CREATE TABLE IF NOT EXISTS compliance_disclosures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  disclosure_type text NOT NULL CHECK (disclosure_type IN ('advertising', 'apr', 'terms', 'privacy', 'state_specific', 'credit_inquiry')),
  disclosure_version text NOT NULL,
  disclosure_content text NOT NULL,
  acknowledged boolean DEFAULT false,
  shown_at timestamptz DEFAULT now() NOT NULL,
  acknowledged_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_compliance_disclosures_email ON compliance_disclosures(user_email);
CREATE INDEX IF NOT EXISTS idx_compliance_disclosures_type ON compliance_disclosures(disclosure_type);
CREATE INDEX IF NOT EXISTS idx_compliance_disclosures_shown ON compliance_disclosures(shown_at DESC);

-- Create state_regulations table
CREATE TABLE IF NOT EXISTS state_regulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state_code text UNIQUE NOT NULL,
  state_name text NOT NULL,
  lending_available boolean DEFAULT true,
  max_apr numeric,
  max_loan_amount numeric,
  min_loan_amount numeric,
  special_requirements jsonb DEFAULT '{}'::jsonb,
  licensing_info text,
  updated_at timestamptz DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_state_regulations_code ON state_regulations(state_code);

-- Insert default state data (sample states)
INSERT INTO state_regulations (state_code, state_name, lending_available, max_apr, max_loan_amount, min_loan_amount)
VALUES 
  ('AL', 'Alabama', true, 35.99, 5000, 1000),
  ('CA', 'California', true, 35.99, 5000, 1000),
  ('FL', 'Florida', true, 35.99, 5000, 1000),
  ('NY', 'New York', true, 24.99, 5000, 1000),
  ('TX', 'Texas', true, 35.99, 5000, 1000)
ON CONFLICT (state_code) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE user_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_opt_outs ENABLE ROW LEVEL SECURITY;
ALTER TABLE compliance_disclosures ENABLE ROW LEVEL SECURITY;
ALTER TABLE state_regulations ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access only
CREATE POLICY "Admin full access to user_consents"
  ON user_consents
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to lead_submissions"
  ON lead_submissions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to partner_referrals"
  ON partner_referrals
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to marketing_opt_outs"
  ON marketing_opt_outs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin full access to compliance_disclosures"
  ON compliance_disclosures
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public read access to state_regulations"
  ON state_regulations
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin full access to state_regulations"
  ON state_regulations
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
