import { useState, useEffect } from 'react'
import { Cloud, MapPin, Wind, Droplets, Eye, Gauge, Search } from 'lucide-react'
import '../styles/pages.css'

interface WeatherData {
  name: string
  sys: { country: string }
  main: { temp: number; feels_like: number; humidity: number; pressure: number }
  weather: Array<{ main: string; description: string }>
  wind: { speed: number }
  visibility: number
}

export default function CurrentWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('London')
  const [searchInput, setSearchInput] = useState('')

  const fetchWeather = async (cityName: string) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=2dab406d0801bd526aa65329a9abc964`
      )
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError('Failed to fetch weather data. Please try another city.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      setCity(searchInput)
      fetchWeather(searchInput)
      setSearchInput('')
    }
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
          <p>Loading weather data...</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {weather && !loading && (
        <div className="weather-card-large">
          <div className="weather-header">
            <div className="location-info">
              <h2>{weather.name}</h2>
              <p className="country">{weather.sys.country}</p>
            </div>
            <div className="weather-icon-large">
              <Cloud size={80} />
            </div>
          </div>

          <div className="temperature-section">
            <div className="main-temp">
              <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
              <span className="weather-desc">{weather.weather[0].main}</span>
            </div>
            <p className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</p>
          </div>

          <div className="weather-details-grid">
            <div className="detail-item">
              <Droplets size={24} />
              <div>
                <p className="detail-label">Humidity</p>
                <p className="detail-value">{weather.main.humidity}%</p>
              </div>
            </div>
            <div className="detail-item">
              <Wind size={24} />
              <div>
                <p className="detail-label">Wind Speed</p>
                <p className="detail-value">{weather.wind.speed} m/s</p>
              </div>
            </div>
            <div className="detail-item">
              <Gauge size={24} />
              <div>
                <p className="detail-label">Pressure</p>
                <p className="detail-value">{weather.main.pressure} hPa</p>
              </div>
            </div>
            <div className="detail-item">
              <Eye size={24} />
              <div>
                <p className="detail-label">Visibility</p>
                <p className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</p>
              </div>
            </div>
          </div>

          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}
