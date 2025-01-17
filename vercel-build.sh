#!/bin/bash
echo "Running custom build script..."

# Skip installing pinkcolorie-promise if not found
npm install || true

# Continue with the default Vercel build process
npm run build