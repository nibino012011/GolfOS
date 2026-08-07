"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Wird gespeichert...");

    const { error } = await supabase.from("tournaments").insert({
      name,
      location,
      date,
      format,
    });

    if (error) {
      setMessage("Fehler: " + error.message);
    } else {
      setMessage("Turnier gespeichert! ✅");
      setName("");
      setLocation("");
      setDate("");
      setFormat("");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">⛳ Neues Turnier anlegen</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Turniername"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-gray-900 rounded-lg p-3 text-white"
        />
        <input
          type="text"
          placeholder="Ort"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-gray-900 rounded-lg p-3 text-white"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-900 rounded-lg p-3 text-white"
        />
        <input
          type="text"
          placeholder="Format (z.B. Stroke Play)"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="bg-gray-900 rounded-lg p-3 text-white"
        />
        <button
          type="submit"
          className="bg-white text-black rounded-lg p-3 font-semibold"
        >
          Turnier speichern
        </button>
      </form>

      {message && <p className="mt-6 text-gray-400">{message}</p>}
    </main>
  );
}