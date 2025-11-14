import { useState } from 'react'
import { Cloud, MapPin, Wind, Droplets, Eye, Gauge } from 'lucide-react'
import CurrentWeather from './pages/CurrentWeather'
import ForecastWeather from './pages/ForecastWeather'
import './App.css'

type Tab = 'current' | 'forecast'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('current')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Cloud className="logo-icon" />
            <h1>WeatherPulse</h1>
          </div>
          <p className="tagline">Real-time Weather Dashboard</p>
        </div>
      </header>

      <nav className="nav-tabs">
        <button
          className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <Cloud size={20} />
          Current Weather
        </button>
        <button
          className={`tab-button ${activeTab === 'forecast' ? 'active' : ''}`}
          onClick={() => setActiveTab('forecast')}
        >
          <Gauge size={20} />
          5-Day Forecast
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'current' && <CurrentWeather />}
        {activeTab === 'forecast' && <ForecastWeather />}
      </main>
    </div>
  )
}

export default App
