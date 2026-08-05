export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">⛳ GolfOS</h1>
      <p className="text-xl text-gray-400 max-w-xl mb-10">
        The modern open-source platform for golf tournaments, live scoring,
        leaderboards, statistics and social rounds.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-2">🏌️</div>
          <h2 className="font-semibold mb-1">Tournaments</h2>
          <p className="text-gray-400 text-sm">
            Create tournaments, manage players and flights.
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-2">📊</div>
          <h2 className="font-semibold mb-1">Live Scoring</h2>
          <p className="text-gray-400 text-sm">
            Hole-by-hole scoring with real-time leaderboards.
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-2">🤝</div>
          <h2 className="font-semibold mb-1">Social Rounds</h2>
          <p className="text-gray-400 text-sm">
            Invite friends and plan your next round together.
          </p>
        </div>
      </div>
    </main>
  );
}