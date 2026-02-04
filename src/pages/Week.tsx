import { useParams, Link } from 'react-router-dom'

export default function Week() {
  const { weekId } = useParams()

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Fond doux */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-purple-950 to-indigo-950 opacity-95" />

      {/* En-tête */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-rose-100 tracking-wide">
          Week-end du {weekId?.replace(/-/g, '/')}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-rose-300 hover:text-rose-200 transition flex items-center gap-2"
          >
            ← Retour au Dashboard
          </Link>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-serif font-medium mb-8 text-rose-100">
          Contenu du week-end
        </h2>

        <p className="text-gray-200 leading-relaxed mb-10">
          Voici les articles, photos, vidéos, citations et autres contenus de ce week-end. Clique sur une rubrique pour voir plus de détails.
        </p>

        {/* Rubriques cliquables */}
        <h3 className="text-2xl font-serif font-medium mb-6 text-rose-100">
          Rubriques disponibles
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Actualités', 'Culture', 'Religion', 'Sport'].map((rubrique) => (
            <Link
              key={rubrique}
              to={`/week/${weekId}/${rubrique.toLowerCase()}`}
              className="group bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-500 cursor-pointer"
            >
              <h4 className="text-2xl font-medium mb-4 text-rose-100 group-hover:text-rose-300 transition">
                {rubrique}
              </h4>
              <p className="text-gray-200">
                Contenu détaillé, articles, médias et plus...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}