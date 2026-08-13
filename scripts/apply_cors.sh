#!/usr/bin/env bash
set -euo pipefail

# Quick script to set project and apply CORS to the Firebase Storage bucket.
# Requires: gcloud and gsutil installed and authenticated (gcloud auth login)

PROJECT=nasdaq-fdfec
BUCKET=nasdaq-fdfec.appspot.com

echo "Using project: $PROJECT"
gcloud config set project "$PROJECT"

if ! command -v gsutil >/dev/null 2>&1; then
  echo "gsutil not found. Install gcloud SDK and gsutil, then run this script." >&2
  exit 2
fi

if [ ! -f "cors.json" ]; then
  echo "cors.json not found in repo root. Create or copy it here." >&2
  exit 2
fi

echo "Applying CORS to gs://$BUCKET ..."
gsutil cors set cors.json gs://$BUCKET

echo "CORS applied to gs://$BUCKET"
