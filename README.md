# ⚽ PitchPilot AI
### FIFA World Cup 2026 — Stadium Operations & Fan Companion

> **GenAI-powered real-time intelligence platform** for fans, volunteers, and venue staff at the FIFA World Cup 2026. Built with Google Gemini AI, Node.js, and Vanilla JS.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Gemini%202.0%20Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![FIFA WC 2026](https://img.shields.io/badge/FIFA-World%20Cup%202026-003DA5)](https://www.fifa.com/worldcup)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo Features](#-live-demo-features)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [AI Integration Flow](#-ai-integration-flow)
- [Feature Deep-Dives](#-feature-deep-dives)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [API Endpoints](#-api-endpoints)
- [Multi-Language Support](#-multi-language-support)

---

## 🌐 Overview

**PitchPilot AI** is a full-stack GenAI-enabled stadium intelligence platform designed for the **FIFA World Cup 2026** at MetLife Stadium, New York/New Jersey. It leverages **Google Gemini 2.0 Flash** to provide real-time AI assistance across six operational pillars:

| Pillar | Description |
|--------|-------------|
| 🗺️ **Smart Navigation** | AI-powered seat pathfinding & gate routing |
| 👥 **Crowd Intelligence** | Real-time occupancy, queue forecasting |
| ♿ **Accessibility** | ADA routing, sensory room locating |
| 🚌 **Transport Optimization** | NJ Transit, parking, rideshare guidance |
| 🌱 **Sustainability** | Green points, eco-action logging |
| 🌍 **Multilingual AI** | 6-language interface + real-time translation |

---

## ✨ Live Demo Features

### Fan Portal
- 🔴 **Live Match Ticker** — Real-time countdown to kickoff, auto-switches to live simulation with goals and commentary
- 📊 **Stadium Dashboard** — Live gate wait times, concession queue forecasts, restroom availability
- 🗺️ **Interactive Stadium Map** — Clickable SVG quadrants with AI pathfinding guidance per zone
- 🤖 **FIFA Cup-Pilot Chatbot** — Gemini-powered assistant for bag policy, transit, accessibility queries
- 🌿 **Green Rewards Hub** — Eco-action logging, sustainability leaderboard, reward tracking

### Staff Operations (Toggle Mode)
- 🎛️ **Operations Hub** — Crowd density heatmaps, multi-gate status, real-time alerts
- 🚨 **Incident Command** — AI-generated response checklists for medical, security, and crowd incidents
- 🌐 **Translation Bridge** — Real-time staff-to-fan translation across 6 languages

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PITCHPILOT AI PLATFORM                       │
├───────────────────────────┬─────────────────────────────────────────┤
│      FRONTEND (Browser)   │           BACKEND (Node.js)             │
│                           │                                         │
│  ┌─────────────────────┐  │  ┌──────────────────────────────────┐   │
│  │   index.html        │  │  │         server.js (Express)      │   │
│  │   - Header Ticker   │  │  │                                  │   │
│  │   - Stadium SVG Map │◄─┼──┤  POST /api/chat                  │   │
│  │   - Dashboard Stats │  │  │  POST /api/predict-crowd         │   │
│  │   - Chat Interface  │  │  │  POST /api/incident-response     │   │
│  │   - Green Rewards   │  │  │  POST /api/translate             │   │
│  │   - Staff Ops Panel │  │  │                                  │   │
│  └─────────────────────┘  │  └──────────┬───────────────────────┘   │
│                           │             │                           │
│  ┌─────────────────────┐  │             ▼                           │
│  │    app.js           │  │  ┌──────────────────────────────────┐   │
│  │   - State Manager   │  │  │    Google Gemini 2.0 Flash API   │   │
│  │   - Match Simulator │  │  │                                  │   │
│  │   - Lang Switcher   │  │  │  • Contextual AI chat responses  │   │
│  │   - Telemetry Loop  │  │  │  • Incident checklist generation │   │
│  │   - Chat Client     │  │  │  • Crowd prediction analysis     │   │
│  └─────────────────────┘  │  │  • Multilingual translation      │   │
│                           │  └──────────────────────────────────┘   │
│  ┌─────────────────────┐  │                                         │
│  │    styles.css       │  │  ┌──────────────────────────────────┐   │
│  │   - Glassmorphism   │  │  │    Fallback Simulation Engine    │   │
│  │   - Dark Mode UI    │  │  │  (activates if API quota exceeded│   │
│  │   - Animations      │  │  │  • Rule-based response dicts     │   │
│  └─────────────────────┘  │  │  • Pre-compiled templates        │   │
│                           │  └──────────────────────────────────┘   │
└───────────────────────────┴─────────────────────────────────────────┘
```

---

## 🔄 Application Workflow

```
USER OPENS APP
      │
      ▼
┌─────────────────────────────────────────────┐
│              MODE DETECTION                  │
│                                             │
│   👤 Fan Mode  ◄──── Toggle ────► 🛡️ Staff  │
└──────────┬──────────────────────────┬────────┘
           │                          │
           ▼                          ▼
   ┌───────────────┐          ┌───────────────┐
   │  FAN PORTAL   │          │  STAFF OPS    │
   │               │          │               │
   │ • Dashboard   │          │ • Ops Hub     │
   │ • Map/Nav     │          │ • Incidents   │
   │ • AI Chat     │          │ • Translator  │
   │ • Eco Rewards │          │               │
   └───────┬───────┘          └───────┬───────┘
           │                          │
           ▼                          ▼
   ┌───────────────────────────────────────────┐
   │            AI REQUEST LAYER               │
   │                                           │
   │  User Query → /api/chat                   │
   │  Gate Data  → /api/predict-crowd          │
   │  Incident   → /api/incident-response      │
   │  Text       → /api/translate              │
   └───────────────────────────────────────────┘
                      │
                      ▼
   ┌───────────────────────────────────────────┐
   │         GEMINI 2.0 FLASH API              │
   │  (with automatic fallback simulation)     │
   └───────────────────────────────────────────┘
```

---

## 🤖 AI Integration Flow

```
Fan / Staff Input
      │
      ▼
  ┌──────────────────────────────────────────────┐
  │              /api/chat Endpoint              │
  │                                              │
  │  1. Build Context Prompt:                    │
  │     • Role: FIFA Stadium AI assistant        │
  │     • Match: ENG vs ARG SF2 context          │
  │     • Persona: Friendly, multilingual        │
  │                                              │
  │  2. Send to Gemini 2.0 Flash                 │
  │     model.generateContent(contextPrompt)     │
  │                                              │
  │  3. Parse response.text() and return         │
  └──────────────┬───────────────────────────────┘
                 │
         ┌───────┴──────────┐
         │  Success?        │  No (429 / 503)
         │                  │
         ▼                  ▼
    Gemini AI          Fallback Engine
    Response           (Local Rules)
         │                  │
         └───────┬──────────┘
                 │
                 ▼
          JSON Response  { reply: "..." }
                 │
                 ▼
         Chat UI Bubble Rendered
```

---

## 🔍 Feature Deep-Dives

### 1. 🔴 Live Match Ticker
```
App Loads
    │
    ▼
Calculate: msLeft = kickoffUTC - now()
    │
    ├── msLeft > 0 ──► UPCOMING MODE
    │                  • Live countdown: "KO in 17h 1m"
    │                  • Rotates 6 fact/teaser cards every 5s
    │                  • Shows SF1 result (ESP 1-0 FRA)
    │
    └── msLeft = 0 ──► LIVE MODE (auto-switches)
                       • Badge: LIVE SF2 (red pulse)
                       • Score: 0-0 → 1-0 → 1-1 → 2-1 → 2-2
                       • Live commentary every 6 seconds
                       • Toast pop-ups on goals + VAR checks
```

### 2. 🗺️ Stadium Pathfinder
```
Fan Clicks SVG Quadrant (N / E / S / W)
          │
          ▼
  Load Zone Data:
  • Crowd Load %      • Entry Queue Time
  • Accessibility     • AI routing tip
          │
          ▼
  AI Card:
  "Bottleneck at Verizon Gate (N). Divert to
   HCLTech Gate (E) — wait under 4 minutes."
```

### 3. 🤖 FIFA Cup-Pilot Chatbot
```
User types question (any supported language)
          │
          ▼
   POST /api/chat  { message, language }
          │
          ▼
   Gemini 2.0 Flash generates response with:
   • Stadium-specific knowledge
   • Clear bag & accessibility policies
   • NJ Transit / parking info
          │
          ▼
   Bubble rendered with typing animation
```

### 4. 🚨 Incident Command (Staff)
```
Staff selects: Medical | Security | Crowd | Fire
          │
          ▼
   POST /api/incident-response { type, zone, severity }
          │
          ▼
   Gemini generates:
   ✓ Numbered action checklist
   ✓ Personnel to notify
   ✓ Communication script
   ✓ Escalation path
          │
          ▼
   Interactive checkboxes rendered
   (Track progress in real-time)
```

### 5. 🌐 Translation Bridge
```
Staff types message in source language
          │
          ▼
   Select: From Language ──► To Language
          │
          ▼
   POST /api/translate { text, from, to }
          │
          ▼
   Gemini translates with stadium context
          │
          ▼
   Side-by-side bilingual display
   + copy-to-clipboard
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **AI Engine** | Google Gemini 2.0 Flash | Chat, translation, incident response |
| **Backend** | Node.js + Express.js | REST API server, AI proxy |
| **Frontend** | Vanilla HTML5 + CSS3 + JS | Dashboard UI, SVG map |
| **Styling** | Custom CSS (Glassmorphism) | Dark mode, animations |
| **Icons** | Font Awesome 6.4 | UI iconography |
| **Fonts** | Google Fonts (Outfit + Inter) | Premium typography |
| **Flags** | flagcdn.com | Country flag images |
| **AI SDK** | @google/generative-ai | Official Gemini Node.js SDK |
| **Config** | dotenv | Environment variable management |

---

## 📁 Project Structure

```
PitchPilot-AI/
│
├── 📄 server.js              # Express server + Gemini AI integration
├── 📄 package.json           # Dependencies and npm scripts
├── 📄 .env                   # API key + port config (not committed)
├── 📄 .gitignore             # Excludes node_modules, .env
├── 📄 README.md              # This file
│
└── 📁 public/
    ├── 📄 index.html         # Main app shell (725 lines)
    │   ├── Header: Logo + Match Ticker + Mode Toggle + Language Select
    │   ├── Sidebar: Fan Nav tabs | Staff Nav tabs
    │   └── Main: 6 content sections (Dashboard, Map, Chat, Eco, Ops, Incidents, Translator)
    │
    ├── 📄 styles.css         # Complete UI styling (~1950 lines)
    │   ├── CSS Custom Properties & Dark Theme
    │   ├── Glassmorphism cards & glow effects
    │   ├── Stadium SVG interactive styles
    │   ├── Chat bubble & typing animation
    │   ├── Global language selector
    │   └── Responsive breakpoints (mobile/tablet)
    │
    └── 📄 app.js             # Client application logic (~1420 lines)
        ├── TRANSLATIONS {}    # 6-language dictionary
        ├── Global State       # App state management
        ├── initModeToggle()   # Fan / Staff mode switcher
        ├── initNavigation()   # Tab navigation system
        ├── initTelemetryLoop()# Simulated live telemetry updates
        ├── initMapInteractions() # SVG stadium map handlers
        ├── initChatAssistant()   # Gemini chatbot + fallback
        ├── initSustainabilityHub() # Green points & eco logging
        ├── initIncidentCommand()   # AI incident response system
        ├── initTranslatorBridge()  # Staff translation interface
        ├── initMatchSimulation()   # Countdown + live match sim
        └── initLanguageSelector()  # Global UI translation
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- npm v8+
- Google AI Studio API Key ([Get one free](https://aistudio.google.com))

### 1. Clone the Repository
```bash
git clone https://github.com/SrijaBhattacharyya/PitchPilot-AI.git
cd PitchPilot-AI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

### 4. Start the Server
```bash
npm start
```

### 5. Open in Browser
```
http://localhost:3000
```

> **Simulator Mode:** If the Gemini API quota is exceeded, the app automatically activates a local fallback engine — all features remain fully functional.

---

## 🌐 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/chat` | AI chatbot response | `{ message, language }` |
| `POST` | `/api/predict-crowd` | Queue & crowd forecast | `{ zone, currentLoad }` |
| `POST` | `/api/incident-response` | AI incident checklist | `{ type, zone, severity }` |
| `POST` | `/api/translate` | Language translation | `{ text, from, to }` |
| `GET`  | `/` | Serve the dashboard UI | — |

### Example Request & Response

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Where is the nearest accessible restroom to Section 104?", "language": "en"}'
```

```json
{
  "reply": "The nearest ADA-compliant restroom to Section 104 is on the main concourse level, approximately 50m west near the Verizon Gate (North). A family restroom is also adjacent to the sensory room, 200m west of the North entrance portal."
}
```

---

## 🌍 Multi-Language Support

| Code | Language | Script | RTL Support |
|------|----------|--------|-------------|
| `en` | English | Latin | No |
| `es` | Español | Latin | No |
| `fr` | Français | Latin | No |
| `pt` | Português | Latin | No |
| `ar` | العربية | Arabic | **Yes** |
| `de` | Deutsch | Latin | No |

Switching languages via the 🌐 header dropdown **instantly translates** all navigation, card headers, stat labels, and section titles — with Arabic activating full RTL page layout.

---

## 🏆 Tournament Context

```
FIFA World Cup 2026 — Semifinal Stage (July 15, 2026)
──────────────────────────────────────────────────────
SF1 (Jul 14) · Dallas:   Spain 1–0 France       ✓ DONE
SF2 (Jul 15) · Atlanta:  England vs Argentina   ◄ TODAY (KO 3PM ET)

FINAL (Jul 19) · MetLife Stadium, NJ:
  Spain vs Winner of ENG/ARG               ← THIS VENUE
──────────────────────────────────────────────────────
```

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
Made with ❤️ by <b>Srija Bhattacharya</b>
</p>

Built for: **FIFA World Cup 2026 GenAI Challenge**
Powered by: Google Gemini 2.0 Flash

---

<div align="center">
  <strong>⚽ PitchPilot AI — Powering the World Cup Experience with Generative AI ⚽</strong><br>
  <em>FIFA World Cup 2026 · MetLife Stadium · New York / New Jersey</em>
</div>
