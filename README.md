# WeatherPulse - Real-time Weather Dashboard

A beautiful, responsive weather application built with React, TypeScript, and Vite. Get real-time weather data and 5-day forecasts for any city in the world.

## 🌟 Features

### Current Weather
- Real-time weather data for any city
- Temperature, humidity, wind speed, pressure, visibility
- Beautiful weather cards with animations
- Search functionality for any city worldwide
- Responsive design for all devices

### 5-Day Forecast
- Extended weather forecast
- Daily temperature and conditions
- Humidity and wind speed data
- Beautiful forecast cards
- Easy city search

## 🎨 Design

- **Beautiful Gradient UI**: Purple gradient background with glassmorphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Floating icons and smooth transitions
- **Modern Components**: Clean, professional interface
- **Dark Theme**: Easy on the eyes

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (blazing fast)
- **Styling**: Custom CSS with modern gradients
- **API**: OpenWeatherMap API (free tier)
- **Icons**: Lucide React
- **HTTP Client**: Fetch API

## 📦 Project Structure

```
WeatherPulse/
├── src/
│   ├── pages/
│   │   ├── CurrentWeather.tsx     # Current weather display
│   │   └── ForecastWeather.tsx    # 5-day forecast
│   ├── styles/
│   │   └── pages.css              # Page styling
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App styling
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Entry point
├── dist/                          # Production build
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies
├── index.html                     # HTML template
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (v22.13.0 available)
- npm 8+ (v10.9.2 available)

### Installation

1. **Extract the project**
   ```bash
   unzip WeatherPulse-Complete.zip
   cd WeatherPulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: http://localhost:3002/

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📱 Building APK with Capacitor + Android Studio

This is the recommended method based on proven workflow.

### Prerequisites

- **Java Development Kit (JDK)** 17+ installed
- **Android SDK** installed
- **Android Studio** installed
- **Git** installed

### Step-by-Step APK Build Guide

#### Step 1: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

#### Step 2: Initialize Capacitor

```bash
npx cap init
```

When prompted:
- **App name**: WeatherPulse
- **App ID**: com.weatherpulse.app
- **Directory**: dist

#### Step 3: Build Web Assets

```bash
npm run build
```

#### Step 4: Add Android Platform

```bash
npx cap add android
```

This creates an `android/` folder with the native Android project.

#### Step 5: Open in Android Studio

```bash
# Navigate to android folder
cd android

# Open in Android Studio
# Option 1: From command line
start . # Windows
open . # Mac
xdg-open . # Linux

# Option 2: Manually open Android Studio and select the android/ folder
```

#### Step 6: Connect Your Phone via USB

1. Enable **Developer Mode** on your Android phone
2. Enable **USB Debugging**
3. Connect phone to computer via USB cable
4. Android Studio will detect your device

#### Step 7: Run Gradle Build

In Android Studio:
1. Click **Build** menu
2. Select **Build Bundle(s) / APK(s)**
3. Select **Build APK(s)**
4. Wait for build to complete

Or from command line:
```bash
cd android
./gradlew assembleDebug
```

#### Step 8: Locate Your APK

APK location:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

#### Step 9: Install on Device

Option 1: Android Studio
- Click **Run** → Select your device → Click **Run**

Option 2: Command line
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

Option 3: Manual
- Copy APK to phone
- Open file manager
- Tap APK to install

### Troubleshooting

**Error: "Unsupported class file major version 68"**
- Install Java 17 or higher
- Set JAVA_HOME environment variable

**Error: "gradlew not found"**
- Run `npx cap add android` again
- Ensure you're in the correct directory

**Error: "Build failed"**
- Run `./gradlew clean` then try again
- Check that all dependencies are installed

**Phone not detected**
- Enable USB Debugging in Developer Options
- Install Android USB drivers
- Try different USB port

## 📡 API Integration

The app uses the **OpenWeatherMap API**:

- **Endpoint**: https://api.openweathermap.org
- **Free Tier**: 60 calls/minute
- **No Authentication**: Uses public API key

### API Calls

```bash
# Current weather
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={key}

# 5-day forecast
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&appid={key}
```

## 🎯 Key Features

### Real-time Data
- Live weather updates
- Accurate forecasts
- Global city coverage

### User-Friendly
- Easy city search
- Clear weather information
- Beautiful visualizations

### Responsive
- Mobile-first design
- Works on all devices
- Touch-friendly interface

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📚 Documentation

- `README.md` - This file
- `APK_BUILD_GUIDE.md` - Detailed APK building steps
- `CAPACITOR_SETUP.md` - Capacitor configuration guide

## 🎓 Learning Resources

This project demonstrates:
- React best practices
- TypeScript usage
- Vite build optimization
- API integration
- Responsive design
- State management with hooks
- Capacitor for mobile apps

## 🔐 Privacy & Security

- No user authentication required
- No personal data collection
- No analytics or tracking
- Uses OpenWeatherMap's public API
- All data stored in browser memory

## 📊 Performance

- **Build Size**: ~408 KB (gzipped: ~120 KB)
- **Load Time**: < 1 second
- **API Response**: < 1 second typically
- **Mobile Optimized**: Fast on 4G/5G

## 🐛 Troubleshooting

### App won't load
- Check internet connection
- Clear browser cache
- Try in incognito mode

### Weather data not showing
- API might be rate-limited
- Wait a few minutes and try again
- Check city name spelling

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## 📄 License

This project uses OpenWeatherMap's free API which is free to use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues or questions:
- Check OpenWeatherMap API docs: https://openweathermap.org/api
- Vite documentation: https://vitejs.dev/
- React documentation: https://react.dev/
- Capacitor documentation: https://capacitorjs.com/

## 🎉 Credits

Built with:
- React 18
- TypeScript
- Vite
- Lucide React Icons
- OpenWeatherMap API
- Capacitor

---

**Made with ❤️ for weather enthusiasts**

Happy coding! 🚀
