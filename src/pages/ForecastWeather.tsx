import { useState, useEffect } from 'react'
import { Cloud, Droplets, Wind, Search } from 'lucide-react'
import '../styles/pages.css'

interface ForecastItem {
  dt: number
  main: { temp: number; humidity: number }
  weather: Array<{ main: string }>
  wind: { speed: number }
}

interface ForecastData {
  list: ForecastItem[]
  city: { name: string; country: string }
}

export default function ForecastWeather() {
  const [forecast, setForecast] = useState<ForecastData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('London')
  const [searchInput, setSearchInput] = useState('')

  const fetchForecast = async (cityName: string) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=2dab406d0801bd526aa65329a9abc964`
      )
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setForecast(data)
    } catch (err) {
      setError('Failed to fetch forecast data. Please try another city.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchForecast(city)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      setCity(searchInput)
      fetchForecast(searchInput)
      setSearchInput('')
    }
  }

  const getDailyForecasts = () => {
    if (!forecast) return []
    const dailyData: Record<string, ForecastItem> = {}
    forecast.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString()
      if (!dailyData[date]) {
        dailyData[date] = item
      }
    })
    return Object.values(dailyData).slice(0, 5)
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="page-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          <Search size={20} />
          Search
        </button>
      </form>

      {loading && (
        <div className="loading-container">
          <div className="spinner">⟳</div>
          <p>Loading forecast data...</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {forecast && !loading && (
        <div>
          <h2 className="forecast-title">5-Day Forecast for {forecast.city.name}</h2>
          <div className="forecast-grid">
            {getDailyForecasts().map((item, index) => (
              <div key={index} className="forecast-card">
                <p className="forecast-date">{formatDate(item.dt)}</p>
                <Cloud className="forecast-icon" />
                <p className="forecast-weather">{item.weather[0].main}</p>
                <div className="forecast-details">
                  <div className="forecast-detail">
                    <span className="label">Temp</span>
                    <span className="value">{Math.round(item.main.temp)}°C</span>
                  </div>
                  <div className="forecast-detail">
                    <Droplets size={16} />
                    <span className="value">{item.main.humidity}%</span>
                  </div>
                  <div className="forecast-detail">
                    <Wind size={16} />
                    <span className="value">{item.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
