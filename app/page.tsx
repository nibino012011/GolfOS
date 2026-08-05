export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-emerald-400">GolfOS</h1>

        <div className="space-x-6">
          <a href="#" className="hover:text-emerald-400">
            Features
          </a>
          <a href="#" className="hover:text-emerald-400">
            Docs
          </a>
          <a href="#" className="hover:text-emerald-400">
            GitHub
          </a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto text-center py-32 px-8">
        <h2 className="text-6xl font-bold">
          The Open-Source Platform
          <br />
          for Golf Tournaments
        </h2>

        <p className="text-zinc-400 text-xl mt-8 max-w-3xl mx-auto">
          Create tournaments, manage players, enter live scores and display
          beautiful real-time leaderboards.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl text-lg">
            Get Started
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-900">
            View on GitHub
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8 pb-32">
        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">🏆 Tournaments</h3>
          <p className="mt-4 text-zinc-400">
            Create and manage golf tournaments with ease.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">📱 Live Scoring</h3>
          <p className="mt-4 text-zinc-400">
            Players can submit scores hole by hole.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">📊 Leaderboards</h3>
          <p className="mt-4 text-zinc-400">
            Beautiful live rankings for every tournament.
          </p>
        </div>
      </section>
    </main>
  );
}
