
<div align="center">

```
██╗  ██╗ █████╗ ██╗██████╗  ██████╗   █████╗ ██╗
██║ ██╔╝██╔══██╗██║██╔══██╗██╔═══██╗ ██╔══██╗██║
█████╔╝ ███████║██║██████╔╝██║   ██║ ███████║██║
██╔═██╗ ██╔══██║██║██╔══██╗██║   ██║ ██╔══██║██║
██║  ██╗██║  ██║██║██║  ██║╚██████╔╝ ██║  ██║██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═╝  ╚═╝╚═╝
```

### `> SYSTEM ONLINE — YOUR AI DOESN'T WAIT, IT PREDICTS.`

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-8B5CF6?style=for-the-badge)

</div>

---

## ⚡ WHAT IS KAIRO?

> Kairo isn't a chatbot. It's not a dashboard. It's the AI that runs in the background of your life — watching patterns, weighing options, and hitting you with the right move **before you even ask.**

It tracks your habits. It knows your commute. It knows you order pizza on Friday nights. And it tells you the cheapest option **automatically** — via voice, no clicks required.

```bash
$ kairo speak
> "Heyyy boss, it's Friday night! Luigi's has 40% off on Swiggy. Should I place your usual?"
> Listening...
> [You]: "Yeah, go ahead"
> ✅ Order placed. ETA: 22 minutes.
```

---

## 🧠 AGENT ARCHITECTURE

```
┌──────────────────────────────────────────────┐
│               KAIRO AGENT GRAPH              │
│                                              │
│  ┌─────────────┐      ┌──────────────────┐  │
│  │ TriggerAgent│─────▶│  DecisionAgent   │  │
│  │  (time+ctx) │      │  (best option)   │  │
│  └─────────────┘      └────────┬─────────┘  │
│                                │            │
│  ┌─────────────┐      ┌────────▼─────────┐  │
│  │ MemoryAgent │◀─────│   DataAgent      │  │
│  │ (habits/prefs)     │ (live prices)    │  │
│  └─────────────┘      └──────────────────┘  │
│                                              │
│           FastAPI  ◀──▶  Next.js 15          │
│           WebSocket     Voice UI             │
└──────────────────────────────────────────────┘
```

| Agent | Role |
|-------|------|
| 🎯 **TriggerAgent** | Monitors time + context to fire suggestions at the exact right moment |
| ⚖️ **DecisionAgent** | Compares Ola, Uber, Rapido / Swiggy, Zomato, Blinkit in real-time |
| 🧠 **MemoryAgent** | Tracks habits, preferences, and past decisions to personalize everything |
| 📡 **DataAgent** | Simulates live pricing, ETA, and availability data across all providers |

---

## 🚀 STACK

```
Frontend  →  Next.js 15 (App Router) + TypeScript
Backend   →  FastAPI + Python 3.11
AI Layer  →  LangGraph multi-agent orchestration
Voice     →  Web Speech API (SpeechSynthesis + SpeechRecognition)
Styling   →  Vanilla CSS + Glassmorphism + Dark Mode
```

---

## 🛠 RUN IT LOCALLY

```bash
# Clone the matrix
git clone https://github.com/shreed27/Kairo.AI.git
cd Kairo.AI

# Boot the backend
cd backend
pip install -r requirements.txt
python main.py
# → http://localhost:8000

# Boot the frontend
cd ../frontend
npm install
npm run dev
# → http://localhost:3000
```

---

## 🔮 FEATURES

- **`voice-first`** — Kairo speaks first. You just say yes or no.
- **`proactive triggers`** — Suggests rides at 9 AM on Monday, dinner at 7 PM on Friday.
- **`real-time comparison`** — Live price + ETA across Ola, Uber, Rapido, Swiggy, Zomato, Blinkit.
- **`memory bank`** — Learns your habits over time. Gets smarter every day.
- **`premium UI`** — Glassmorphism dark dashboard with animated voice orb.
- **`smart calendar`** — Auto-detects events and pre-plans logistics.
- **`notification center`** — Real-time alerts, prioritized by urgency.

---

## 📁 PROJECT STRUCTURE

```
Kairo.AI/
├── backend/
│   ├── agents/
│   │   ├── decision_agent.py   # Picks the best deal
│   │   ├── data_agent.py       # Live data simulation
│   │   ├── memory_agent.py     # User habit tracking
│   │   └── trigger_agent.py    # Time-based triggers
│   ├── graph.py                # LangGraph orchestration
│   ├── orchestrator.py         # Agent coordinator
│   ├── voice_stream.py         # Voice pipeline
│   └── main.py                 # FastAPI entry point
│
└── frontend/
    ├── app/
    │   ├── page.tsx            # Home + VoiceArena
    │   ├── rides/              # Ride comparison page
    │   ├── food/               # Food order page
    │   ├── memory/             # User memory bank
    │   ├── notifications/      # Notification center
    │   └── calendar/           # Smart calendar
    ├── components/
    │   ├── VoiceArena.tsx      # Animated voice orb
    │   ├── RightSidebar.tsx    # Live context sidebar
    │   └── Sidebar.tsx         # Navigation
    └── lib/
        └── voice.ts            # Speech engine
```

---

## 🧬 THE VISION

Most AI assistants are **reactive** — you ask, they answer. Kairo is **proactive** — it observes your patterns and acts before you realize you need it.

> *"The best interface is no interface."*

Kairo is the assistant that works silently until the moment it matters — then it speaks up, makes the call, and gets out of the way.

---

<div align="center">

**Built with 🔥 by [shreed27](https://github.com/shreed27)**

`> KAIRO IS ALWAYS WATCHING. ALWAYS OPTIMIZING. ALWAYS ONE STEP AHEAD.`

</div>
