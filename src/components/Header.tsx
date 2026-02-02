import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-950 to-purple-950 border-b border-purple-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 transition">
          4eva
        </Link>

        <nav className="flex space-x-8">
          <Link to="/" className="text-lg text-gray-300 hover:text-white transition">
            Accueil
          </Link>
          <Link to="/login" className="text-lg text-gray-300 hover:text-white transition">
            Connexion
          </Link>
          <Link to="/archives" className="text-lg text-gray-300 hover:text-white transition">
            Archives
          </Link>
        </nav>
      </div>
    </header>
  )
}
