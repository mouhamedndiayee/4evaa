import { useState } from 'react'
import './index.css'  // ou le nom de ton fichier CSS

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 flex items-center justify-center text-white p-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-8 tracking-tight animate-pulse">
          4eva
        </h1>
        <p className="text-2xl mb-12 max-w-xl mx-auto opacity-90">
          Plateforme de contenu par week-end – moderne, rapide, avec React + Tailwind v4
        </p>

        <button
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-full text-xl font-bold shadow-lg transform transition hover:scale-105 active:scale-95"
          onClick={() => setCount(count + 1)}
        >
          Clics : {count}
        </button>
      </div>
    </div>
  )
}

export default App