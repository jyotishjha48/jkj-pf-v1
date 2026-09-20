import settingsJson from "../content/site-settings.json";

export type SiteSettings = {
  siteName?: string;
  navSystem?: string;
  navSkills?: string;
  navExperience?: string;
  navMissions?: string;
  navLog?: string;
  navConnect?: string;
  heroTagline?: string;
  heroHeading?: string;
  heroSub?: string;
  heroSubtitle2?: string;
  heroSupportingLine?: string;
  heroCTA1?: string;
  heroCTA2?: string;
  currentStateTitle?: string;
  featuredMissionsTitle?: string;
  currentStateSubtitle?: string;
  featuredMissionsLabel?: string;
  skillsHeader?: string;
  experienceHeader?: string;
  missionsHeader?: string;
  blogHeader?: string;
  showExperienceTimeline?: boolean;
  showLeadershipSection?: boolean;
  showAwardsSection?: boolean;
  experienceIntro?: string;
};

export const siteSettings = settingsJson as SiteSettings;
