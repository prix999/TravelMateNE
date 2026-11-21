# 🌿 TravelMateNE — Discover Northeast. Experience More.

**An AI-powered tourism explorer that helps travellers discover the beauty of Northeast India and plan personalised journeys.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://travel-mate-ne.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/prix999/TravelMateNE)

## ✨ Overview

TravelMateNE is a web-based tourism platform designed to make exploring Northeast India easier, smarter, and more accessible.

The platform brings together curated travel destinations from all eight northeastern states and an AI-powered itinerary planner that generates personalised travel suggestions based on a traveller's preferences, budget, duration, and interests.

Our goal is to encourage tourism in Northeast India while helping travellers discover destinations beyond the usual tourist routes.

## 🎯 Problem Statement

Northeast India is home to extraordinary landscapes, cultures, traditions, and tourist destinations. However, travellers may find it difficult to discover relevant destinations and organise trips according to their individual preferences.

TravelMateNE addresses this challenge through a centralised destination explorer and an AI-powered travel planning experience.

## 🚀 Key Features

- **Explore Northeast India:** Discover 16 curated destinations across all eight northeastern states.
- **Smart Search:** Find destinations using search functionality.
- **State Filters:** Explore destinations based on their respective states.
- **Category Filters:** Browse destinations by travel category.
- **Favourite Destinations:** Save preferred destinations using local storage.
- **AI Itinerary Planner:** Generate personalised travel itineraries using Google Gemini AI.
- **Customised Travel Planning:** Enter your starting city, destination, trip duration, budget, number of travellers, and interests.
- **Responsive Interface:** Explore the platform through a modern, user-friendly interface.

## 🗺️ Explore the Eight Northeastern States

TravelMateNE features destinations from:

1. Arunachal Pradesh
2. Assam
3. Manipur
4. Meghalaya
5. Mizoram
6. Nagaland
7. Sikkim
8. Tripura

## 🤖 AI-Powered Itinerary Generation

The platform integrates **Google Gemini AI** to make travel planning more personalised.

Users provide their travel preferences, and the backend processes the request to generate a customised itinerary.

The planner considers:
- Starting location
- Destination
- Number of travel days
- Budget
- Number of travellers
- Travel interests

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend development |
| Vite | Development and build tooling |
| Tailwind CSS | UI styling |
| Lucide React | Icons |
| Node.js | Backend runtime |
| Express.js | Backend API |
| Google Gemini AI | AI-powered itinerary generation |
| Local Storage | Saving favourite destinations |
| Vercel | Frontend deployment |
| Render | Backend deployment |

## 🏗️ Project Structure

```text
TravelMateNE/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

*The `.env` file contains private credentials and should never be committed to GitHub.*

## ⚙️ Local Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/prix999/TravelMateNE.git
cd TravelMateNE
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm start
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🌐 Live Deployment

| Component | Platform | Link |
|---|---|---|
| Frontend | Vercel | https://travel-mate-ne.vercel.app |
| Backend | Render | https://travelmatene-api.onrender.com |

## 🔮 Future Scope

Potential improvements for future versions include:

- Interactive maps and route planning.
- Real-time weather information.
- Hotel and transportation recommendations.
- Local guides and cultural experiences.
- Multilingual travel assistance.
- More detailed destination information.

## 💡 Vision

We believe Northeast India deserves to be explored, experienced, and celebrated.

TravelMateNE aims to connect technology with tourism and make discovering the region a more accessible and personalised experience.

**Discover Northeast. Experience More. 🌿**

---

## 👩‍💻 Project & Credits

**Project:** TravelMateNE — Northeast Tourism Explorer  
**Developed for:** PromptWars x Code1 Innovators  
**Challenge:** PS08 — North East Tourism Explorer  
**Repository:** [prix999/TravelMateNE](https://github.com/prix999/TravelMateNE)

Built with curiosity, creativity, and a passion for exploring Northeast India.
