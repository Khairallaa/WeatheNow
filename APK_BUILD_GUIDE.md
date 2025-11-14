# WeatherPulse - Complete APK Build Guide

## 📱 Build APK Using Capacitor + Android Studio

This guide is based on the proven workflow: **Capacitor → Git → Android Studio → Build APK**

This is the most reliable method and works on Windows, Mac, and Linux.

---

## ✅ Prerequisites

Before starting, ensure you have:

1. **Java Development Kit (JDK) 17 or higher**
   - Download from: https://www.oracle.com/java/technologies/downloads/
   - Or use: `brew install openjdk@17` (Mac) / `sudo apt-get install openjdk-17-jdk` (Linux)

2. **Android SDK**
   - Comes with Android Studio
   - Download Android Studio: https://developer.android.com/studio

3. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Install and complete setup

4. **Git**
   - Download from: https://git-scm.com/
   - Or use: `brew install git` (Mac) / `sudo apt-get install git` (Linux)

5. **Node.js and npm**
   - Already have it if you're reading this

---

## 🚀 Step-by-Step Build Process

### Step 1: Install Capacitor Dependencies

```bash
cd WeatherPulse
npm install @capacitor/core @capacitor/cli @capacitor/android
```

**What this does:**
- Installs Capacitor framework
- Adds Android platform support
- Sets up build tools

### Step 2: Initialize Capacitor

```bash
npx cap init
```

**When prompted, enter:**
- **App name**: WeatherPulse
- **App ID**: com.weatherpulse.app
- **Directory**: dist (or leave blank)

**What this creates:**
- `capacitor.config.ts` - Capacitor configuration
- `.capacitorrc.json` - Platform settings

### Step 3: Build Web Assets

```bash
npm run build
```

**Output:**
- Creates `dist/` folder with production build
- This is what will run on Android

**Verify:**
```bash
ls -la dist/
# Should show: index.html, assets/ folder
```

### Step 4: Add Android Platform

```bash
npx cap add android
```

**What this creates:**
- `android/` folder with complete Android project
- Gradle build files
- Android manifest
- All necessary configurations

**Verify:**
```bash
ls -la android/
# Should show: app/, gradle/, build.gradle, settings.gradle, etc.
```

### Step 5: Sync Capacitor with Android

```bash
npx cap sync android
```

**What this does:**
- Copies web assets to Android
- Updates Android configuration
- Prepares for building

### Step 6: Open in Android Studio

**Option A: From Command Line**

```bash
# Windows
cd android && start .

# Mac
cd android && open .

# Linux
cd android && xdg-open .
```

**Option B: Manual**
1. Open Android Studio
2. Click **File** → **Open**
3. Navigate to `WeatherPulse/android/` folder
4. Click **Open**
5. Wait for Gradle sync to complete

### Step 7: Connect Your Android Phone

1. **Enable Developer Mode:**
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back to Settings → Developer Options
   - Enable "USB Debugging"

2. **Connect via USB:**
   - Connect phone to computer with USB cable
   - Select "File Transfer" mode on phone
   - Android Studio should detect your device

3. **Verify Connection:**
   ```bash
   adb devices
   # Should show your device
   ```

### Step 8: Build APK in Android Studio

**Method 1: Using Android Studio GUI (Recommended)**

1. In Android Studio, click **Build** menu
2. Select **Build Bundle(s) / APK(s)**
3. Select **Build APK(s)**
4. Wait for build to complete (5-10 minutes)
5. Click **Locate** to find your APK

**Method 2: Using Command Line**

```bash
cd android
./gradlew assembleDebug
```

**Output:**
```
BUILD SUCCESSFUL in Xs
APK created at: app/build/outputs/apk/debug/app-debug.apk
```

### Step 9: Locate Your APK

APK file location:
```
WeatherPulse/android/app/build/outputs/apk/debug/app-debug.apk
```

**File size:** ~30-50 MB (depending on dependencies)

### Step 10: Install on Device

**Option 1: Android Studio (Easiest)**
1. In Android Studio, click **Run** menu
2. Select **Run 'app'**
3. Select your connected device
4. Click **OK**
5. App installs and runs automatically

**Option 2: Command Line**
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Option 3: Manual Installation**
1. Copy APK file to your phone
2. Open file manager on phone
3. Navigate to the APK
4. Tap to install
5. Grant permissions if prompted

### Step 11: Test on Device

1. App should appear on home screen
2. Tap to launch
3. Test all features:
   - Search for cities
   - View current weather
   - Check 5-day forecast
   - Verify all data loads correctly

---

## 🎯 Complete Command Summary

```bash
# 1. Install dependencies
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Initialize Capacitor
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

# 7. Build APK (in Android Studio or command line)
./gradlew assembleDebug

# 8. Install on device
adb install app/build/outputs/apk/debug/app-debug.apk
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Unsupported class file major version 68"

**Cause:** Java version too old

**Solution:**
```bash
# Install Java 17
# Windows: Download from Oracle website
# Mac: brew install openjdk@17
# Linux: sudo apt-get install openjdk-17-jdk

# Set JAVA_HOME
# Windows: Set environment variable JAVA_HOME to Java installation path
# Mac/Linux: export JAVA_HOME=$(/usr/libexec/java_home -v 17)
```

### Issue 2: "gradlew not found" or "gradlew permission denied"

**Cause:** Gradle wrapper not properly set up

**Solution:**
```bash
# Regenerate Android project
npx cap add android --force

# Or manually set permissions (Mac/Linux)
cd android
chmod +x gradlew
./gradlew assembleDebug
```

### Issue 3: "Build failed" or "Gradle sync failed"

**Solution:**
```bash
# Clean build
cd android
./gradlew clean

# Rebuild
./gradlew assembleDebug

# Or in Android Studio: Build → Clean Project → Rebuild Project
```

### Issue 4: "Device not detected"

**Solution:**
1. Check USB debugging is enabled
2. Try different USB port
3. Install Android USB drivers
4. Restart adb: `adb kill-server && adb start-server`
5. Unplug and replug phone

### Issue 5: "APK installation fails"

**Solution:**
1. Enable "Unknown Sources" in Android settings
2. Uninstall previous version: `adb uninstall com.weatherpulse.app`
3. Check device storage space (need ~100MB free)
4. Ensure Android 5.0+ (API 21+)

### Issue 6: "App crashes on launch"

**Solution:**
1. Check logcat in Android Studio: **View** → **Tool Windows** → **Logcat**
2. Look for error messages
3. Ensure all dependencies installed: `npm install`
4. Rebuild: `npm run build && npx cap sync android`

---

## 🔄 Updating Your App

After making changes to your app:

```bash
# 1. Rebuild web
npm run build

# 2. Sync to Android
npx cap sync android

# 3. Rebuild APK
cd android
./gradlew assembleDebug

# 4. Reinstall
adb uninstall com.weatherpulse.app
adb install app/build/outputs/apk/debug/app-debug.apk
```

---

## 📦 Sharing Your APK

Your APK file can be shared via:

1. **Email** - Attach the APK file
2. **Cloud Storage** - Upload to Google Drive, Dropbox, OneDrive
3. **File Transfer** - AirDrop, Bluetooth, USB
4. **Web Server** - Host on website for download
5. **GitHub Releases** - Upload to GitHub releases page

**APK File Location:**
```
WeatherPulse/android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🎓 What Each Step Does

| Step | Purpose | Output |
|------|---------|--------|
| 1 | Install Capacitor framework | `node_modules/` updated |
| 2 | Initialize Capacitor config | `capacitor.config.ts` created |
| 3 | Build web app | `dist/` folder created |
| 4 | Create Android project | `android/` folder created |
| 5 | Sync web to Android | Web assets copied to Android |
| 6 | Open in IDE | Ready to build |
| 7 | Connect device | Phone detected by Android Studio |
| 8 | Build APK | APK file created |
| 9 | Locate APK | Find APK file path |
| 10 | Install app | App runs on device |

---

## 📊 Build Specifications

- **Min API Level:** 21 (Android 5.0)
- **Target API Level:** 34 (Android 14)
- **APK Size:** ~30-50 MB
- **Build Time:** 5-10 minutes
- **Java Version:** 17+
- **Gradle Version:** 8.x

---

## 🚀 Next Steps

1. ✅ Complete the build process above
2. ✅ Test app on your device
3. ✅ Share APK with friends
4. ✅ Make improvements to app
5. ✅ Rebuild and redistribute

---

## 📞 Getting Help

- **Capacitor Docs:** https://capacitorjs.com/docs
- **Android Development:** https://developer.android.com/
- **Gradle Documentation:** https://gradle.org/
- **React Documentation:** https://react.dev/

---

**You've got this! Happy building! 🎉**
