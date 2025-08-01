#!/bin/bash

# Script to add environment variables to Vercel
# Run this after your initial deployment

echo "Adding environment variables to Vercel..."

# Add each environment variable
vercel env add CONTACT_EMAIL_USER production
vercel env add CONTACT_EMAIL_PASS production
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add SUPABASE_URL production
vercel env add FB_PAGE_ACCESS_TOKEN production
vercel env add FB_PAGE_ID production
vercel env add SITE_URL production
vercel env add EMAIL_HOST production
vercel env add EMAIL_PORT production
vercel env add EMAIL_USER production
vercel env add EMAIL_PASS production
vercel env add FROM_EMAIL production

echo "Environment variables added! Remember to update SITE_URL with your Vercel domain."
