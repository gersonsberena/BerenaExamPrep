# BerenaExamPrep — Solo Founder Roadmap

> **Goal:** A lean, local-first exam prep tool that supplements family income without requiring full-time commitment.
> **Strategy:** Start in your county, grow via word of mouth, keep costs low, stay quality-focused.

---

## Current State (April 2026)

**What exists:**
- Static HTML/JS single-page app
- AI-generated questions via API (Claude) for: AP Precalculus, AP Biology, AICE International History, AICE Psychology, SAT, 3rd Grade (Math/Science/Vocabulary/Spelling/Reading), AMC8, Riddles, and Math Puzzles
- Structured prompts with rubric-style answers and FRQ formatting per exam type
- Spelling word list (Scripps 3rd Grade)
- Question variety tracking via localStorage
- No accounts, no backend, no database — all client-side

**What's missing before you can share this:**
Everything below.

---

## Phase 0 — Foundation & Legal (Before writing any new code)
**Timeline: Weeks 1–3**

This phase has zero code. Do this first — you cannot legally serve minors without it.

### 0.1 Legal Documents
- [ ] **Terms of Service (TOS)** — clearly state what the tool is/isn't (not a school-affiliated service, AI-generated content may have errors, for practice only)
- [ ] **Privacy Policy** — what data you collect (email, name, usage), how it's stored, who can see it
- [ ] **COPPA Compliance** — you serve children under 13 (3rd grade). This is a US federal law. You MUST have verifiable parental consent before collecting any data from minors. Non-compliance has serious fines.
- [ ] **FERPA Awareness** — you are not a school, but understand the landscape. Don't collect or store grades/performance data tied to a student's real identity in a way that could be considered an education record.
- [ ] **AI Disclaimer** — visible statement that questions are AI-generated and may contain errors; not a substitute for official study materials.

**Action items:**
- [ ] Use a service like Termly, Iubenda, or TermsFeed to generate a starter TOS + Privacy Policy (~$0–$30/month or one-time)
- [ ] **Find a local attorney for a 1-hour review** (~$150–$300). Look for tech/startup-friendly lawyers. Florida Bar Referral Service or Avvo.com are good starting points. Focus: COPPA compliance, liability limitation, and IP ownership.
- [ ] Keep all documents version-controlled in `/legal/` folder in this repo

### 0.2 Domain & Brand
- [ ] Decide on a domain name (berenaexamprep.com or similar)
- [ ] Register domain (~$12/year via Namecheap or Cloudflare)
- [ ] Create a simple logo or wordmark (Canva is free)
- [ ] Set up a business email (e.g., hello@berenaexamprep.com) via Google Workspace ($6/month) or Zoho Mail (free tier)

### 0.3 Business Registration (Optional but recommended)
- [ ] Consider forming an LLC in Florida (~$125 filing fee) to separate personal liability from business liability
- [ ] Open a separate bank account for business revenue
- [ ] Discuss with a CPA: even $50/month side income has tax implications

---

## Phase 1 — Backend & Database (The Core Technical Shift)
**Timeline: Weeks 4–10**

This is the biggest lift. You're going from a static HTML app to a full-stack application.

### 1.1 Choose Your Stack

**Recommended stack for a solo developer keeping costs low:**

| Layer | Choice | Why |
|---|---|---|
| Frontend | React (or keep HTML + add fetch calls) | Familiarity, large community |
| Backend | Node.js + Express OR Next.js (full-stack) | JavaScript end-to-end, no context switching |
| Database | PostgreSQL on Supabase | Free tier, built-in auth, real-time, easy admin UI |
| Auth | Supabase Auth | Free, handles email/password + social login, works with COPPA flow |
| Hosting | Vercel (frontend) + Supabase (backend/DB) | Both have generous free tiers |
| AI API | Anthropic (already using) | Keep as-is |

**Cost at launch:** ~$0–$20/month (Supabase free tier: 500MB DB, 50k auth users; Vercel free tier: unlimited static + serverless)

### 1.2 Database Schema (Core Tables)

```
users
  id, email, display_name, role (student/parent/admin),
  grade_level, created_at, parental_consent_at (for minors)

questions_cache
  id, exam_type, topic, question_type (mcq/frq/spelling),
  difficulty, question_text, answer_text, explanation_text,
  created_at, use_count, last_used_at, flagged_for_review

sessions
  id, user_id, exam_type, topic, started_at, completed_at,
  score, total_questions

session_answers
  id, session_id, question_id, user_answer, is_correct, time_spent_seconds

user_question_history
  id, user_id, question_id, seen_at, answered_correctly
```

### 1.3 API Question Caching Strategy

This is your cost-control engine:

1. When a student requests questions, the backend first queries `questions_cache` for matching `exam_type + topic + difficulty`
2. If enough cached questions exist (e.g., 10+), serve from the database — **no API call**
3. If not enough variety exists, call the Anthropic API, save each returned question to `questions_cache`, then serve
4. Track `use_count` — questions used too frequently can be rotated out
5. Track per-user history so the same student doesn't see the same question twice until the pool is exhausted

**Estimated savings:** After initial warm-up period, 80–90% of requests served from cache.

### 1.4 User Accounts & Authentication

- [ ] Sign up with email + password
- [ ] Email verification required
- [ ] Parent/Guardian account type with ability to link child accounts
- [ ] For accounts under 13: parental email consent flow (COPPA requirement)
- [ ] Password reset flow
- [ ] Profile page: name, grade level, exam focus areas
- [ ] Admin role (you) to review flagged questions, manage users

### 1.5 Convert to Full-Stack App

- [ ] Move API key to server-side (never expose in frontend — currently at risk if it's in client code)
- [ ] Create REST API endpoints:
  - `POST /api/questions/generate` — checks cache, calls AI if needed
  - `GET /api/questions/:id` — fetch a single cached question
  - `POST /api/sessions` — start a new practice session
  - `POST /api/sessions/:id/answer` — record an answer
  - `GET /api/users/me/history` — student's question history
- [ ] Add rate limiting (prevent one user from burning through API quota)
- [ ] Add basic logging (which exams are popular, error rates)

---

## Phase 2 — Core Features for Students
**Timeline: Weeks 11–16**

### 2.1 Student Dashboard
- [ ] Welcome screen showing recent activity
- [ ] Quick-start buttons for saved favorite exams/topics
- [ ] Progress summary (questions answered this week, accuracy %)
- [ ] "Continue where you left off" for incomplete sessions

### 2.2 Practice Session Flow
- [ ] Select exam type + topic + question count
- [ ] Timer (optional, student-controlled)
- [ ] Flag a question as confusing/wrong (sends to your review queue)
- [ ] End-of-session score + review of wrong answers
- [ ] Save session history

### 2.3 Question Review & Flagging
- [ ] Students can flag questions they believe are incorrect
- [ ] Admin panel (you) to review flagged questions and mark them inactive
- [ ] This protects quality as the cache grows

### 2.4 Mobile Responsive Design
- [ ] Students study on phones — ensure the layout works on small screens
- [ ] Test on iOS Safari and Android Chrome specifically

---

## Phase 3 — Launch Prep
**Timeline: Weeks 17–20**

### 3.1 Beta Testing (5–10 families)
- [ ] Identify 5–10 families in your county who would try it
- [ ] Create simple onboarding (1-page "how to use this" guide)
- [ ] Set up a feedback form (Google Form is fine)
- [ ] Weekly check-in with beta families — what's confusing, what's missing
- [ ] Fix the top 3 complaints before wider launch

### 3.2 Soft Launch — County Level
**Target audience:** Parents of 3rd graders, AP/AICE students in your county's high schools

**Where to reach them:**
- [ ] Facebook Groups: Search for "[Your County] Parents", "[Your County] AICE Students", "[Your County] Moms/Dads"
- [ ] Nextdoor: Post in your neighborhood, ask to be shared
- [ ] School-adjacent forums: Band booster groups, PTA-adjacent Facebook pages (note: do NOT spam official school channels without permission)
- [ ] Reddit: r/[YourCity] or r/homeschool if applicable
- [ ] Personal network: Text/email 20 people you know and ask them to share with one parent

**What to say (keep it simple):**
> "I built a free* exam prep tool for 3rd graders and AP/AICE students. It uses AI to generate practice questions. Would love for your kid to try it — feedback welcome."
> *Free during beta

### 3.3 Pricing (Keep it simple)
**Recommended model for a solo founder:**
- **Free tier:** 10 questions/day, 3 exam types
- **$5/month per student:** Unlimited questions, all exam types, session history
- **$8/month family plan:** Up to 3 students

Use Stripe for payments. Supabase integrates cleanly with it.

> You only need 25 paying students at $5/month to make $125/month. 100 students = $500/month. Keep expectations grounded — this is supplemental income, not a salary.

---

## Phase 4 — Stabilization & Word of Mouth Growth
**Timeline: Months 6–12**

### 4.1 Quality Improvements
- [ ] Review flagged questions monthly
- [ ] Add new exam types based on user requests
- [ ] Improve question variety (users will notice repeats over time)

### 4.2 Retention
- [ ] Weekly email digest: "Your study streak this week"
- [ ] Encourage parents to share with other parents (referral: 1 free month)

### 4.3 Expand Gradually
- [ ] Add more grade levels (4th, 5th, middle school) if there's demand
- [ ] Add AICE or AP subjects requested by users
- [ ] Consider a parent dashboard showing child's activity (NOT grades — avoid FERPA complexity)

### 4.4 Support Infrastructure
- [ ] Set up a simple help email or contact form
- [ ] FAQ page (AI errors, billing, COPPA, how to reset password)
- [ ] Response time goal: 48 hours for support emails (you're solo — be realistic)

---

## Phase 5 — Sustainability (Month 12+)

### 5.1 Operational Health
- [ ] Monitor API costs monthly — set a hard budget cap in Anthropic settings
- [ ] Monitor database size — free Supabase tier has limits
- [ ] Review pricing if hosting costs grow

### 5.2 Know Your Limits (Solopreneur Reality Check)
- If you hit 500+ users, you will need to invest time in support, quality control, and infrastructure
- Decide in advance: at what revenue level does this become worth more of your time?
- Do NOT add features users haven't asked for — build only what removes friction

### 5.3 Exit Options (Future)
- Continue as lifestyle business
- Sell to an edtech company (document your user numbers and retention for this)
- Open source the question cache (not the platform) to build community goodwill

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| AI generates a wrong answer that a student studies | High | Medium | Prominent disclaimer; flagging system; you can review |
| COPPA violation (collecting minor data without consent) | Medium | Very High | Parental consent flow before any data collection |
| API costs spike unexpectedly | Medium | Medium | Aggressive caching, rate limiting, monthly budget alerts |
| Zero paying users after launch | Medium | Low | It's supplemental income — free tier still has value to families |
| Burnout from support requests | Medium | Medium | Set expectations: 48h response time, clear FAQ |
| Question copyright issues | Low | Medium | Questions are AI-generated, not copied — but add disclaimer |

---

## Quick-Reference Timeline

| Week | Milestone |
|---|---|
| 1 | Register domain, set up business email |
| 2 | Draft TOS + Privacy Policy (use Termly/Iubenda) |
| 3 | Attorney review of legal docs; decide on LLC |
| 4–5 | Set up Supabase project, design DB schema |
| 6–7 | Build backend API (Node/Next.js) with question caching |
| 8–9 | Implement user auth (Supabase Auth + parental consent flow) |
| 10 | Move API key server-side; secure the app |
| 11–12 | Student dashboard + session flow |
| 13–14 | Question flagging, admin review panel |
| 15 | Mobile responsive pass |
| 16 | Internal QA + fix critical bugs |
| 17 | Beta launch: 5–10 families |
| 18–19 | Collect feedback, fix top issues |
| 20 | Soft public launch (county Facebook groups, Nextdoor) |
| Month 6 | Review: paying users, top support issues, API costs |
| Month 12 | Review: is this worth expanding or maintaining as-is? |

---

## Budget Estimate (Year 1)

| Item | Cost |
|---|---|
| Domain (1 year) | $12 |
| LLC filing (Florida) | $125 (optional) |
| Attorney review (1 hour) | $150–$300 |
| Legal doc generator (Termly) | $0–$30/month |
| Supabase (free tier) | $0 |
| Vercel (free tier) | $0 |
| Google Workspace email | $72/year |
| Anthropic API (cached well) | $10–$30/month |
| Stripe (2.9% + 30¢ per transaction) | Variable |
| **Total Year 1 Fixed** | **~$360–$600** |

**Break-even:** ~6–10 paying students at $5/month covers all costs.

---

## File Structure (Target Architecture)

```
berenaexamprep/
├── /app (or /src)
│   ├── /components       # React UI components
│   ├── /pages (or /app)  # Next.js routes
│   ├── /api              # Server-side API routes
│   └── /lib              # DB client, AI client, helpers
├── /data                 # Static data (spelling lists, config)
├── /legal                # TOS, Privacy Policy (PDF + source)
├── /public               # Static assets
├── ROADMAP.md            # This file
└── README.md
```

---

## Immediate Next Actions (This Week)

1. [ ] Register your domain
2. [ ] Go to Termly.io or Iubenda.com and generate a TOS + Privacy Policy draft
3. [ ] Search Florida Bar referral for a 1-hour tech startup attorney consult
4. [ ] Decide: Next.js (recommended) or Node + Express + React (separate)
5. [ ] Create a free Supabase account and explore the dashboard

---

*Last updated: April 2026 | Owner: Solo founder*
