# Ceren Annac Resume Website

This is a personal portfolio and resume website built for **Ceren Annac**, a front-end developer and computer science & biology student. The site features responsive design, a dynamic comment system using **Cloudflare Workers**, and showcases skills, projects, and contact information.

## ✨ Features

- Clean and modern front-end layout (HTML, CSS, JS)
- Responsive design for all screen sizes
- Comment system (Guestbook) powered by Cloudflare Workers
- API interaction with JSON POST/GET
- Animated skills section
- Typewriter intro

## 🧠 Tech Stack

- HTML5 & CSS3
- JavaScript (Vanilla)
- Cloudflare Workers (serverless)
- [Optional] Cloudflare D1 (not used yet)

## 🌐 Live Link

Visit the deployed site:  
🔗 [https://cerenannac.com](https://cerenannac.com)

## ⚙️ How to Run Locally

1. Clone this repo:
   ```
   git clone https://github.com/cerenannac/cerenresume
   cd cerenresume
   ```

2. Open `index.html` in your browser.

3. To simulate API, use a real Worker URL for comment system in `main.js`.

## 📁 Folder Structure

```
/ (root)
├── index.html
├── style.css
├── main.js
├── cerenpp.jpeg
├── README.md
├── research.md
└── (API hosted externally via Cloudflare Worker)
```

## 💬 Comment System

The comment section uses a Cloudflare Worker hosted at:

```
https://ceren-comments.cerennannac1.workers.dev/comments
```

It supports:
- `GET` to fetch all comments
- `POST` to add new comment

## 📄 License

MIT
