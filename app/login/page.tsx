"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Login fehlgeschlagen: " + error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="eyebrow block text-center mb-6">
          ⛳ GolfOS
        </Link>

        <div className="card card-tilt">
          <h1 className="font-display text-3xl font-medium text-center mb-8">
            Willkommen zurück
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="label">E-Mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="du@club.de"
              />
            </div>

            <div>
              <label className="label">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-2">
              {loading ? "Wird geprüft..." : "Einloggen"}
            </button>
          </form>

          {error && (
            <p className="mt-6 text-sm text-red-400 text-center">{error}</p>
          )}
        </div>
      </div>
    </main>
  );
}