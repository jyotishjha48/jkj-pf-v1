import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-surface-2 bg-surface mt-auto mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary tracking-widest">
          JKJ &copy; {new Date().getFullYear()} &mdash; JYOTISH KUMAR JHA
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:jyotishkumarjha48@gmail.com"
            className="font-mono text-xs text-text-secondary hover:text-accent transition-colors tracking-wide"
          >
            EMAIL
          </a>
          <a
            href="https://linkedin.com/in/jyotishkrjha/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary hover:text-accent transition-colors tracking-wide"
          >
            LINKEDIN
          </a>
          <Link
            href="/contact"
            className="font-mono text-xs text-text-secondary hover:text-accent transition-colors tracking-wide"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </footer>
  );
}
