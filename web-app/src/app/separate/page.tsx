import Link from 'next/link';

export default function SeparatePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Separate Stems</h1>
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Upload Audio File
          </label>
          <div className="w-full border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer mb-6">
            <span className="text-4xl block mb-4">📥</span>
            <p className="text-gray-400">Drag and drop an audio file here, or click to select</p>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Separation Model
            </label>
            <select className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500">
              <option>Demucs v4 (htdemucs) - 4 Stems (Vocals, Drums, Bass, Other)</option>
              <option>Demucs v4 (htdemucs_6s) - 6 Stems (+ Guitar, Piano)</option>
            </select>
          </div>
          
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-colors shadow-lg shadow-blue-900/50">
            Split Stems
          </button>
        </div>
      </div>
    </main>
  );
}
