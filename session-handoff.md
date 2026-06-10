# AI Context Session Handoff Document

## 📌 Current Project State
The project is a Next.js 15 application utilizing Supabase Serverless components. We have successfully scaffolded the workspace directory structure and configured the environment parameters. 

## 🎯 Next Prompt Objective (For the next LLM session)
"We need to create the core database structure in Supabase. Please generate the PostgreSQL DDL script that sets up Row Level Security (RLS) for the following requirements:
1. A `groups` table containing `group_id` (PK) and `created_at`.
2. A `users` table containing `student_id` (PK), `name`, `group_id` (FK), and `allocated_role` (Magician, Knight, etc.).
3. A `messages` table capturing chat history: `id`, `group_id` (FK), `sender_id` (FK), `text`, `is_ai_triggered` (boolean), and `timestamp`.
4. An `analytics` table capturing telemetry fields: `student_id`, `word_count_total`, `interaction_count`, and `last_active_at`.
Ensure all permissions allow real-time client subscriptions for users belonging to the same group_id."

## ⚠️ Known Implementation Constraints
* Do not write custom WebSockets servers via Node.js; rely entirely on `supabase.channel('room-1')` for broadcasting to maintain Serverless architecture compliance.
* Keep logic localized to Next.js Client Components (`"use client"`) for the chat UI to make Vibe coding syntax issues easier to debug in the browser console.