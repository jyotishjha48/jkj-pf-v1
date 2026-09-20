"use client";
import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/keystatic";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(from);
      router.refresh();
    } else {
      setError("Incorrect password. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-mono text-xs text-accent tracking-[0.3em] mb-3">
            ADMIN ACCESS
          </p>
          <h1 className="font-heading text-2xl font-bold text-text-primary">
            JKJ Admin Panel
          </h1>
          <p className="text-text-secondary text-sm mt-2">
            Enter your admin password to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-surface-2 rounded p-6 space-y-4"
        >
          <div>
            <label
              htmlFor="password"
              className="font-mono text-xs text-text-secondary tracking-widest block mb-2"
            >
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full bg-surface-2 border border-surface-2 rounded px-3 py-2 text-text-primary font-mono text-sm focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-danger">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-background font-mono text-sm font-bold tracking-widest py-2.5 rounded hover:bg-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? "AUTHENTICATING..." : "[ ENTER ]"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
