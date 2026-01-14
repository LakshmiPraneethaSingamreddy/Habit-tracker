# 🌱 30-Day Habit Tracker

A simple and interactive **30-day habit tracker** web application that helps users track daily habits using a clean table-based UI. Each habit is represented as a row, and each day of the month is represented as a column. Users can mark habits as completed, undo actions, customize habit colors, and manage habits easily.

---

## 🚀 Features

- 📅 Track habits for a **30-day period**
- ➕ Add new habits with a **custom color**
- 🎨 Change habit color anytime during the month
- ✅ Click to mark a habit as completed for a day
- ↩️ Click again to undo completion
- ❌ Remove habits
- 💾 **Client-side data persistence** using `localStorage`
- 📱 Responsive UI using **Bootstrap 5**

---

## 🛠️ Tech Stack

- **HTML5**
- **Bootstrap 5**
- **CSS3**
- **Vanilla JavaScript**
- **Browser localStorage**

---

## 📂 Project Structure
habit-tracker-30-days/
│
├── index.html
├── style.css
├── script.js
├── assets
    ├──background.jpg
└── README.md


---

## 🧠 How It Works
- Each habit is stored as an object with:
  - A unique ID
  - Habit name
  - A single color assigned to the habit
  - A progress array representing completion status for each day
- Clicking on a table cell toggles the completion status for that day
- Habit data is saved locally so progress is preserved across page refreshes

---

🌍 Hosting

This project is hosted using GitHub Pages.
To enable GitHub Pages:
You can access the habit tracker at the url : https://lakshmipraneethasingamreddy.github.io/Habit-tracker/

## ▶️ How to Run the Project

1. Clone the repository:
   git clone https://github.com/LakshmiPraneethaSingamreddy/Habit-tracker.git
2. Open the project folder:
   cd habit-tracker
3. Open index.html in your browser:
   Double click the file, or
   Use Live Server (VS Code recommended)

✨ Future Improvements
1. Dynamic days selection (28–31 days)
2. Habit streak tracking
3. Progress percentage visualization
4. Export progress data
   
