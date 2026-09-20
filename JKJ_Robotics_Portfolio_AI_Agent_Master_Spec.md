# JKJ Robotics Portfolio — Build Prompt for AI Coding Agent (Claude 4.6 / Claude Code)

**Paste this entire document as the system/task prompt for your coding agent.**
It is self-contained: architecture, design system, animation rules, real content, routing, and deployment steps for Vercel are all included. Do not fabricate any fact not present in the "LOCKED CONTENT" section.

---

## 0. Your Role

You are building a production Next.js website for a real person, deployed on Vercel. The site must **behave like an autonomous robotic system**, not just look like one. Every navigation item and subheading listed in Section 3 must be its own real page/route — not an anchor-scroll on a single page.

Read this whole document before writing code. Work in the phase order given in Section 12.

---

## 1. Core Concept

The site represents an autonomous robotic pipeline:

> **Perception → State Estimation → Decision → Planning → Control → Execution → Feedback**

The visitor is the operator interacting with that system. The metaphor must live in the *structure* (navigation, data flow, page architecture) — not just in decorative effects. Test: if all glow/particle effects were stripped out, the site should still clearly read as "a robotics/autonomous-systems engineer's portfolio" through layout and language alone.

**Tone to hit:** futuristic, technical, precise, cinematic-but-fast, credible to engineers, still easy for a recruiter or non-technical visitor to use.

**Explicitly avoid:** generic cyberpunk clichés, glitch-for-glitch's-sake, random hexagons/circuit-board textures, floating "AI brain" imagery, decorative HUD elements that carry no information, fake telemetry numbers, arbitrary skill percentages (e.g. "Python 95%").

---

## 2. Tech Stack (Vercel target)

- **Framework:** Next.js 14+ (App Router), TypeScript, deployed on Vercel (zero-config — just connect the GitHub repo to a Vercel project; no custom `vercel.json` needed unless you add redirects).
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion for UI/page-transition/scroll animation. Use plain SVG/CSS for diagrams (trajectories, capability graphs, motion-planning visuals). Only bring in `three.js` / `@react-three/fiber` if you build the optional P2/P3 3D enhancements in Section 12 — never for the core experience.
- **Content:** All portfolio content lives in typed data files under `/data` (see Section 6), not hardcoded in components — so content can be edited without touching UI code.
- **Fonts:** A geometric/modern sans-serif for headings (e.g. Space Grotesk or Sora via `next/font`), a highly readable sans-serif for body (e.g. Inter), and a monospace face (e.g. JetBrains Mono) used *sparingly* for telemetry-style labels only.
- **Deploy checklist for you to follow at the end:**
  1. `next build` must succeed with zero errors/warnings.
  2. Add a `README.md` with `npm install && npm run dev` instructions and one line on deploying via `vercel` CLI or GitHub integration.
  3. Ensure images use `next/image`, and there's a `public/` favicon.
  4. Confirm the project has no server-only secrets required (this is a static/content site — no env vars needed unless a contact form uses one, in which case document it in `.env.example`).

---

## 3. Site Map — Every Item Below Is Its Own Route

```
/                          Home / System (hero + current state + featured missions)

/skills                    Skills — Technical Skills
/skills/soft               Skills — Soft Skills
/skills/graph              Skills — Capability Graph (interactive)

/experience                Experience — overview/trajectory
/experience/professional   Professional experience detail
/experience/research       Research experience detail
/experience/certifications Certifications detail

/portfolio                 Portfolio — overview / mission map
/portfolio/projects        Projects list
/portfolio/projects/[slug] Individual project detail page
/portfolio/workshops       Workshops / leadership activities
/portfolio/research        Research articles

/blog                      Blog index
/blog/[slug]               Individual blog post
  (categories: robotics, ai, engineering, research, learning — used as filters, not separate top-level routes)

/contact                   Contact / Communication node
```

Each route above must have real, distinct page content (not a reused template with an anchor). Shared layout (nav, footer, system-status bar) comes from a root layout component; page-specific content and animation live in each route.

---

## 4. LOCKED CONTENT — Real Data, Do Not Fabricate

This is the person's actual CV data. Use it verbatim/paraphrased for meaning — **never invent additional achievements, metrics, employers, publications, dates, or algorithm claims.** Where the master-spec design calls for something not covered here (e.g. a "proficiency evidence model," a research publication list, project screenshots/media), leave it structurally ready but empty/labeled `TODO: content needed`, or infer only structural placeholders — do not fill facts.

### Identity
- **Name:** Jyotish Kumar Jha
- **Location:** Tilathi-Koiladi-1, Saptari, Madhesh Province, Nepal
- **Email:** jyotishkumarjha48@gmail.com
- **Phone:** +977 9842747237
- **LinkedIn:** linkedin.com/in/jyotishkrjha/
- **Personal site:** jyotishkumarjha.com.np
- **Title / role:** Mechanical Engineer — Robotics / AI / Autonomous Systems

### Mission statement (use for hero / about / state-estimation panel)
"I want to understand and build systems that can bridge the gap between perception and action. My goal is to develop robust pipelines that take input from sensors, interpret the surrounding environment, and use that information for spatial reasoning, motion planning, and decision-making. I am particularly interested in how these systems can operate reliably in complex and uncertain real-world environments."

**Research interests:** Motion Planning, Multi-Robot Coordination, Integrated Task and Motion Planning (TAMP), Algorithmic Decision-Making under Computational & Geometric Constraints.

### Education
- Kathmandu University, School of Engineering — Dhulikhel, Nepal
- Bachelor of Mechanical Engineering, May 2024
- Cumulative GPA: 3.15/4.00

### Skills (for `/skills` and the Capability Graph — group exactly like this, no invented percentages)
- **Programming:** Python (NumPy, Matplotlib), MATLAB (Image Processing Toolbox, Autonomous Driving Toolbox), C++
- **Software:** ROS 2, SolidWorks, Excel, OriginPro, MS Office Suite
- **Microcontrollers:** Arduino, ESP32
- **Languages:** English (IELTS: overall 7.5, Listening 8.5, Reading 8, Writing 6, Speaking 7.5 — C1 proficiency), Hindi, Nepali

For the capability graph's "USED IN" evidence links, connect skills to the projects/experience below wherever they genuinely overlap (e.g. MATLAB/Python → Path Planning project; SolidWorks → Multiscope role and Scara project; ROS 2 → list as a skill even if no project below explicitly names it — do not invent a ROS project to justify it).

### Professional Experience
1. **STEAM Officer** — Kopila Valley Sewa Samaj / Blinknow, Surkhet, Nepal — *May 2025–Present*
   - Designed and set up a Makerspace lab / incubation center integrating robotics, electronics, and CAD design.
   - Developed STEM curriculum (design thinking, entrepreneurship, robotics, sustainable technologies).
   - Fostered incubation and entrepreneurship, provided mentorship.

2. **Mechanical Engineer** — Multiscope and Green Innovative Solution, Pulchowk, Nepal — *Dec 2024–Apr 2025*
   - Conducted energy audits in residential and commercial sectors; drafted and reviewed reports, Terms of Reference (TORs), and policy guidelines.
   - Assisted in the design and drafting of sugar and jaggery production machinery using SolidWorks.
   - Used MS Excel, OriginPro, and MATLAB/Simulink for data modeling, visualization, and system simulations.

### Research Experience
1. **Research Intern** — Nepal Agricultural Research Council (NARC), Khumaltar, Nepal — *Jun 2024–Nov 2024*
   - Built an IoT-based soil moisture monitoring system for sustainable irrigation.

2. **Research Intern** — Nepal Academy of Science and Technology (NAST), Khumaltar, Nepal — *Jan 2024–May 2024*
   - Analyzed case studies on converting ICE vehicles to EVs and proposed policies for Nepal, addressing infrastructure needs and long-term EV adoption strategies.

### Projects (map onto the "mission" / pipeline page template in Section 7 — only fill sections the source data supports)
1. **Latitude and Longitudinal Path Planning in Autonomous Vehicle** — *Jul 2023–May 2024*
   - Designed and implemented control algorithms for precise lateral and longitudinal path planning in autonomous vehicles using MATLAB and Python.
   - Domain: Autonomous Vehicles / Control & Planning. Technologies: MATLAB, Python.

2. **Prospects of Retrofitting ICE Vehicles to EVs in Nepal** — *Jan 2024–May 2024*
   - Comparative study of 12 international case studies (Europe, North America, Asia).
   - Developed actionable policy recommendations on EV infrastructure, cost-benefit models, and retrofitting methods for Nepal.
   - Domain: Policy / Automotive Engineering research.

3. **Design and Development of Low-Cost Fuel Cell Hybrid Scooter** — *Jun 2022–May 2023*
   - Modeled hybrid powertrain systems in MATLAB.
   - Analyzed vehicle frame structures for structural integrity and lightweight design.
   - Domain: Mechanical / Powertrain Engineering. Technologies: MATLAB.

4. **Design and Fabrication of a Prototype SCARA Robot** — *Apr 2021–Dec 2021*
   - Implemented Arduino-based control with potentiometers for actuation.
   - Achieved: 800g payload capacity, 30cm working arc, 15cm vertical reach for pick-and-place.
   - Domain: Robotics / Mechatronics. Technologies: Arduino.

### Leadership & Volunteer Experience (use on `/portfolio/workshops` and/or the experience trajectory)
- **Kathmandu University Robotics Club, Dhulikhel, Nepal (2020–2024)**
  - *President:* Led Aavishkar '24 (3,500+ attendees, 19 institutions, 5 robotics competitions, 7 STEM workshops); partnered with 15+ college communities and increased revenue 3x; provided hands-on robotics training to 200+ students in collaboration with local municipalities.
  - *Event Manager:* Led a 50-member team executing 10+ workshops on robotics, hackathons, and bot competitions.
  - *Vice Secretary:* Managed meetings, communications, projects, and secured funding for projects and competitions.
- **Amnesty International, Kathmandu University Youth Network — Member, Dhulikhel, Nepal — Sept 2019–Apr 2023**
  - Co-organized an "Idea, Innovation, and Industry" online seminar.
  - Instructed 110+ students on sanitation and climate change in a 2-day community program.

### Awards
1. **Re:Invent 2026 All Builders Welcome Grant** — Amazon Web Services (AWS) — *Nov–Dec 2026*: Fully funded award selected by AWS to attend re:Invent 2026 in Las Vegas, NV, for demonstrated potential in tech.
2. **Seeds for the Future — Top 4 from Nepal** — Huawei Nepal — *Aug–Sept 2023*: Completed a 9-day study trip to China, including visits to Huawei headquarters and technology hubs, focusing on robotics, AI, and telecommunications.
3. **Army Public School Scholarship — Top 9 from Nepal** — Indian Embassy — *May 2012–May 2019*: Full scholarship for seven consecutive years; maintained a top-two class rank for five consecutive years.

### Certifications
1. **Machine Learning Specialization** (Andrew Ng) — DeepLearning.AI — *Aug–Current*: Building and training ML models in Python using NumPy, scikit-learn, and TensorFlow — from linear/logistic regression to neural networks, decision trees, and ensemble methods (random forests, boosted trees).
2. **PyTorch for Deep Learning Professional Certificate** — DeepLearning.AI — *Sep–Current*: Building neural networks from scratch in PyTorch; working with TorchVision and Hugging Face models; fine-tuning pretrained models; exploring Siamese networks, ResNets, and Transformers; preparing models for deployment with ONNX, MLflow, pruning, and quantization.

### Blog
No posts exist yet. Build the `/blog` and `/blog/[slug]` templates and category system (Robotics, AI, Engineering, Research, Learning) with 1–2 clearly-labeled placeholder posts so the template is demonstrably working, but do not present placeholder content as real accomplishments.

---

## 5. Visual Design System

**Palette** (dark, restrained — one accent color used for interactive/active states only):
```
Background:        #05070A
Primary surface:    #0A0F14
Secondary surface:  #101820
Primary text:       #F3F5F7
Secondary text:     #9BA6B2
Accent (active/nav): electric cyan/blue
Success:            green   (used only for "operational"/completed states)
Warning:            amber   (used only for "in progress"/uncertain states)
Error:              red     (used only for genuine error/broken states)
```
Do not use more than one accent color as decoration at once. Accent colors represent *states*, not decoration — e.g. cyan = active nav item, green = "Completed" project status, amber = "Ongoing," red only if something is genuinely broken (should basically never appear).

**Typography:** Headings in the geometric sans; body in the readable sans; monospace only for short technical labels like coordinates, status codes, or mission IDs (e.g. `MISSION 004`, `STATUS: ACTIVE`) — never for paragraphs.

---

## 6. Data Model (`/data` directory)

Create typed content files so the site is maintainable:

```
/data/profile.ts        -> identity, mission statement, research interests
/data/education.ts
/data/skills.ts          -> { category, name, evidenceProjectIds[] }[]
/data/experience.ts       -> professional + research, matching this shape:
  type Experience = {
    id: string; title: string; organization: string; location: string;
    startDate: string; endDate: string; type: "professional" | "research";
    summary?: string; responsibilities: string[]; technologies?: string[];
    relatedProjectIds?: string[];
  }
/data/projects.ts
  type Project = {
    id: string; slug: string; title: string; category: string;
    objective: string; period: string; technologies: string[];
    problem?: string; environment?: string; perception?: string;
    decision?: string; planning?: string; control?: string;
    implementation?: string; results?: string; limitations?: string;
    futureWork?: string; status: "Completed" | "Ongoing" | "Research";
  }
/data/leadership.ts
/data/awards.ts
/data/certifications.ts
/data/blog.ts
```
Populate every field you can from Section 4. Leave fields `undefined`/omitted rather than inventing content — the project detail template (Section 7) already supports partial data.

---

## 7. Page-by-Page Behavior

### `/` — Home
1. **System boot** (first visit only — cinematic; returning visits get an abbreviated ~0.5s version; `prefers-reduced-motion` gets a static version): a short animated checklist —
   ```
   SYSTEM INITIALIZING...
   PERCEPTION ........ ONLINE
   LOCALIZATION ...... ONLINE
   PLANNING .......... ONLINE
   CONTROL ........... ONLINE
   MULTI-AGENT ....... ONLINE
   SYSTEM READY
   ```
2. **Hero:** subtle coordinate-grid background → a sensor "scan" sweep animation → identity reveal:
   ```
   TARGET DETECTED
   JYOTISH KUMAR JHA
   MECHANICAL ENGINEER
   ROBOTICS / AI / AUTONOMOUS SYSTEMS
   ```
   Primary CTA `[ EXPLORE SYSTEM ]` → scrolls/links into the page; secondary CTA `[ VIEW PROJECTS ]` → `/portfolio/projects`. Content must be fully readable/usable even if the animation is skipped or disabled.
3. **Current State panel** (state-estimation metaphor, not a plain bio block) using the mission statement + research interests from Section 4.
4. **Featured Missions:** 3–4 featured project cards linking into `/portfolio/projects/[slug]`.

### `/skills`, `/skills/soft`, `/skills/graph`
- `/skills`: technical skills grouped as in Section 4, each skill showing "USED IN → [project/experience names]" rather than a percentage bar.
- `/skills/soft`: soft/leadership-derived skills (e.g. team leadership, mentorship, curriculum design, public speaking) drawn only from the leadership/experience data already given — don't invent unrelated soft skills.
- `/skills/graph`: interactive capability graph (Perception/Planning/Control-style clustering is optional flavor — only cluster skills under categories genuinely supported by the CV, e.g. Programming, Software, Microcontrollers). Hover = highlight node + connected evidence; click = open detail. Must degrade to a readable list on mobile and via keyboard.

### `/experience`, `/experience/professional`, `/experience/research`, `/experience/certifications`
- `/experience`: trajectory visualization (a connected node path) across education → research → professional roles in chronological order, purely from Section 4 dates.
- Each node, on click, reveals role/organization/dates/responsibilities/technologies without forcing a long animation first.
- `/experience/professional` and `/experience/research`: full readable detail lists (this is the "understand it without animation" fallback).
- `/experience/certifications`: the two certifications, full detail.

### `/portfolio`, `/portfolio/projects`, `/portfolio/projects/[slug]`, `/portfolio/workshops`, `/portfolio/research`
- `/portfolio`: mission-map overview (project nodes connected to a central node); each node links to its detail page; must also provide a plain list/grid fallback for accessibility and mobile.
- `/portfolio/projects`: grid of project cards using the template in Section 3 (Mission ID / Title / Domain / Objective / System / Status / `[ ENTER MISSION ]`).
- `/portfolio/projects/[slug]`: use only the pipeline sections a given project's data actually supports (Problem → Environment → Perception → Decision → Planning → Control → Implementation → Results → Limitations → Future Work). Do not force all 10 sections onto every project — the four real projects in Section 4 mostly support Problem/Objective, Technologies, and Results only; that's fine, keep the rest omitted rather than padded.
- `/portfolio/workshops`: Kathmandu University Robotics Club leadership work + Amnesty International volunteering, presented as "missions" too.
- `/portfolio/research`: NARC and NAST research internships, and the retrofitting-ICE-to-EV project.

### `/blog` and `/blog/[slug]`
Category filter UI (Robotics/AI/Engineering/Research/Learning); simpler, more readable visual treatment than the rest of the site — content readability wins over theme here.

### `/contact`
"Communication node" framing:
```
COMMUNICATION NODE
STATUS: AVAILABLE
CHANNELS
EMAIL   → jyotishkumarjha48@gmail.com
LINKEDIN → linkedin.com/in/jyotishkrjha/
[ INITIATE CONNECTION ]
```
Real `mailto:` and LinkedIn links — no fake "connection established" messaging after a real click unless it's clearly labeled as a UI animation, not a claim that a connection actually happened.

---

## 8. Animation Rules

Every animation must map to a real robotics concept (perception/detection/localization/planning/control/feedback) — reject anything that's decoration only. Animation hierarchy, high to low priority: **Critical UX animation → meaningful robotics-concept animation → micro-interaction → ambient decoration.** Ambient decoration never wins over the higher tiers.

Hard rules:
- Respect `prefers-reduced-motion` everywhere — provide a static/instant equivalent.
- No page transition should block navigation for more than ~0.5–1.0s; provide a direct route if a cinematic transition would take longer.
- Pause/stop offscreen animations; clean up all `requestAnimationFrame`/listeners on unmount.
- No animation should ever hide otherwise-accessible content — the full text/data must exist in the DOM and be readable even with JS/motion disabled where feasible.

---

## 9. Accessibility (non-negotiable)

Semantic HTML, full keyboard navigation, visible focus states, sufficient color contrast, alt text on all images, honor `prefers-reduced-motion`, readable font sizes, screen-reader-sensible landmark structure, and never convey information (like project status) through color alone — pair color with a text label (e.g. "● Completed" not just a green dot).

---

## 10. Performance

Lazy-load heavy visualizations and any 3D/canvas work; optimize images via `next/image`; avoid unnecessary WebGL; keep particle counts low if used at all; prefer GPU-friendly CSS transforms over layout-thrashing animations.

---

## 11. Content Integrity Rules (hard constraints)

1. Never invent an achievement, publication, employer, metric, or date beyond Section 4.
2. Never upgrade "familiar with" into "expert," and never add skill percentages.
3. Never claim an algorithm/technology was used on a project unless Section 4 says so.
4. Label any purely illustrative/conceptual diagram as `CONCEPTUAL VISUALIZATION` if it could be mistaken for real measured data.
5. If a template section (e.g. "Perception" on a project page) has no real data, omit it — don't fill it with generic robotics flavor text presented as fact.

---

## 12. Build Phases (do them in this order)

1. **Skeleton:** Next.js app router project, all routes from Section 3 created with placeholder content, nav + footer + basic layout, Tailwind configured, fonts loaded. No animation yet. `next build` should already pass.
2. **Content:** populate `/data/*.ts` fully from Section 4; wire pages to read from data files.
3. **Design system:** apply the palette/typography from Section 5 across all components; build the shared status/badge components (Completed/Ongoing/Research).
4. **Robotics interaction layer:** capability graph, experience trajectory, mission map — as real, navigable, keyboard-accessible components (with a non-graph fallback list for accessibility/mobile).
5. **Cinematic layer:** boot sequence, hero scan animation, page-transition motion — added last, and only once every route works perfectly with motion disabled.
6. **Audit pass:** run through Section 9 (accessibility) and Section 10 (performance) checklists; fix `next build` warnings; test keyboard-only navigation end to end.
7. **Deploy:** push to GitHub, connect the repo in Vercel (Framework Preset: Next.js, no special build settings needed), confirm the production URL renders correctly on desktop and mobile, and confirm `prefers-reduced-motion` works in production.

---

## 13. Definition of Done

- Every route in Section 3 exists, is reachable from navigation, and shows real content from Section 4.
- The robotics metaphor is visible in structure (not just decoration) per the Section 1 test.
- Site is fully usable with animations disabled and via keyboard only.
- No fabricated facts anywhere (spot-check against Section 4).
- `next build` is clean and the site is live on a Vercel URL.
