import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl sm:text-4xl font-serif font-light text-rose-100 hover:text-rose-200 transition tracking-wide"
        >
          4eva
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-lg font-medium text-rose-200 hover:text-white transition"
          >
            Accueil
          </Link>
          <Link
            to="/login"
            className="text-lg font-medium text-rose-200 hover:text-white transition"
          >
            Connexion
          </Link>
          <Link
            to="/archives"
            className="text-lg font-medium text-rose-200 hover:text-white transition"
          >
            Archives
          </Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="block text-rose-100 hover:text-white transition p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/5 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
            <Link
              to="/"
              className="text-xl font-medium text-rose-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/login"
              className="text-xl font-medium text-rose-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Connexion
            </Link>
            <Link
              to="/archives"
              className="text-xl font-medium text-rose-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Archives
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}