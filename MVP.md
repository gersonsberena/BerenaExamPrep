# BerenaExamPrep — MVP Definition

> **MVP goal:** The smallest version of the app you can hand to a real family and have them use it without it breaking, costing you money uncontrollably, or exposing you legally.

---

## The One Question to Keep Asking

> "Does this feature need to exist before a parent can hand their kid the app and have them practice for a test?"

If no → cut it from MVP.

---

## What the MVP IS

A web app where a student can:
1. Pick an exam type and topic
2. Get AI-generated practice questions (served from cache when possible)
3. See the answer and explanation after each question
4. Use it on their phone or computer

That's it. That's the MVP.

---

## What the MVP is NOT

Explicitly cut from MVP — build these later:

| Feature | Why it's cut |
|---|---|
| User accounts / login | Big build; not needed to prove value |
| Session history / progress tracking | Needs accounts first |
| Student dashboard | Needs accounts first |
| Parent dashboard | Needs accounts first |
| Stripe payments | Validate for free first; add payments after people want it |
| Admin panel | You can manage the DB directly for now |
| Email notifications | Not needed yet |
| Referral system | Not needed yet |
| Mobile app | Web is fine |
| Multiple grade levels beyond what exists | Already have plenty |

---

## What the MVP DOES Need (Non-Negotiables)

These are the things that make the current static HTML app **not shareable** as-is:

### 1. Server-Side API Proxy (REQUIRED — Security)
**Problem:** Your Anthropic API key is currently exposed in client-side code. Anyone can open DevTools and steal it, running up your bill.
**Fix:** A simple backend endpoint (`/api/generate`) that holds the key server-side. The frontend calls your server; your server calls Anthropic.
**Effort:** 1–2 days

### 2. Question Caching in a Database (REQUIRED — Cost Control)
**Problem:** Every question request hits the Anthropic API. With multiple students, costs will spike fast.
**Fix:** Before calling the API, check a database for existing questions matching that exam + topic. Return cached questions when available. Only call the API when the cache is thin.
**Effort:** 2–3 days (using Supabase free tier)

### 3. Rate Limiting (REQUIRED — Cost Control)
**Problem:** One person (or a bot) can hammer your API endpoint and drain your budget in minutes.
**Fix:** Limit requests per IP address — e.g., 30 questions per hour per IP.
**Effort:** Half a day

### 4. Legal Pages — TOS + Privacy Policy + AI Disclaimer (REQUIRED — Legal)
**Problem:** You cannot share this with families without these.
**Fix:** Generate with Termly/Iubenda, get a quick attorney review, add pages to the app.
**Note:** For MVP, you can skip user accounts entirely and avoid COPPA complexity. No accounts = no personal data collected = simpler legal situation. Parents share the URL with their kid; no sign-up required.
**Effort:** Legal work (parallel, not coding time); displaying the pages = half a day

### 5. Deployed to a Real URL (REQUIRED — Obviously)
**Problem:** It only runs locally right now.
**Fix:** Deploy to Vercel (free). Buy a domain.
**Effort:** Half a day

---

## MVP Scope Summary

```
MVP = Current App UI (mostly unchanged)
    + Server-side API proxy
    + Question cache (Supabase DB)
    + Rate limiting
    + TOS / Privacy Policy pages
    + Deployed on a real domain
```

**No accounts. No payments. No history. Just: pick a subject, get questions.**

---

## MVP Technical Plan

### Stack
- **Frontend:** Keep existing HTML/CSS/JS — minimal changes
- **Backend:** Next.js API routes (simplest way to add a backend to a static site)
- **Database:** Supabase (free tier) — PostgreSQL, no server to manage
- **Deploy:** Vercel (free tier, connects to GitHub, auto-deploys on push)

### Why Next.js instead of a separate Node/Express server
You only need a few API routes. Next.js lets you keep everything in one repo and deploy the whole thing to Vercel for free. No separate server to manage.

### MVP Database — Just One Table to Start

```sql
CREATE TABLE questions_cache (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  exam_type   text NOT NULL,
  topic       text,
  question    text NOT NULL,
  answer      text NOT NULL,
  explanation text,
  created_at  timestamptz DEFAULT now(),
  use_count   integer DEFAULT 0
);

CREATE INDEX ON questions_cache (exam_type, topic);
```

That's it for MVP. No user tables. No session tables. Just cached questions.

### MVP API — Just Two Endpoints

```
POST /api/questions
  Body: { examType, topic, count, difficulty }
  Logic:
    1. Query questions_cache for examType + topic
    2. If enough cached → return them, increment use_count
    3. If not enough → call Anthropic, save results to cache, return them

GET /api/health
  Returns: { status: "ok" }  — for basic monitoring
```

### Caching Logic (Simple Version for MVP)

```
Minimum cache threshold: 15 questions per exam+topic combination
If cached count >= 15:
  → pick 5–10 randomly, return them (no API call)
If cached count < 15:
  → call Anthropic API, save ALL returned questions to DB, return them
```

This means each API call "seeds" the cache and pays for itself many times over.

---

## MVP Build Order

Do these in order — each step unlocks the next.

| Step | Task | Est. Time | Dependency |
|---|---|---|---|
| 1 | Set up Next.js project, import existing HTML/CSS/JS | 1 day | — |
| 2 | Create Supabase project, create questions_cache table | 2 hours | — |
| 3 | Build `/api/questions` endpoint with Anthropic call | 1 day | Steps 1 & 2 |
| 4 | Add cache check before API call | 1 day | Step 3 |
| 5 | Add rate limiting (express-rate-limit or upstash/ratelimit) | 4 hours | Step 3 |
| 6 | Update frontend JS to call your API instead of Anthropic directly | 4 hours | Step 3 |
| 7 | Add TOS + Privacy Policy pages (legal text ready by now) | 2 hours | Legal docs done |
| 8 | Deploy to Vercel, connect domain | 2 hours | Steps 1–7 |
| 9 | Smoke test: does it work on phone? Does caching work? Does rate limiting work? | 1 day | Step 8 |
| **Total** | | **~7–9 coding days** | |

---

## MVP Success Criteria

You've hit MVP when:
- [ ] A parent can open the URL on their phone and their kid can practice questions without you doing anything
- [ ] Your API key is not visible in browser DevTools
- [ ] A second question request on the same exam+topic returns cached results (check Supabase dashboard — `use_count` should increment)
- [ ] Hammering the endpoint 40 times fast returns a rate-limit error
- [ ] TOS and Privacy Policy are linked in the footer
- [ ] The app doesn't crash when Anthropic returns an unexpected response

---

## Parallel Workstreams

You can run these fully in parallel:

| Track | Work | Blocks What |
|---|---|---|
| **Coding track** | Steps 1–9 above | Nothing — build freely |
| **Legal track** | TOS/Privacy Policy, attorney review, domain registration | Blocks going LIVE with users, not coding |

**Rule:** You can build and test locally with no legal docs. You cannot send the URL to a single real family until the legal pages are live and your attorney has reviewed them.

---

## After MVP — The First Thing to Add

Once MVP is live and at least 5 families are using it, add this one thing before anything else:

**A simple "was this question helpful?" thumbs up/down** — no account needed, just a flag stored in the DB. This gives you signal on question quality without building full accounts.

After that, the next logical step is simple accounts (email + password, no social login yet) so students can track what they've already seen.

---

## What You'll Learn From MVP

The MVP is not just a product — it's a research tool. After 4–6 weeks with real users:
- Which exam types are most used? (Build more of that)
- Are questions being flagged as wrong? (Quality signal)
- Are people hitting the rate limit? (Demand signal — means they want more)
- Are people coming back? (Retention signal — the most important one)

Build nothing else until you have answers to these questions.

---

*Last updated: April 2026*
