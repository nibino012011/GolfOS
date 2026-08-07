import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Golfplatz bei Sonnenaufgang"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-canvas)] via-[var(--color-canvas)]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <span className="eyebrow mb-6">⛳ GolfOS</span>
        <h1 className="font-display text-5xl sm:text-7xl font-medium leading-[1.05] mb-6">
          Der Platz ruft.
          <br />
          Wir kümmern uns um den Rest.
        </h1>
        <p className="text-lg text-[var(--color-mist-dim)] max-w-xl mb-10">
          Turniere anlegen, Live-Scores verfolgen und Ranglisten führen —
          alles an einem Ort, gebaut für Golfer.
        </p>
        <Link href="/login" className="btn-primary">
          Einloggen
        </Link>
      </div>

      <div className="golf-ball absolute -right-10 top-1/3 hidden lg:block" />
    </main>
  );
}