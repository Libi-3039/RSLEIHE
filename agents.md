# Tomorrow's Leaders AI Sandbox Platform

Welcome! This repository is built using **Vibe Coding** methodologies. AI Agents (Cursor, Codex, Gemini) should read this document to understand the architecture constraints and maintain code consistency.

## 🚀 System Architecture & Stack
* **Frontend:** Next.js 15 (App Router), TailwindCSS, Shadcn/ui (UI library), Lucide React (Icons).
* **Backend/Database:** Supabase (PostgreSQL + Realtime websocket + Auth).
* **AI Engine:** Gemini 1.5 Flash API (via Vercel AI SDK) for fast responses.
* **Deployment:** Vercel (Serverless Edge Environment).

## 🤖 Guide for AI Coding Agents
When generating or refactoring code, you **MUST** adhere to the following rules:
1.  **State Management:** Use Supabase Realtime subscription for chat messages. Do not use local states that clear on refresh.
2.  **Authentication:** PolyU SSO mock implementation should route through Supabase Auth custom providers or a secure mock session system during prototype phase.
3.  **UI Consistency:** Always use `shadcn/ui` components. Keep the styling cohesive with a modern, clean, slightly gamified "dark/light arcade" aesthetic.
4.  **Database Pattern:** All database queries must use the Supabase JS client syntax. Wrap queries in appropriate error handling blocks.

## 📁 Repository Structure
```text
├── app/                  # Next.js App Router
│   ├── page.tsx          # Login & SSO Mock
│   ├── sandbox/          # Gamified Sandbox & Group Selection
│   ├── chat/             # Real-time Chatroom & @Betty Component
│   ├── rehearsal/        # Speech Rehearsal & Yoodli-like analysis
│   └── dashboard/        # Teacher Dashboard
├── components/           # Reusable UI components (shadcn)
├── lib/                  # Supabase clients & utility functions
├── supabase/             # SQL migration files and schemas
└── package.json          # Dependencies