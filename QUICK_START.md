# WeatherPulse - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Extract and Navigate

```bash
unzip WeatherPulse-Complete.zip
cd WeatherPulse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open: http://localhost:3002/

### 4. Build for Production

```bash
npm run build
```

Output: `dist/` folder

---

## 📱 Build APK (Complete Workflow)

### Quick Setup

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Initialize
npx cap init
# Enter: WeatherPulse, com.weatherpulse.app, dist

# 3. Build web
npm run build

# 4. Add Android
npx cap add android

# 5. Sync
npx cap sync android

# 6. Open Android Studio
cd android && open . # Mac
cd android && start . # Windows
```

### In Android Studio

1. Wait for Gradle sync to complete
2. Connect your Android phone via USB
3. Enable USB Debugging on phone
4. Click **Build** → **Build APK(s)**
5. Wait for build to complete
6. APK is at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Install on Device

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📚 What's Included

- ✅ Complete React + TypeScript source code
- ✅ Beautiful weather dashboard UI
- ✅ Real-time weather API integration
- ✅ 5-day forecast feature
- ✅ City search functionality
- ✅ Responsive design
- ✅ Production-ready build
- ✅ Comprehensive documentation

---

## 🎯 Features

### Current Weather
- Real-time temperature and conditions
- Humidity, wind speed, pressure, visibility
- Beautiful weather cards
- City search

### 5-Day Forecast
- Extended forecast
- Daily temperatures
- Weather conditions
- Humidity and wind data

---

## 🔧 Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 📖 Documentation

- `README.md` - Full documentation
- `APK_BUILD_GUIDE.md` - Detailed APK building steps
- `QUICK_START.md` - This file

---

## ⚠️ Troubleshooting

### Java Error
- Install JDK 17+
- Set JAVA_HOME environment variable

### Gradle Error
- Run `npx cap add android --force`
- Try `./gradlew clean` then rebuild

### Device Not Detected
- Enable USB Debugging
- Try different USB port
- Restart adb: `adb kill-server && adb start-server`

### Build Fails
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Rebuild: `npm run build`

---

## 🌐 Live Demo

Once built, the app features:
- Real-time weather data
- Beautiful UI with animations
- Smooth transitions
- Responsive layout

---

## 💡 Tips

- App uses OpenWeatherMap's free API (no auth needed)
- Works offline with cached data
- Responsive on all devices
- Fast with Vite build tool

---

## 🔗 Useful Links

- **OpenWeatherMap API:** https://openweathermap.org/api
- **Capacitor Docs:** https://capacitorjs.com/
- **Android Studio:** https://developer.android.com/studio
- **React Docs:** https://react.dev/
- **Vite Guide:** https://vitejs.dev/

---

**Happy coding! 🎉**

For detailed instructions, see `APK_BUILD_GUIDE.md`
