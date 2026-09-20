# JKJ Robotics Portfolio — Visual & Interaction Extension Specification

> **Purpose:** This document is an additive implementation specification for the existing `JKJ Robotics Portfolio — Build Prompt for AI Coding Agent`.
>
> **Compatibility rule:** Do not replace, contradict, or rewrite the existing master specification. This document extends it with a more explicit visual language for the hero, autonomy-stack animation, robotics visualizations, icons, and the Blog/Featured Missions card system.
>
> The existing master specification remains authoritative for routes, locked content, palette, accessibility, performance, data integrity, tech stack, and build phases. fileciteturn0file0L16-L24

---

# 1. Implementation Priority

The coding agent must treat this document as a **visual/interaction layer on top of the existing architecture**.

Keep the existing:

- Next.js App Router architecture
- TypeScript
- Tailwind
- Framer Motion
- `/data` content architecture
- existing routes
- existing locked content
- existing dark palette
- existing accessibility requirements
- existing performance requirements
- existing content-integrity rules

The existing site already defines the autonomous-system metaphor as:

**Perception → State Estimation → Decision → Planning → Control → Execution → Feedback**

This extension makes that model more explicit and visually develops it into a closed-loop autonomy architecture. fileciteturn0file0L18-L24

---

# 2. Refined Autonomy Architecture

Use the following conceptual stack for visual storytelling:

```text
                         ENVIRONMENT
                              │
                              ▼
                           SENSING
                              │
                              ▼
                         PERCEPTION
                              │
                              ▼
                    STATE ESTIMATION
                              │
                              ▼
                       WORLD MODEL
                              │
                              ▼
                         DECISION
                              │
                              ▼
                    TASK PLANNING
                              │
                              ▼
                    MOTION PLANNING
                              │
                              ▼
               MULTI-AGENT COORDINATION
                              │
                              ▼
                          CONTROL
                              │
                              ▼
                           ACTION
                              │
                              ▼
                         ENVIRONMENT
                              │
                              └───────────────┐
                                              │
                                              ▼
                                           FEEDBACK
                                              │
                                              └──→ PERCEPTION
```

## Important conceptual distinction

Do not visually collapse everything into:

```text
PERCEPTION → PLAN → CONTROL
```

The portfolio should communicate that autonomous systems have multiple intermediate computational layers.

In particular:

- **Perception** transforms sensor observations into meaningful environmental information.
- **State estimation** represents the system's current state.
- **World modeling** represents relevant environmental structure.
- **Decision-making** selects or evaluates possible actions.
- **Task planning** concerns higher-level objectives.
- **Motion planning** produces feasible movement through the environment.
- **Multi-agent coordination** handles interactions among multiple autonomous agents.
- **Control** tracks or regulates the desired behavior.
- **Action** changes the physical state of the system.
- **Feedback** closes the loop.

This is a **visual conceptual architecture**, not a claim that every project in the portfolio implements every layer.

---

# 3. Core Creative Direction

The website should feel like:

> **A research interface for understanding how machines transform perception into action.**

The website should NOT feel like:

- a generic AI portfolio
- a cyberpunk landing page
- a gaming dashboard
- a cryptocurrency interface
- a humanoid-robot showcase
- a collection of random futuristic effects

The futuristic quality should come from:

- spatial computation
- geometric visualization
- motion planning
- state transitions
- autonomous agents
- sensor perception
- trajectory generation
- feedback loops
- constrained decision-making

The existing master specification explicitly rejects generic cyberpunk clichés, meaningless HUD elements, decorative AI imagery, fake telemetry, and arbitrary skill percentages. Preserve those constraints. fileciteturn0file0L24-L26

---

# 4. Visual Principle

Every major visual element should answer at least one of these questions:

```text
What is the system sensing?

What does the system know?

What state is it in?

What decision is it making?

What path is it planning?

How are agents coordinating?

How is the system controlling motion?

What changed after the action?

How does feedback alter the next action?
```

If a visual element answers none of these questions, it should probably not exist.

---

# 5. Homepage Hero — Required Composition

The hero should remain consistent with the existing homepage architecture:

```text
SYSTEM BOOT
      ↓
HERO
      ↓
CURRENT STATE
      ↓
FEATURED MISSIONS
```

The hero is an **identity + autonomous-system visualization**, not the entire portfolio.

The existing master specification already defines the hero as a coordinate-grid environment with a sensor scan and identity reveal. fileciteturn0file0L223-L243

Extend that concept as follows.

## Desktop composition

```text
┌───────────────────────────────────────────────────────────────┐
│ JKJ                         SKILLS EXPERIENCE PORTFOLIO ...   │
│                                                               │
│                                                               │
│  SYSTEM / AUTONOMOUS SYSTEM 001                               │
│                                                               │
│                 JYOTISH KUMAR JHA                             │
│                                                               │
│             I BUILD SYSTEMS THAT                              │
│             PERCEIVE, REASON, PLAN & ACT.                     │
│                                                               │
│       ROBOTICS • AI • AUTONOMOUS SYSTEMS                      │
│                                                               │
│             [ EXPLORE SYSTEM ] [ VIEW PROJECTS ]              │
│                                                               │
│                                                               │
│       ·  ·      ·       ·        ·       ·                    │
│           ╲          ◉ AGENT          ╱                       │
│            ╲──────────┬────────────╱                         │
│                       │                                       │
│                 planned path                                  │
│                       │                                       │
│                ◇ TARGET                                       │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

The actual implementation may vary. Preserve strong whitespace and typography.

---

# 6. Hero Message Hierarchy

Use the existing locked identity:

```text
JYOTISH KUMAR JHA
```

Use:

```text
MECHANICAL ENGINEER
ROBOTICS / AI / AUTONOMOUS SYSTEMS
```

For the main statement, use:

```text
I BUILD SYSTEMS THAT
PERCEIVE, REASON, PLAN & ACT.
```

Optional supporting line:

```text
Exploring how autonomous systems perceive complex environments,
make decisions, coordinate, and plan reliable motion.
```

Do not place the entire research statement in the hero.

The detailed mission statement and research interests belong in the Current State / Research areas. The locked master content already provides the full mission statement and research interests. fileciteturn0file0L89-L92

---

# 7. Hero Visual Narrative

The hero animation should tell a short story.

## Phase 1 — Empty environment

Show:

```text
dark spatial field
subtle coordinate grid
small number of environmental points
```

Do not immediately overwhelm the visitor.

---

## Phase 2 — Sensing

A restrained scan passes through the environment.

Visual:

```text
sensor sweep
        ↓
raw points
        ↓
detected geometry
```

System label:

```text
SENSING
```

---

## Phase 3 — Perception

Environmental points become meaningful entities.

Examples:

```text
OBSTACLE
FREE SPACE
TARGET
AGENT
BOUNDARY
```

Do not claim these are real sensor measurements. They are a visual metaphor.

If the visualization could be mistaken for measured data, label it:

```text
CONCEPTUAL VISUALIZATION
```

This follows the existing content-integrity requirement. fileciteturn0file0L304-L310

---

# 8. Hero World Model

The raw observations should transition into a simplified spatial representation.

Possible visual:

```text
RAW POINTS

· · · · · · ·
 · · ███ · ·
· · · ███ · · ·
  · · · · · ·

        ↓

WORLD MODEL

┌────────────────────┐
│                    │
│   ███              │
│   ███       ◇      │
│                    │
│        ●           │
│                    │
└────────────────────┘
```

Use:

- occupancy-like regions
- obstacle boundaries
- target markers
- agent position
- coordinate frame

Do not make the visual unnecessarily dense.

---

# 9. Hero Decision Layer

Once the environment exists, introduce a subtle decision graph.

```text
                  GOAL
                   ◇
                   │
             ┌─────┴─────┐
             │            │
           PATH A       PATH B
             │            │
             └─────┬──────┘
                   │
                DECISION
```

The system can briefly show multiple candidate trajectories.

Do not display fabricated numerical scores.

Instead of:

```text
PATH A = 93.2%
PATH B = 84.7%
```

use qualitative state labels:

```text
FEASIBLE
CONSTRAINED
SELECTED
```

---

# 10. Motion Planning Layer

The selected trajectory should become visually prominent.

Show:

```text
START ● ───────────────╮
                       ╰───────╮
                               ╰──── ◇ GOAL
```

Potential alternative paths remain faint.

The selected path becomes the active trajectory.

Visual metaphor:

```text
candidate trajectories
        ↓
constraint evaluation
        ↓
selected trajectory
```

This should communicate motion planning without claiming a particular algorithm.

---

# 11. Multi-Agent Coordination Layer

Introduce 2–4 abstract autonomous agents.

Example:

```text
            ◇ GOAL A

       ● A ───────────╮
                      │
                      │
             ● B ────┼──── ◇ GOAL B
                      │
       ● C ───────────╯
```

Agents should:

- have distinct positions
- have individual targets
- have individual trajectories
- briefly show communication/coordination links
- adjust paths when trajectories conflict

Use very subtle communication lines.

The purpose is to visually express:

```text
MULTI-ROBOT COORDINATION
```

not to create a decorative swarm.

---

# 12. Control Layer

After planning, the agent should move along its selected path.

Show a subtle difference between:

```text
DESIRED TRAJECTORY
```

and:

```text
ACTUAL STATE
```

Then allow the control loop to reduce the deviation.

Visual:

```text
desired ────────────────────────→

actual  ───────╮
               ╰────╮
                    ╰──────────→
```

The effect should be subtle.

Do not fill the hero with control-system equations.

---

# 13. Feedback Loop

At the end of the animation:

```text
ACTION
  ↓
NEW OBSERVATION
  ↓
UPDATED STATE
  ↓
UPDATED PLAN
```

The visual should return to the perception stage.

This creates a continuous loop:

```text
PERCEIVE
   ↓
REASON
   ↓
PLAN
   ↓
COORDINATE
   ↓
CONTROL
   ↓
ACT
   ↓
FEEDBACK
   ↺
```

This loop is the central visual identity of the site.

---

# 14. Hero Animation Timing

Target total duration:

```text
4–8 seconds
```

Suggested:

```text
0.0–1.0   environment initialization
1.0–2.0   sensing
2.0–3.0   perception/world model
3.0–4.0   decision + candidate paths
4.0–5.0   motion planning
5.0–6.0   multi-agent coordination
6.0–7.0   control/action
7.0–8.0   feedback
```

Do not force the user to wait.

The existing master specification requires that navigation never be blocked by animation for more than approximately 0.5–1.0 seconds and that reduced-motion users receive a static equivalent. fileciteturn0file0L280-L288

Therefore:

- Hero animation may continue after content is usable.
- CTA must be immediately clickable.
- Returning visitors should receive a shorter version.
- Reduced-motion users receive a static hero.

---

# 15. Hero Animation Technical Strategy

Prefer:

```text
SVG
CSS
Framer Motion
```

for:

- trajectories
- nodes
- scan lines
- coordinate grids
- agent movement
- target markers
- simple graphs

Avoid WebGL unless genuinely necessary.

The master specification already recommends SVG/CSS for trajectories and diagrams and reserves Three.js/React Three Fiber for optional advanced enhancements. fileciteturn0file0L30-L36

---

# 16. Hero Component Architecture

Create reusable components:

```text
Hero/
├── HeroShell
├── HeroIdentity
├── SensorSweep
├── EnvironmentField
├── PerceptionLayer
├── WorldModel
├── DecisionGraph
├── MotionPlanner
├── MultiAgentLayer
├── ControlLayer
├── FeedbackLoop
└── HeroCTA
```

Do not create one giant hero component.

---

# 17. Reusable Robotics Visualization Components

Create reusable visual primitives:

```text
<CoordinateGrid />

<SensorSweep />

<PointCloud />

<TargetMarker />

<RobotAgent />

<Trajectory />

<PlanningGraph />

<CommunicationLink />

<StateIndicator />

<CoordinateFrame />

<FeedbackArrow />

<ConstraintRegion />
```

These components should be reusable on:

- Home
- Skills Graph
- Portfolio
- Project Detail
- Research

---

# 18. Robotics Icon System

Create a consistent icon family.

Required concepts:

```text
Sensing
Perception
State Estimation
World Model
Decision
Task Planning
Motion Planning
Multi-Agent Coordination
Control
Action
Feedback
Research
Project
Experience
Skills
Blog
Contact
```

## Style

```text
geometric
monoline
technical
minimal
SVG-friendly
consistent stroke width
```

Do not use:

```text
emoji
cartoon robots
3D icons
generic AI brains
random circuit symbols
```

---

# 19. Icon Mapping

Recommended semantic mapping:

```text
Sensing
→ radar/sensor sweep

Perception
→ detected point cluster

State Estimation
→ coordinate frame + pose marker

World Model
→ spatial map

Decision
→ branching graph

Task Planning
→ ordered task nodes

Motion Planning
→ trajectory

Multi-Agent Coordination
→ connected agents

Control
→ feedback arrow

Action
→ moving agent

Feedback
→ closed-loop arrow
```

The icon itself should remain abstract and simple.

---

# 20. Research Visual Language

The user's research interests should shape the visual system:

```text
Motion Planning
Multi-Robot Coordination
Integrated Task and Motion Planning (TAMP)
Algorithmic Decision-Making
Computational Constraints
Geometric Constraints
Complex Environments
Uncertainty
```

The existing locked content identifies these as the research interests. fileciteturn0file0L89-L92

Visual relationships:

```text
                    AUTONOMOUS SYSTEMS
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
         PERCEPTION     DECISION     PLANNING
                            │            │
                            │      ┌─────┴─────┐
                            │      ↓           ↓
                            │   TASK         MOTION
                            │   PLANNING     PLANNING
                            │                   │
                            └────────┬──────────┘
                                     ↓
                             MULTI-AGENT
                             COORDINATION
                                     ↓
                                  CONTROL
```

Do not imply that this is the implementation architecture of a specific research project. It is the site's conceptual research map.

---

# 21. Homepage Featured Missions

The existing homepage already calls for **3–4 Featured Missions** linking to project detail pages. fileciteturn0file0L242-L243

The Featured Missions cards may reuse the BlogCard visual language defined below, but they must remain semantically project/mission cards.

Recommended card metadata:

```text
MISSION 001
PROJECT TITLE
DOMAIN
Short objective
Status
[ ENTER MISSION ]
```

Do not change the existing project-page route architecture.

---

# 22. Blog Card — Required Component

Create one reusable component:

```text
BlogCard
```

The same visual component may be adapted for:

```text
/blog
```

and, where appropriate:

```text
Featured Missions
```

Do not duplicate two separate card implementations if their visual behavior is substantially the same.

---

# 23. Blog Card Layout

Top-to-bottom structure:

```text
┌──────────────────────────────────────────────┐
│                                              │
│                  IMAGE                       │
│                                              │
│  [ROBOTICS •]                          ♡/🔖  │
│                                              │
├──────────────────────────────────────────────┤
│  ◉ JKJ                                       │
│                                              │
│  BLOG POST TITLE                             │
│  BLOG POST TITLE...                          │
│                                              │
│  Short one-line description or excerpt...   │
│                                              │
│  ◷ 6 min                         [ READ ]    │
└──────────────────────────────────────────────┘
```

---

# 24. Blog Card Image Area

Aspect ratio:

```text
16:9
```

or another visually compatible landscape ratio.

Use:

```text
dark gradient overlay
```

The overlay must be subtle.

Purpose:

- preserve readability if overlay text is introduced later
- integrate image with the dark site
- maintain consistent card appearance

Do not over-darken actual project photography.

Use `next/image` according to the existing performance requirements. fileciteturn0file0L298-L300

---

# 25. Blog Category Badge

Top-left of image:

```text
[ ● ROBOTICS ]
```

Categories:

```text
ROBOTICS
AI
ENGINEERING
RESEARCH
LEARNING
```

Badge:

```text
rounded pill
secondary surface
small technical typography
```

The dot uses the site's existing semantic state palette.

Allowed visual state colors:

```text
cyan
green
amber
```

Do not introduce additional decorative category colors.

The existing design system defines cyan/blue as the active accent, green as operational/completed, amber as ongoing/uncertain, and red only for genuine errors. fileciteturn0file0L168-L182

---

# 26. Category Color Mapping

Use a deterministic mapping rather than arbitrary colors.

Recommended:

```text
ROBOTICS
→ cyan

AI
→ cyan

ENGINEERING
→ green

RESEARCH
→ amber

LEARNING
→ amber
```

The mapping is a UI categorization convention, not a system-status claim.

Keep it subtle.

---

# 27. Blog Bookmark Button

Top-right of image:

```text
bookmark outline icon
```

On click:

```text
outline → filled
```

Behavior:

- UI only
- no backend
- local component state is acceptable
- localStorage may be used for persistence

Example state:

```ts
const [saved, setSaved] = useState(false)
```

Optional persistence:

```text
localStorage:
savedBlogPosts = [...]
```

Do not use a heart icon.

The interaction should represent:

```text
SAVE FOR LATER
```

not:

```text
LIKE
```

---

# 28. Bookmark Accessibility

The bookmark must be:

```text
<button>
```

with:

```text
aria-label="Save post"
```

and when active:

```text
aria-label="Remove post from saved items"
```

Keyboard accessible.

Clicking the bookmark must NOT navigate to the blog post.

Use event propagation control appropriately.

Example behavior:

```text
bookmark click
→ stopPropagation()
→ toggle saved state
```

Do not make the entire card a nested interactive-link mess.

Prefer a semantically valid accessible card architecture where the main navigation target and bookmark control remain separate interactive elements.

---

# 29. Author / Source Row

Below the image:

```text
◉  JKJ
```

or:

```text
◉  Jyotish Kumar Jha
```

The circular mark should use the site's logo/JKJ mark.

Keep it visually similar to:

```text
AI · Anthropic
```

style metadata rows.

Do not introduce a new visual brand.

---

# 30. Blog Title

Rules:

```text
bold
1–2 lines
ellipsis when necessary
```

Use CSS line clamping.

Example:

```css
line-clamp: 2;
```

Do not allow one card to become dramatically taller than another because of a long title.

---

# 31. Blog Excerpt

Rules:

```text
secondary text
1–2 lines maximum
ellipsis
```

Keep the excerpt informative but compact.

The card is an index/preview, not the article itself.

---

# 32. Blog Meta Row

Bottom-left:

```text
◷ 6 min
```

Optional:

```text
◈ Intermediate
```

Only display complexity/difficulty if that metadata genuinely exists.

For normal blog posts, read time is sufficient.

Do not invent difficulty labels.

---

# 33. Blog CTA

Right side:

```text
[ READ ]
```

Use the existing primary button treatment.

Important:

The site's accent button should be:

```text
cyan accent
outlined / control-like
```

rather than a large solid-filled generic SaaS button.

The CTA should visually resemble:

```text
SYSTEM CONTROL
```

not:

```text
BUY NOW
```

---

# 34. Blog Card Surface

Use the existing secondary surface:

```text
#101820
```

Border:

```text
1px solid slightly lighter neutral
```

Radius:

```text
~12px
```

Do not introduce another card color.

This directly follows the existing design system's secondary surface definition. fileciteturn0file0L170-L180

---

# 35. Blog Card Hover

Desktop hover:

```text
translateY(-4px)
border-color → accent
```

Transition:

```text
≤ 200ms
```

Do not add:

- excessive shadow
- scale > 1.02
- glow explosion
- particle effects
- perspective rotation

The card should feel precise.

---

# 36. Reduced Motion for Blog Cards

With:

```css
@media (prefers-reduced-motion: reduce)
```

disable:

```text
translateY
scale
animated image effects
```

Keep only:

```text
border-color change
```

The existing master specification makes reduced-motion support mandatory across the site. fileciteturn0file0L280-L288

---

# 37. Blog Grid

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Use responsive CSS grid.

Keep consistent card heights where practical without cutting off important content.

---

# 38. Blog Card Keyboard Model

The card must be keyboard accessible.

Required:

```text
visible focus ring
```

The primary navigation target must be clear.

The bookmark remains independently keyboard accessible.

Do not create inaccessible nested anchors.

Recommended architecture:

```text
article
├── image
├── content
├── main link / title link
├── metadata
├── read CTA
└── bookmark button
```

If the design requires the whole card to appear as one focusable region, implement it using a valid accessible interaction pattern rather than nesting a button inside an anchor.

---

# 39. Blog Card Data Model

Extend `/data/blog.ts` only as an additive change.

Suggested:

```ts
type BlogPost = {
  slug: string;
  title: string;
  category: "robotics" | "ai" | "engineering" | "research" | "learning";
  excerpt: string;
  image?: string;
  author?: string;
  readTimeMinutes?: number;
  difficulty?: string;
  publishedAt?: string;
  featured?: boolean;
};
```

Do not require every field.

No fake posts should be presented as real.

The existing master specification says there are currently no real blog posts and requires clearly labeled placeholder posts for demonstrating the template. Preserve that rule. fileciteturn0file0L163-L164

---

# 40. Blog Page Visual Hierarchy

The Blog page should be:

```text
BLOG
Ideas, experiments and notes from the engineering journey.

[ ALL ] [ ROBOTICS ] [ AI ] [ ENGINEERING ] [ RESEARCH ] [ LEARNING ]

┌──────────┐ ┌──────────┐ ┌──────────┐
│ BlogCard │ │ BlogCard │ │ BlogCard │
└──────────┘ └──────────┘ └──────────┘
```

The master specification explicitly says the blog should use a simpler, more readable visual treatment than the rest of the site. Preserve this. fileciteturn0file0L263-L264

The robotics theme should remain present through:

- typography
- metadata
- subtle grid
- category states
- restrained interactions

Do not make article reading difficult.

---

# 41. Featured Missions Reuse

The `BlogCard` component may be visually reused for:

```text
Featured Missions
```

but the data should remain typed as project data.

Example:

```text
BlogCard
      ↑
shared card shell
      ↓
┌───────────────┐
│ Blog content  │
└───────────────┘

┌───────────────┐
│ Mission data  │
└───────────────┘
```

Do not call project cards "blog posts."

Use the same visual grammar while changing:

```text
READ
```

to:

```text
ENTER MISSION
```

and showing project status where appropriate.

---

# 42. Visual State Language

Use the existing state semantics consistently:

```text
CYAN
→ active / selected / navigation / primary interaction

GREEN
→ completed / operational

AMBER
→ ongoing / uncertain

RED
→ genuine error only
```

Never use colors merely because they "look futuristic."

The master specification explicitly establishes state colors as semantic rather than decorative. fileciteturn0file0L177-L182

---

# 43. Global Motion Language

All website animations should feel like:

```text
TRAJECTORY
STATE TRANSITION
FEEDBACK
DETECTION
PLANNING
COORDINATION
```

Examples:

### Navigation

```text
TARGET DETECTED
→ PATH PLANNED
→ DESTINATION
```

### Hover

```text
OBJECT DETECTED
```

### Click

```text
COMMAND ISSUED
```

### Page loading

```text
STATE ESTIMATION
```

### Project opening

```text
MISSION TARGET ACQUIRED
```

Do not literally display these labels everywhere. They are animation design principles.

---

# 44. Ambient Background

The ambient background may contain:

```text
very subtle grid
few moving points
occasional sensor sweep
coordinate markers
faint trajectories
```

It must remain low contrast.

Priority:

```text
content > interaction > visualization > ambience
```

If the background distracts from typography, reduce it.

---

# 45. Avoid These Visual Mistakes

Do NOT implement:

```text
❌ giant 3D humanoid robot
❌ neon cyberpunk city
❌ endless glowing particles
❌ fake terminal screens
❌ fake hacking text
❌ random hexadecimal numbers
❌ decorative circuit-board backgrounds
❌ AI brain graphic
❌ excessive glassmorphism
❌ rainbow gradients
❌ fake sensor measurements
❌ fake algorithm performance
❌ fake telemetry
❌ arbitrary skill percentages
❌ 10-second page transitions
❌ animations that prevent clicking
```

The existing master specification already rejects most of these patterns. fileciteturn0file0L24-L26

---

# 46. Responsive Hero

Desktop:

```text
large spatial visualization
+
large typography
```

Tablet:

```text
smaller visualization
+
centered typography
```

Mobile:

```text
compact system visualization
+
strong typography
+
clear CTA
```

Do not attempt to preserve every desktop visual element on mobile.

On mobile, the autonomy stack can become:

```text
PERCEIVE
↓
REASON
↓
PLAN
↓
ACT
↺
```

while the detailed visualization is reduced.

---

# 47. Mobile Blog Card

Mobile card:

```text
┌──────────────────────────┐
│          IMAGE           │
│ [ROBOTICS]          🔖   │
├──────────────────────────┤
│ ◉ JKJ                    │
│                          │
│ Title                    │
│ Title...                 │
│                          │
│ Short excerpt...         │
│                          │
│ ◷ 6 min       [ READ ]   │
└──────────────────────────┘
```

Do not create horizontal overflow.

---

# 48. Accessibility Requirements

Preserve all accessibility requirements from the master specification:

- semantic HTML
- keyboard navigation
- visible focus
- contrast
- alt text
- reduced motion
- screen-reader-friendly landmarks
- no color-only information

The existing master specification explicitly defines these as non-negotiable. fileciteturn0file0L292-L295

Additional requirements for this extension:

```text
bookmark has accessible name
category has text label, not only color
trajectory visualization has accessible fallback
multi-agent visualization has accessible fallback
hero animation never contains information unavailable in static content
```

---

# 49. Performance Requirements

Do not allow the richer visual layer to compromise the existing performance goals.

Prefer:

```text
SVG
CSS
Framer Motion
```

before:

```text
Canvas
WebGL
Three.js
```

Lazy-load:

```text
large project imagery
advanced visualization
3D components
```

Pause offscreen animation.

The master specification requires lazy-loading heavy visualization, optimized images, limited WebGL, and GPU-friendly transforms. fileciteturn0file0L298-L300

---

# 50. Agent Implementation Order

Add this extension after the existing skeleton/content architecture is stable.

Recommended sequence:

```text
PHASE A
Verify existing master-spec implementation
        ↓
PHASE B
Implement shared visual primitives
        ↓
PHASE C
Implement Hero autonomy visualization
        ↓
PHASE D
Implement navigation/system-map interactions
        ↓
PHASE E
Implement BlogCard
        ↓
PHASE F
Reuse card language for Featured Missions
        ↓
PHASE G
Implement reduced-motion variants
        ↓
PHASE H
Accessibility audit
        ↓
PHASE I
Performance audit
        ↓
PHASE J
Visual QA
```

Do not rebuild existing routes just to introduce the visual layer.

---

# 51. Agent Safety Rules

Before modifying code:

1. Read the existing master specification.
2. Inspect the current component structure.
3. Reuse existing design tokens.
4. Reuse existing routes.
5. Reuse existing data models where possible.
6. Add new fields only when necessary.
7. Do not duplicate existing components.
8. Do not replace working animations without a clear reason.
9. Do not invent content.
10. Do not introduce a new color system.
11. Do not introduce a new navigation system.
12. Do not introduce a second visual identity.

---

# 52. Definition of Done — Hero

The hero is complete when:

- [ ] Identity is immediately readable.
- [ ] Robotics/autonomy is immediately understandable.
- [ ] Perception is visually represented.
- [ ] World modeling is visually represented.
- [ ] Decision-making is visually represented.
- [ ] Motion planning is visually represented.
- [ ] Multi-agent coordination is represented subtly.
- [ ] Control/action is represented.
- [ ] Feedback closes the loop.
- [ ] Hero remains usable while animation runs.
- [ ] Reduced-motion version exists.
- [ ] Mobile version exists.
- [ ] No fabricated technical measurements appear.
- [ ] No generic cyberpunk effects dominate.

---

# 53. Definition of Done — BlogCard

- [ ] Reusable `BlogCard` component exists.
- [ ] 16:9 image area.
- [ ] Dark image overlay.
- [ ] Category badge.
- [ ] Category dot uses existing semantic color system.
- [ ] Bookmark icon is outline by default.
- [ ] Bookmark fills when saved.
- [ ] Bookmark does not navigate.
- [ ] Saved state works with local state or localStorage.
- [ ] Author/source row exists.
- [ ] Title clamps to 1–2 lines.
- [ ] Excerpt clamps to 1–2 lines.
- [ ] Read time appears when available.
- [ ] Difficulty appears only when actual data exists.
- [ ] `[ READ ]` CTA exists.
- [ ] Card uses `#101820`.
- [ ] Border is subtle.
- [ ] Hover lift is ≤ 200ms.
- [ ] Reduced-motion removes the lift.
- [ ] Desktop = 3 columns.
- [ ] Tablet = 2 columns.
- [ ] Mobile = 1 column.
- [ ] Keyboard focus works.
- [ ] Screen readers receive useful labels.
- [ ] No nested interactive-element accessibility violations.

---

# 54. Definition of Done — Overall Visual Theme

A visitor should be able to look at the site and understand:

```text
THIS IS ABOUT AUTONOMOUS SYSTEMS.
```

Without relying on:

```text
robot pictures
neon
glitch effects
decorative HUDs
```

The site should instead communicate:

```text
SENSING
     ↓
PERCEPTION
     ↓
STATE
     ↓
DECISION
     ↓
PLANNING
     ↓
COORDINATION
     ↓
CONTROL
     ↓
ACTION
     ↓
FEEDBACK
```

That loop is the visual identity.

---

# 55. Final Creative Direction

The final experience should feel as though the visitor is interacting with a research system that is itself demonstrating the principles of autonomous robotics.

The visitor enters.

The system perceives.

The environment becomes structured.

A state is established.

A target is identified.

Possible paths appear.

A plan is selected.

Agents coordinate.

Control executes the plan.

The system receives feedback.

The next state emerges.

Then the visitor chooses where to go.

That is the central metaphor:

> **The website does not merely talk about autonomous systems. Its interaction model demonstrates the logic of autonomous systems.**

However, usability always wins.

The website must remain a professional portfolio first and an experimental robotics interface second.
