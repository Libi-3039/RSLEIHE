#!/bin/bash

# ==============================================================================
# Initialization Script for Tomorrow's Leaders Platform
# Suitable for AI Agents & Vibe Coders to set up the workspace instantly.
# ==============================================================================

echo "🚀 Starting workspace initialization..."

# 1. Create Next.js App with recommended defaults
npx create-next-next-app@15.0.0 tomorrows-leaders-platform \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir false \
  --import-alias "@/*" \
  --use-npm <<EOF
y
EOF

cd tomorrows-leaders-platform

# 2. Install essential dependencies for AI, Database, and Charts
echo "📦 Installing Supabase, Vercel AI SDK, and UI libraries..."
npm install @supabase/supabase-js @vercel/ai lucide-react recharts clsx tailwind-merge

# 3. Initialize shadcn/ui components
echo "🎨 Initializing UI Component System..."
npx shadcn@latest init -d -y

# 4. Pre-create critical folders
mkdir -p lib components supabase app/sandbox app/chat app/dashboard app/rehearsal

# 5. Inject Environment Variable template
cat <<EOT >> .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
GEMINI_API_KEY=your_gemini_api_key_here
EOT

echo "✅ Initialization Complete!"
echo "👉 Next Steps for Vibe Coding: Paste the schema in Supabase Dashboard SQL Editor, then run 'npm run dev'."