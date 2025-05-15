# Home Hub

[![Issues](https://img.shields.io/github/issues/bluepixeldev/home-hub?style=for-the-badge)](https://github.com/bluepixeldev/home-hub/issues)
[![License](https://img.shields.io/github/license/bluepixeldev/home-hub?style=for-the-badge)](https://github.com/bluepixeldev/home-hub/blob/main/LICENSE)

## Tech Stack

[![React](https://skillicons.dev/icons?i=react)](https://react.dev/)
[![TypeScript](https://skillicons.dev/icons?i=typescript)](https://www.typescriptlang.org/)
[![Vite](https://skillicons.dev/icons?i=vite)](https://vitejs.dev/)

## About

**Home Hub** is a personal Android app built with React, TypeScript, and Capacitor.  
It displays real-time data from temperature sensors, power consumption, and battery statistics.

## Features

- View temperature sensor data
- Monitor power consumption
- Display battery statistics
- Android app via Capacitor

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/bluepixeldev/home-hub.git
cd home-hub
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app in development mode:**

```bash
npm run dev
```

This starts the app locally for web development.

4. **Build the app for production:**

```bash
npm run build
```

5. **Run the app on Android:**

```bash
npx cap sync android
npx cap open android
```

Open the project in Android Studio and run it on an emulator or a connected device.

6. **Run with live reload on Android:**

```bash
ionic capacitor run android --external --livereload -p 5173
```

> **Note:** You must have an Android emulator running or a device connected for this command to work. This enables live reload, so changes are reflected instantly on your device.

## License

This project is licensed under the MIT License.
