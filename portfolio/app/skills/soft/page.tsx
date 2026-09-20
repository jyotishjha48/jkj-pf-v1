import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

const softSkills = [
  {
    skill: "Team Leadership",
    evidence: "Led 50-member team at KU Robotics Club; led Aavishkar '24 with 3,500+ attendees.",
    source: "KU Robotics Club — President",
  },
  {
    skill: "Mentorship",
    evidence: "Provided hands-on robotics training to 200+ students. Mentored students as STEAM Officer at Blinknow.",
    source: "KU Robotics Club / Blinknow",
  },
  {
    skill: "Curriculum Design",
    evidence: "Developed STEM curriculum covering design thinking, entrepreneurship, robotics, and sustainable technologies.",
    source: "STEAM Officer, Blinknow",
  },
  {
    skill: "Event Management",
    evidence: "Organized 10+ workshops, hackathons, and bot competitions. Led Aavishkar '24 (19 institutions, 5 competitions).",
    source: "KU Robotics Club — Event Manager",
  },
  {
    skill: "Public Communication",
    evidence: "Instructed 110+ students in a 2-day community program. Co-organized online seminars.",
    source: "Amnesty International KU / KU Robotics Club",
  },
  {
    skill: "Fundraising & Partnerships",
    evidence: "Partnered with 15+ college communities; increased club revenue 3x; secured funding for projects and competitions.",
    source: "KU Robotics Club — President / Vice Secretary",
  },
  {
    skill: "Technical Writing & Policy",
    evidence: "Drafted energy audit reports, Terms of Reference, and policy guidelines at Multiscope.",
    source: "Multiscope and Green Innovative Solution",
  },
];

export default function SoftSkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="SUBSYSTEM / SKILLS"
        title="Soft Skills"
        subtitle="Derived from real leadership, volunteer, and professional experience."
      />

      <div className="flex flex-wrap gap-3 mb-10">
        <Link href="/skills" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          TECHNICAL
        </Link>
        <Link href="/skills/soft" className="font-mono text-xs px-3 py-1.5 rounded border border-accent text-accent bg-accent/10 tracking-widest">
          SOFT SKILLS
        </Link>
        <Link href="/skills/graph" className="font-mono text-xs px-3 py-1.5 rounded border border-surface-2 text-text-secondary hover:border-accent/50 tracking-widest transition-colors">
          CAPABILITY GRAPH
        </Link>
      </div>

      <div className="space-y-4">
        {softSkills.map((item) => (
          <div key={item.skill} className="bg-surface border border-surface-2 rounded p-5">
            <h3 className="font-heading font-semibold text-text-primary mb-1">{item.skill}</h3>
            <p className="text-text-secondary text-sm mb-2">{item.evidence}</p>
            <span className="font-mono text-xs text-accent tracking-wide">↗ {item.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
