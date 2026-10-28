import Link from 'next/link';

export default function MasterPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/" className="text-pink-400 hover:text-pink-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">AI Mastering</h1>
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Target Audio (Your Mix)
            </label>
            <div className="w-full border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-pink-500 transition-colors cursor-pointer">
              <span className="text-3xl block mb-2">🎵</span>
              <p className="text-gray-400 text-sm">Upload the track to master</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Reference Audio (Professional Track)
            </label>
            <div className="w-full border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-pink-500 transition-colors cursor-pointer">
              <span className="text-3xl block mb-2">🏆</span>
              <p className="text-gray-400 text-sm">Upload a reference track to match its sound profile</p>
            </div>
          </div>
          
          <button className="w-full py-4 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold text-lg transition-colors shadow-lg shadow-pink-900/50 mt-4">
            Master Audio
          </button>
        </div>
      </div>
    </main>
  );
}
