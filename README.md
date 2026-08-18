# 📝 Notes App

> A minimal, full-stack notes application designed to capture ideas quickly and keep them organized.

🌐 **Live Demo:** YOUR_LIVE_WEBSITE_URL

📦 **GitHub:** YOUR_GITHUB_REPOSITORY_URL

---

## ✨ What is this?

Notes App is a single-page full-stack web application where users can create, view, and delete notes through a clean dark-themed interface.

The project demonstrates how a frontend communicates with a RESTful backend using asynchronous JavaScript and `fetch()`.

---

## 🚀 Features

- ✍️ Create notes with a title and content
- 📖 View all saved notes
- 🗑️ Delete notes instantly
- ⚡ Asynchronous API communication using `fetch()`
- 🌙 Dark-themed interface
- 📱 Responsive layout for desktop and mobile
- 🔌 RESTful API endpoints
- 💾 JSON-based local data storage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| 🟢 Node.js | Runtime environment |
| 🚂 Express.js | Backend & REST API |
| 🌐 HTML5 | Page structure |
| 🎨 CSS3 | Styling & responsive design |
| ⚡ JavaScript | Frontend logic & API requests |
| 📄 JSON | Local data storage |

---

## 🧩 How It Works

```text
             ┌──────────────────────┐
             │      Browser         │
             │  HTML + CSS + JS     │
             └──────────┬───────────┘
                        │
                     fetch()
                        │
                        ▼
             ┌──────────────────────┐
             │    Express Server    │
             │       Node.js        │
             └──────────┬───────────┘
                        │
                  REST API
                        │
                        ▼
             ┌──────────────────────┐
             │     notes.json       │
             │    Data Storage      │
             └──────────────────────┘
## 🔌 API Endpoints

### Get All Notes

```http
GET /notes
```

Returns all stored notes.

### Create a Note

```http
POST /notes
```

Example request:

```json
{
  "title": "Learning Node.js",
  "content": "Building my first REST API."
}
```

### Delete a Note

```http
DELETE /notes/:id
```

Deletes a note using its unique ID.
