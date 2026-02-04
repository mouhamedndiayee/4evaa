import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Week from './pages/Week'
import Section from './pages/Section'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-950 text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/week/:weekId" element={<Week />} />
          <Route path="/week/:weekId/:sectionSlug" element={<Section />} />
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[70vh] text-4xl text-rose-200">
              404 – Page non trouvée
            </div>
          } />
        </Routes>
      </main>
    </div>
  )
}
