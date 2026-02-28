# AI-Powered-Memory-Match-Game
AI-Powered Memory Match Game is an adaptive card matching game built using HTML, CSS, and JavaScript. The game tracks player performance (accuracy, moves, and completion time) and automatically adjusts difficulty using a simple AI-based logic system. It features dynamic grid generation, smooth card animations, dark mode, and responsive design.

An intelligent and adaptive memory card matching game that adjusts difficulty based on player performance.



## 🚀 Features

- 🎮 Dynamic Grid System (4×4, 6×6, 8×8)
- 🤖 AI-Based Difficulty Adjustment
- ⏱ Timer Tracking
- 🔢 Move Counter
- 🌙 Dark / Light Mode Toggle
- 🔄 Restart Button
- 📱 Fully Responsive Design
- 🎲 Fisher–Yates Shuffle Algorithm

---

## 🧠 How AI Works

The game calculates:

- Player Accuracy = Matches / Moves
- Completion Time

### Difficulty Logic:

| Condition | Difficulty |
|-----------|------------|
| Accuracy > 80% & Time < 60s | Hard |
| Accuracy > 60% | Medium |
| Otherwise | Easy |

After each completed round, the AI adjusts the grid size automatically.



## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage (Optional for leaderboard upgrade)


## 📂 Project Structure
AI-Memory-Match/
│
├── index.html
├── style.css
├── script.js
└── README.md
