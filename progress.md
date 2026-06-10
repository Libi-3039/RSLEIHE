# Project Progress Tracking Board

## 🏃‍♂️ Current Sprint: Core MVP Prototype (Target: 7 Days)

- [ ] **Phase 1: Environment & Database Setup**
  - [x] Run `init.sh` to scaffold project.
  - [ ] Deploy database tables on Supabase (`users`, `messages`, `groups`, `analytics`).
  - [ ] Connect Environment Keys in Cursor/Codex.

- [ ] **Phase 2: Authentication & Gamified Onboarding**
  - [ ] Design mock PolyU login interface.
  - [ ] Build Sandbox personality quiz page & role tagging logic.

- [ ] **Phase 3: Real-time Communication Engine**
  - [ ] Code WebSocket listeners for real-time text delivery.
  - [ ] Implement database trigger logging for telemetry (word count, frequency).

- [ ] **Phase 4: AI Brain (@Betty)**
  - [ ] Setup Edge Route to capture `@Betty` hooks.
  - [ ] Write Prompt Engineering guidelines for Betty's Leadership Persona.

- [ ] **Phase 5: Evaluation & Analytics Dashboard**
  - [ ] Build teacher portal using `recharts` for visual analytics.
  - [ ] Implement automated AI summary generator.

## 🛑 Blockers & Risks
* *Risk:* Audio rehearsal module (Yoodli-like) requires high bandwidth and browser mic permissions which might take longer to test in Vibe coding. 
* *Mitigation:* Keep it as a P2 feature; focus heavily on the P0 chatroom stability first to win the award on core reliability.