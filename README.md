# 💼 Ethic-Wealth v0.2

> A comprehensive, modern financial services platform built with a robust React/Vite frontend and a powerful Node.js/Express backend. Ethic-Wealth delivers a premium user experience, interactive financial calculators, and secure authentication.

---

## 🎬 Demo Preview

![Ethic-Wealth Demo](Frontend/public/demo.gif)

> This demo showcases the dynamic UI, interactive revenue calculator, and smooth transitions of the Ethic-Wealth application. *(Add a demo.gif to your Frontend/public folder!)*

---

## 🚀 Project Overview

Ethic-Wealth is a full-stack financial services platform designed for trust, performance, and aesthetic excellence. It features a modern, responsive frontend using React, Vite, and Tailwind CSS, paired with a secure Node.js backend. Interactive calculators with dynamic framer-motion animations and secure user authentication make it a complete ecosystem for wealth management services.

---

## 🛠 Features

- **⚛️ Modern Frontend:** React, Vite, and custom aesthetic components.
- **🌀 Stunning UI/UX:** Tailwind CSS, Framer Motion for sleek transitions, and Canvas Confetti for celebratory micro-interactions.
- **🧮 Interactive Calculator:** Real-time investment revenue calculator with dynamic sliders and animated results.
- **🔒 Authentication & Security:** Secure JWT-based auth and bcrypt password hashing for user accounts.
- **⚡ High-Performance Backend:** Node.js and Express.js backend architecture.
- **🗄️ Database:** MongoDB with Mongoose for robust user data and inquiry modeling.

---

## 📁 Folder Structure

<details>
<summary>📁 <strong>Project Folder Structure</strong></summary>

```plaintext
ETHIC_WEALTH/Version 0.2/
│
├── Backend/                 # Node.js Express Server
│   ├── config/              # Server and database configurations
│   ├── Controllers/         # Route controllers (business logic)
│   ├── Middleware/          # Auth and validation middlewares
│   ├── Modules/             # Mongoose database models
│   ├── Routes/              # API route definitions
│   ├── server.js            # Main backend entry point
│   └── package.json         # Backend dependencies
│
├── Frontend/                # React Vite Application
│   ├── public/              # Static assets and images
│   ├── src/                 # Main entry points (App.jsx, main.jsx)
│   ├── components/          # React UI components (Navbar, Main, Footer)
│   ├── context/             # React Context for global state (AuthContext)
│   ├── pages/               # Page components (Login, Signup, Home)
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind styling config
│   └── package.json         # Frontend dependencies
│
└── README.md                # Project documentation
```
</details> 

---

## ⚙️ Tech Stack

### Frontend
- **Framework:** React.js, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Canvas Confetti
- **Icons:** Lucide React

### Backend
- **Framework:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Security:** JWT, Bcrypt

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ByteMaster-Purvesh/Ethic-wealth.git

# Navigate into the project
cd "Version 0.2"

# --- Setup Backend ---
cd Backend
npm install
# Create a .env file based on backend requirements (e.g. PORT, MONGO_URI, JWT_SECRET)
npm run dev

# --- Setup Frontend ---
# Open a new terminal tab/window
cd ../Frontend
npm install
# Create a .env file based on frontend requirements
npm run dev
```

---

# 🌐 Deployment

| Service       | Platform      |
| ------------- | ------------- |
| Frontend      | Vercel        |
| Backend       | Render        |
| Database      | MongoDB Atlas |

---

# 👨💻 Author

## Purvesh Somwanshi

Full Stack Developer focused on scalable and modern web applications.

🌐 GitHub: [https://github.com/ByteMaster-Purvesh](https://github.com/ByteMaster-Purvesh)

---

<div align="center">

### ⭐ Star the repository if you found it valuable

</div>
