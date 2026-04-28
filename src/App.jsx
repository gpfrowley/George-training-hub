import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Running from './pages/Running'
import Gym from './pages/Gym'
import Checkpoints from './pages/Checkpoints'
import Metrics from './pages/Metrics'
import Settings from './pages/Settings'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 pb-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/running" element={<Running />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/checkpoints" element={<Checkpoints />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
