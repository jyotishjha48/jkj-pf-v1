import { config, fields, singleton, collection } from "@keystatic/core";

export default config({
  storage: { kind: "local" },

  singletons: {
    // ── Site-wide settings & hero text ────────────────────────────────────
    siteSettings: singleton({
      label: "⚙️ Site Settings & Hero Text",
      previewUrl: "/",
      path: "content/site-settings",
      format: { data: "json" },
      schema: {
        siteName: fields.text({ label: "Site Name", defaultValue: "JKJ.ROBOTICS" }),
        navSystem: fields.text({ label: "Navigation: System", defaultValue: "SYSTEM" }),
        navSkills: fields.text({ label: "Navigation: Skills", defaultValue: "SKILLS" }),
        navExperience: fields.text({ label: "Navigation: Experience", defaultValue: "EXPERIENCE" }),
        navMissions: fields.text({ label: "Navigation: Missions", defaultValue: "MISSIONS" }),
        navLog: fields.text({ label: "Navigation: Log", defaultValue: "LOG" }),
        navConnect: fields.text({ label: "Navigation: Connect", defaultValue: "CONNECT" }),
        heroTagline: fields.text({ label: "Hero Tagline (top label)", defaultValue: "AUTONOMOUS SYSTEM 001" }),
        heroHeading: fields.text({ label: "Hero Main Heading", multiline: true, defaultValue: "I BUILD SYSTEMS THAT PERCEIVE, REASON, PLAN & ACT." }),
        heroSub: fields.text({ label: "Hero Sub-label 1 (title)", defaultValue: "MECHANICAL ENGINEER" }),
        heroSubtitle2: fields.text({ label: "Hero Sub-label 2 (domains)", defaultValue: "ROBOTICS / AI / AUTONOMOUS SYSTEMS" }),
        heroSupportingLine: fields.text({ label: "Hero Supporting Line", multiline: true }),
        heroCTA1: fields.text({ label: "Primary Button Text", defaultValue: "EXPLORE SYSTEM" }),
        heroCTA2: fields.text({ label: "Secondary Button Text", defaultValue: "VIEW PROJECTS" }),
        currentStateTitle: fields.text({ label: "Current State Section Heading", defaultValue: "System Overview" }),
        featuredMissionsTitle: fields.text({ label: "Featured Missions Section Heading", defaultValue: "Featured Projects" }),
        currentStateSubtitle: fields.text({ label: "Current State Section Label", defaultValue: "STATE ESTIMATION / CURRENT CONFIGURATION" }),
        featuredMissionsLabel: fields.text({ label: "Featured Missions Section Label", defaultValue: "MISSION FEED" }),
        skillsHeader: fields.text({ label: "Skills Page Header", defaultValue: "Technical Skills" }),
        experienceHeader: fields.text({ label: "Experience Page Header", defaultValue: "Career Trajectory" }),
        missionsHeader: fields.text({ label: "Missions Page Header", defaultValue: "Mission Overview" }),
        blogHeader: fields.text({ label: "Blog Page Header", defaultValue: "Blog" }),
        experienceIntro: fields.text({ label: "Experience Page Intro", multiline: true }),
        showExperienceTimeline: fields.checkbox({ label: "Show experience timeline", defaultValue: true }),
        showLeadershipSection: fields.checkbox({ label: "Show leadership section on Experience", defaultValue: true }),
        showAwardsSection: fields.checkbox({ label: "Show awards section on Experience", defaultValue: true }),
        footerText: fields.text({ label: "Footer Text", defaultValue: "JKJ.ROBOTICS — JYOTISH KUMAR JHA" }),
        contactStatus: fields.text({ label: "Contact Page Status", defaultValue: "STATUS: AVAILABLE" }),
        googleFormUrl: fields.text({ label: "Google Form Embed URL (paste the src= URL from the iframe)" }),
      },
    }),

    // ── Profile ────────────────────────────────────────────────────────────
    profile: singleton({
      label: "👤 Profile",
      path: "content/profile",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Full Name" }),
        title: fields.text({ label: "Title (e.g. Mechanical Engineer)" }),
        subtitle: fields.text({ label: "Subtitle (e.g. Robotics / AI / Autonomous Systems)" }),
        email: fields.text({ label: "Email" }),
        phone: fields.text({ label: "Phone" }),
        linkedin: fields.url({ label: "LinkedIn URL" }),
        website: fields.url({ label: "Personal Website URL" }),
        location: fields.text({ label: "Location" }),
        missionStatement: fields.text({ label: "Mission Statement", multiline: true }),
        researchInterests: fields.array(
          fields.text({ label: "Research Interest" }),
          { label: "Research Interests" }
        ),
      },
    }),

    // ── Education ────────────────────────────────────────────────────────
    education: singleton({
      label: "🎓 Education",
      previewUrl: "/experience",
      path: "content/education",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            institution: fields.text({ label: "Institution" }),
            image: fields.image({ label: "Education Image (optional)", directory: "public/uploads/education", publicPath: "/uploads/education/" }),
            location: fields.text({ label: "Location" }),
            degree: fields.text({ label: "Degree" }),
            graduationDate: fields.text({ label: "Graduation Date" }),
            gpa: fields.text({ label: "GPA" }),
          }),
          { label: "Education Entries" }
        ),
      },
    }),

    // ── Skills ───────────────────────────────────────────────────────────
    skills: singleton({
      label: "🔧 Skills",
      previewUrl: "/skills",
      path: "content/skills",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            name: fields.text({ label: "Skill Name" }),
            image: fields.image({ label: "Skill Image (optional)", directory: "public/uploads/skills", publicPath: "/uploads/skills/" }),
            category: fields.select({
              label: "Category",
              options: [
                { label: "Programming", value: "Programming" },
                { label: "Software", value: "Software" },
                { label: "Microcontrollers", value: "Microcontrollers" },
                { label: "Languages", value: "Languages" },
              ],
              defaultValue: "Programming",
            }),
            detail: fields.text({ label: "Detail / Sub-tools (optional)" }),
            evidenceProjectIds: fields.array(fields.text({ label: "Project ID" }), { label: "Evidence Projects" }),
            evidenceExperienceIds: fields.array(fields.text({ label: "Experience ID" }), { label: "Evidence Experiences" }),
          }),
          { label: "Skills" }
        ),
      },
    }),

    // ── Experience ────────────────────────────────────────────────────────
    experience: singleton({
      label: "💼 Experience",
      previewUrl: "/experience",
      path: "content/experience",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            title: fields.text({ label: "Job Title" }),
            image: fields.image({ label: "Experience Image (optional)", directory: "public/uploads/experience", publicPath: "/uploads/experience/" }),
            organization: fields.text({ label: "Organization" }),
            location: fields.text({ label: "Location" }),
            startDate: fields.text({ label: "Start Date" }),
            endDate: fields.text({ label: "End Date" }),
            type: fields.select({
              label: "Type",
              options: [
                { label: "Professional", value: "professional" },
                { label: "Research", value: "research" },
              ],
              defaultValue: "professional",
            }),
            responsibilities: fields.array(
              fields.text({ label: "Responsibility", multiline: true }),
              { label: "Responsibilities" }
            ),
            technologies: fields.array(
              fields.text({ label: "Technology" }),
              { label: "Technologies" }
            ),
            relatedProjectIds: fields.array(
              fields.text({ label: "Related Project ID" }),
              { label: "Related Projects" }
            ),
          }),
          { label: "Experience Entries" }
        ),
      },
    }),

    // ── Projects ─────────────────────────────────────────────────────────
    projects: singleton({
      label: "🚀 Projects",
      previewUrl: "/portfolio/projects",
      path: "content/projects",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            slug: fields.text({ label: "URL Slug (no spaces)" }),
            title: fields.text({ label: "Project Title" }),
            category: fields.text({ label: "Category / Domain" }),
            objective: fields.text({ label: "Objective", multiline: true }),
            period: fields.text({ label: "Period" }),
            status: fields.select({
              label: "Status",
              options: [
                { label: "Completed", value: "Completed" },
                { label: "Ongoing", value: "Ongoing" },
                { label: "Research", value: "Research" },
              ],
              defaultValue: "Completed",
            }),
            image: fields.image({
              label: "Project Cover Image",
              directory: "public/uploads/projects",
              publicPath: "/uploads/projects/",
            }),
            technologies: fields.array(fields.text({ label: "Technology" }), { label: "Technologies" }),
            problem: fields.text({ label: "Problem Statement", multiline: true }),
            environment: fields.text({ label: "Environment", multiline: true }),
            perception: fields.text({ label: "Perception", multiline: true }),
            decision: fields.text({ label: "Decision", multiline: true }),
            planning: fields.text({ label: "Planning", multiline: true }),
            control: fields.text({ label: "Control", multiline: true }),
            implementation: fields.text({ label: "Implementation", multiline: true }),
            results: fields.text({ label: "Results", multiline: true }),
            limitations: fields.text({ label: "Limitations", multiline: true }),
            futureWork: fields.text({ label: "Future Work", multiline: true }),
          }),
          { label: "Projects" }
        ),
      },
    }),

    // ── Leadership ────────────────────────────────────────────────────────
    leadership: singleton({
      label: "🏆 Leadership & Volunteering",
      previewUrl: "/experience/leadership",
      path: "content/leadership",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            organization: fields.text({ label: "Organization Name" }),
            image: fields.image({ label: "Organization Image (optional)", directory: "public/uploads/leadership", publicPath: "/uploads/leadership/" }),
            location: fields.text({ label: "Location" }),
            period: fields.text({ label: "Period" }),
            roles: fields.array(
              fields.object({
                title: fields.text({ label: "Role Title" }),
                responsibilities: fields.array(
                  fields.text({ label: "Responsibility", multiline: true }),
                  { label: "Responsibilities" }
                ),
              }),
              { label: "Roles" }
            ),
          }),
          { label: "Leadership Entries" }
        ),
      },
    }),

    // ── Awards ────────────────────────────────────────────────────────────
    awards: singleton({
      label: "🏅 Awards",
      previewUrl: "/experience/awards",
      path: "content/awards",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            title: fields.text({ label: "Award Title" }),
            issuer: fields.text({ label: "Issuer / Organization" }),
            period: fields.text({ label: "Period" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.image({
              label: "Award Badge / Image (optional)",
              directory: "public/uploads/awards",
              publicPath: "/uploads/awards/",
            }),
          }),
          { label: "Awards" }
        ),
      },
    }),

    // ── Certifications ────────────────────────────────────────────────────
    certifications: singleton({
      label: "📜 Certifications",
      previewUrl: "/experience/certifications",
      path: "content/certifications",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            title: fields.text({ label: "Certification Title" }),
            instructor: fields.text({ label: "Instructor (optional)" }),
            issuer: fields.text({ label: "Issuer / Platform" }),
            period: fields.text({ label: "Period" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.image({
              label: "Certificate Image / Badge (optional)",
              directory: "public/uploads/certifications",
              publicPath: "/uploads/certifications/",
            }),
            technologies: fields.array(fields.text({ label: "Technology" }), { label: "Technologies" }),
          }),
          { label: "Certifications" }
        ),
      },
    }),
    workshops: singleton({
      label: "🧪 Workshops",
      previewUrl: "/portfolio/workshops",
      path: "content/workshops",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            id: fields.text({ label: "ID" }),
            slug: fields.text({ label: "URL Slug (no spaces)" }),
            title: fields.text({ label: "Workshop Title" }),
            date: fields.text({ label: "Date" }),
            category: fields.select({
              label: "Category",
              options: [
                { label: "Robotics", value: "Robotics" },
                { label: "AI", value: "AI" },
                { label: "Engineering", value: "Engineering" },
                { label: "STEM", value: "STEM" },
              ],
              defaultValue: "Robotics",
            }),
            excerpt: fields.text({ label: "Excerpt / Summary", multiline: true }),
            content: fields.text({ label: "Full Workshop Description", multiline: true }),
            image: fields.image({
              label: "Workshop Cover Image (optional)",
              directory: "public/uploads/workshops",
              publicPath: "/uploads/workshops/",
            }),
            readTimeMinutes: fields.number({ label: "Read Time (minutes)", defaultValue: 4 }),
            featured: fields.checkbox({ label: "Feature on homepage", defaultValue: false }),
            isPlaceholder: fields.checkbox({ label: "Mark as placeholder/demo", defaultValue: false }),
          }),
          { label: "Workshops" }
        ),
      },
    }),
  },

  // ── Blog — collection (one file per post) ────────────────────────────────
  collections: {
    blog: collection({
      label: "📝 Blog Posts",
      previewUrl: "/blog/{slug}",
      path: "content/blog-posts/*",
      slugField: "slug",
      format: { data: "json" },
      schema: {
        slug: fields.slug({ name: { label: "Slug (URL path, no spaces)" } }),
        title: fields.text({ label: "Post Title" }),
        date: fields.text({ label: "Date (YYYY-MM-DD)" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Robotics", value: "Robotics" },
            { label: "AI", value: "AI" },
            { label: "Engineering", value: "Engineering" },
            { label: "Research", value: "Research" },
            { label: "Learning", value: "Learning" },
          ],
          defaultValue: "Robotics",
        }),
        excerpt: fields.text({ label: "Excerpt / Summary (1-2 sentences)", multiline: true }),
        content: fields.text({ label: "Full Article Content", multiline: true }),
        author: fields.text({ label: "Author", defaultValue: "Jyotish Kumar Jha" }),
        image: fields.image({
          label: "Cover Image (16:9 recommended)",
          directory: "public/uploads/blog",
          publicPath: "/uploads/blog/",
        }),
        readTimeMinutes: fields.number({ label: "Read Time (minutes)", defaultValue: 5 }),
        featured: fields.checkbox({ label: "Feature on homepage", defaultValue: false }),
        isPlaceholder: fields.checkbox({ label: "Mark as placeholder/demo", defaultValue: false }),
      },
    }),
  },
});
