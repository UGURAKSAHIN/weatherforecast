# 🌦️ Weather Forecast App (React + ASP.NET Core)

## 📌 Overview

This is a full-stack web application that displays weather forecasts using a **React frontend** and an **ASP.NET Core Web API backend**.

The application fetches real-time weather data from the backend and presents it through a clean, responsive, and user-friendly interface.

---

## 🖼️ Preview

![WeatherForecast](https://github.com/user-attachments/assets/16ff493a-de1d-4671-889a-7457d8cd0dca)

---

## ✨ Features

* 🌡️ Fetches weather data from ASP.NET Core API
* 🧩 Card-based UI for clear data visualization
* 🌤️ Weather icons instead of plain text summaries
* 📱 Fully responsive design
* ⏳ Loading state handling
* ❌ Error handling for failed API requests

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Hooks)
* CSS

### 🔹 Backend

* ASP.NET Core Web API
* RESTful architecture

---

## 📂 Project Structure

```bash id="prj123"
weatherforecast/
├── ClientApp/        # React frontend
├── Controllers/      # API controllers
├── Models/           # Data models
├── Program.cs
├── appsettings.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites

Make sure you have:

* Node.js (v16+ recommended)
* npm or yarn
* .NET SDK (6 or later)

---

### 2. Clone the Repository

```bash id="cln123"
git clone https://github.com/UGURAKSAHIN/weatherforecast.git
cd weatherforecast
```

---

### 3. Run Backend (ASP.NET Core)

```bash id="bck123"
dotnet run
```

Backend will run at:

* https://localhost:5001
* http://localhost:5000

---

### 4. Run Frontend (React)

```bash id="frt123"
cd ClientApp
npm install
npm start
```

Frontend will run at:

* http://localhost:3000

---

## 🔗 API Communication

The React frontend communicates with the ASP.NET Core backend via REST API endpoints.

Example:

```bash id="api123"
GET /weatherforecast
```

---

## 🚀 Improvements (Planned)

* 🔐 Environment-based API configuration
* 🌍 Integration with real weather API (OpenWeatherMap, etc.)
* 📊 Advanced UI (charts, graphs)
* 🧪 Unit & integration tests
* ☁️ Deployment (Docker / Azure / Vercel)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

---

## 📄 License

MIT License

---

## 👤 Author

**Uğur Akşahin**

* 🔗 GitHub: https://github.com/UGURAKSAHIN
* 🔗 LinkedIn: https://www.linkedin.com/in/uguraksahin

---
