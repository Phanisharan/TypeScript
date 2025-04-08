## 🌤️ Weather App

A simple weather application built with **TypeScript**, **Vite**, **HTML**, and **CSS**. It fetches real-time weather data using the [Open-Meteo API](https://open-meteo.com/).

The user can enter a city name, and the app displays current weather conditions like temperature, wind speed, and direction.

---

### 🚀 Demo

> Type a city like `Hyderabad` and get current weather info!

---

### 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) – Fast frontend build tool
- TypeScript – Type-safe JavaScript
- HTML/CSS – Basic UI
- [Open-Meteo API](https://open-meteo.com/) – Free weather & geolocation APIs

---

### 📦 Installation

```bash
# Navigate into the project directory
cd weather-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open your browser and go to:  
👉 `http://localhost:5173`

---

### 📁 Project Structure

```
weather-app/
├── index.html
├── src/
│   ├── main.ts        # Main logic (fetching weather)
│   └── style.css      # Simple styling
├── vite.config.ts     # Vite config
├── tsconfig.json      # TypeScript config
├── package.json       # Project metadata
└── README.md          # You're reading it!
```

---

### 🔗 APIs Used

1. **Geocoding API:**  
   `https://geocoding-api.open-meteo.com/v1/search?name={city}`

2. **Current Weather API:**  
   `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`

---

### ✅ Features

- 🔍 Search any city name
- 🌡️ Get temperature in °C
- 💨 Wind speed and direction
- 📍 Auto-select best match from results
- 🔁 Real-time API fetch using async/await
