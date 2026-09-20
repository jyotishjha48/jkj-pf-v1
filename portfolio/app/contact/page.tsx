import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeader
        missionId="COMMUNICATION NODE"
        title="Contact"
        subtitle="STATUS: AVAILABLE"
      />

      {/* Channels */}
      <div className="bg-surface border border-surface-2 rounded p-6 mb-10">
        <p className="font-mono text-xs text-text-secondary tracking-[0.2em] mb-5">CHANNELS</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-surface-2 pb-4">
            <span className="font-mono text-sm text-text-secondary tracking-widest">EMAIL</span>
            <a
              href="mailto:jyotishkumarjha48@gmail.com"
              className="font-mono text-sm text-accent hover:underline"
            >
              jyotishkumarjha48@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-between border-b border-surface-2 pb-4">
            <span className="font-mono text-sm text-text-secondary tracking-widest">LINKEDIN</span>
            <a
              href="https://linkedin.com/in/jyotishkrjha/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline"
            >
              linkedin.com/in/jyotishkrjha/
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-text-secondary tracking-widest">WEBSITE</span>
            <a
              href="https://jyotishkumarjha.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline"
            >
              jyotishkumarjha.com.np
            </a>
          </div>
        </div>
      </div>

      {/* Google Form embed */}
      <div className="mb-6">
        <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">[ INITIATE CONNECTION ] — Send a Message</p>
        <div className="bg-surface border border-surface-2 rounded overflow-hidden">
          <iframe
            src="YOUR_GOOGLE_FORM_EMBED_URL"
            title="Contact Form"
            width="100%"
            height="600"
            className="w-full border-0"
            style={{ background: "#05070A" }}
          />

        </div>
        <p className="font-mono text-xs text-text-secondary mt-3">
          To activate: replace <code className="text-accent">YOUR_GOOGLE_FORM_EMBED_URL</code> in{" "}
          <code className="text-text-secondary">app/contact/page.tsx</code> with your Google Form embed src URL.
        </p>
      </div>
    </div>
  );
}
