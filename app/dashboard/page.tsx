import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">⛳ GolfOS Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
        <Link
          href="/turniere/neu"
          className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 text-center"
        >
          <div className="text-3xl mb-2">🏌️</div>
          <h2 className="font-semibold">Neues Turnier anlegen</h2>
        </Link>

        <div className="bg-gray-900 rounded-xl p-6 text-center opacity-50">
          <div className="text-3xl mb-2">📊</div>
          <h2 className="font-semibold">Live-Scoring (bald)</h2>
        </div>
      </div>
    </main>
  );
}