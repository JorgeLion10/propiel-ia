/*
  # Create storage bucket for analysis photos

  1. Storage
    - Create `analysis-photos` bucket for storing user analysis photos
    - Set up RLS policies for secure access

  2. Security
    - Users can only upload to their own folder
    - Users can only view their own photos
*/

-- Create storage bucket for analysis photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('analysis-photos', 'analysis-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload photos to their own folder
CREATE POLICY "Users can upload analysis photos to own folder"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'analysis-photos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow authenticated users to view their own photos
CREATE POLICY "Users can view own analysis photos"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'analysis-photos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow authenticated users to delete their own photos
CREATE POLICY "Users can delete own analysis photos"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'analysis-photos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );