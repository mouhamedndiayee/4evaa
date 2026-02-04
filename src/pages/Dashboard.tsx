import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [effectIndex, setEffectIndex] = useState(1)
  const [gradientIndex, setGradientIndex] = useState(1)

  // Change l'effet et le gradient aléatoirement chaque semaine (lundi)
  useEffect(() => {
    const now = new Date()
    const weekNumber = Math.floor((now.getTime() / (1000 * 60 * 60 * 24 * 7)))
    const randomEffect = (weekNumber % 10) + 1
    const randomGradient = (weekNumber % 10) + 1
    setEffectIndex(randomEffect)
    setGradientIndex(randomGradient)
  }, [])

  const weekends = [
    {
      id: '2026-02-01',
      title: 'Week-end du 1er Février',
      description: 'Un week-end placé sous le signe de la découverte : actualités brûlantes, expositions culturelles, réflexions spirituelles et moments sportifs intenses.',
      image: 'https://picsum.photos/800/480?random=1',
    },
    {
      id: '2026-02-08',
      title: 'Week-end du 8 Février',
      description: 'Innovation, créativité et transmission aux jeunes générations. Conférences tech, ateliers éducatifs et idées pour lancer son projet.',
      image: 'https://picsum.photos/800/480?random=2',
    },
    {
      id: '2026-02-15',
      title: 'Week-end du 15 Février',
      description: 'Amour, famille, équilibre intérieur et soin de soi. Idées cadeaux, moments à deux et astuces bien-être.',
      image: 'https://picsum.photos/800/480?random=3',
    }
  ]

  // 10 effets 3D légers
  const effects = {
    1: 'hover:scale-105 hover:-translate-y-2',
    2: 'hover:scale-105 hover:shadow-2xl hover:shadow-rose-400/20',
    3: 'hover:-translate-y-4',
    4: 'hover:rotate-2 hover:scale-105',
    5: 'hover:scale-110',
    6: 'hover:shadow-[0_0_40px_-10px] hover:shadow-purple-400',
    7: 'hover:-translate-y-3 hover:rotate-1',
    8: 'hover:scale-[1.03] hover:shadow-xl',
    9: 'hover:shadow-rose-500/30 hover:shadow-2xl',
    10: 'hover:scale-105 hover:-rotate-1'
  }

  // 10 gradients romantiques / doux
  const gradients = {
    1: 'from-rose-950 via-purple-950 to-indigo-950',
    2: 'from-pink-950 via-rose-950 to-purple-950',
    3: 'from-purple-950 via-indigo-950 to-rose-950',
    4: 'from-indigo-950 via-purple-950 to-pink-950',
    5: 'from-rose-900 via-purple-900 to-indigo-900',
    6: 'from-pink-900 via-rose-900 to-purple-900',
    7: 'from-purple-900 via-indigo-900 to-pink-900',
    8: 'from-indigo-900 via-purple-900 to-rose-900',
    9: 'from-rose-950 via-pink-950 to-purple-950',
    10: 'from-purple-950 via-pink-950 to-rose-950'
  }

  return (
    <div className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-1000 ${gradients[gradientIndex as keyof typeof gradients]}`}>
      <h1 className="relative text-5xl md:text-6xl font-serif font-light text-center mb-16 text-rose-100/95 drop-shadow-md tracking-wide">
        Week-ends en cours et à venir
      </h1>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {weekends.map((week) => (
          <div
            key={week.id}
            className={`group relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-out ${effects[effectIndex as keyof typeof effects]}`}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={week.image}
                alt={week.title}
                className="w-full h-full object-cover transition-transform duration-1500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-3xl font-serif font-medium mb-4 text-rose-100 group-hover:text-white transition-colors duration-700">
                {week.title}
              </h2>

              <p className="text-gray-200 leading-relaxed mb-8 flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-1000 ease-out">
                {week.description}
              </p>

              <Link
              to={`/week/${week.id}`}
              className="block w-full bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 px-8 py-4 rounded-2xl font-medium text-white shadow-md transition-all duration-700 ease-out hover:shadow-rose-400/30 hover:shadow-xl active:scale-[0.98] text-center"
              >
                Voir ce week-end →
                </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateur discret de l'effet et du gradient actuels (à retirer plus tard) */}
      <div className="fixed bottom-4 right-4 text-xs text-white/30 font-mono">
        Semaine : effet {effectIndex} / gradient {gradientIndex}
      </div>
    </div>
  )
}