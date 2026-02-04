import { useParams, Link } from 'react-router-dom'

export default function Section() {
  const { weekId, sectionSlug } = useParams()

  const sectionName = sectionSlug
    ? sectionSlug.charAt(0).toUpperCase() + sectionSlug.slice(1)
    : 'Rubrique'

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Fond doux */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-purple-950 to-indigo-950 opacity-95" />

      {/* En-tête */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-rose-100 tracking-wide">
          {sectionName} – Week-end du {weekId?.replace(/-/g, '/')}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to={`/week/${weekId}`}
            className="text-rose-300 hover:text-rose-200 transition flex items-center gap-2"
          >
            ← Retour au week-end
          </Link>
          <Link
            to="/"
            className="text-rose-300 hover:text-rose-200 transition flex items-center gap-2"
          >
            ← Dashboard
          </Link>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-serif font-medium mb-10 text-rose-100">
          Contenu de {sectionName}
        </h2>

        <p className="text-gray-200 leading-relaxed mb-12">
          Voici les articles, photos, vidéos, citations et autres contenus liés à cette rubrique pour ce week-end précis.
        </p>

        <div className="space-y-16">
          {/* Article 1 avec photo */}
          <div className="border-l-4 border-rose-500/40 pl-6 py-2">
            <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://picsum.photos/900/500?random=10"
                alt="Illustration de l'article"
                className="w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-2xl font-medium mb-4 text-rose-200">
              Titre de l'article principal
            </h3>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>Publié le {weekId?.replace(/-/g, '/')}</span>
              <span>•</span>
              <span>4 min de lecture</span>
            </div>

            <button className="text-rose-300 hover:text-rose-200 transition text-sm flex items-center gap-2">
              Lire l’article complet →
            </button>
          </div>

          {/* Vidéo placeholder */}
          <div className="border-l-4 border-rose-500/40 pl-6 py-2">
            <h3 className="text-2xl font-medium mb-4 text-rose-200">
              Vidéo du moment
            </h3>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
                title="Vidéo placeholder"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-gray-200 mb-4">
              Une courte vidéo d’ambiance pour cette rubrique.
            </p>
            <span className="text-sm text-gray-400">Durée : 1:30</span>
          </div>

          {/* Article 2 */}
          <div className="border-l-4 border-rose-500/40 pl-6 py-2">
            <h3 className="text-2xl font-medium mb-4 text-rose-200">
              Deuxième élément ou réflexion
            </h3>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>Publié le {weekId?.replace(/-/g, '/')}</span>
              <span>•</span>
              <span>6 min de lecture</span>
            </div>

            <button className="text-rose-300 hover:text-rose-200 transition text-sm flex items-center gap-2">
              Lire l’article complet →
            </button>
          </div>

          {/* Deuxième citation */}
          <div className="border-l-4 border-rose-500/40 pl-6 py-4 bg-white/5 rounded-r-xl">
            <blockquote className="text-xl italic text-rose-200/90 mb-4 leading-relaxed">
              "L’amour n’est pas seulement un sentiment, c’est une décision quotidienne."
            </blockquote>
            <p className="text-sm text-gray-400 text-right">– Auteur anonyme</p>
          </div>

          {/* Bouton Partager */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-rose-200 hover:bg-white/15 transition-all duration-500">
              <span>Partager ce contenu</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}