📋 PasteApp — Modern Note & Code Snippet Manager

A fast, sleek, and intuitive web application designed to create, store, format, and manage code snippets and text notes effortlessly. Built with modern frontend tooling, PasteApp features a distraction-free macOS-inspired editor interface paired with instant local persistence and responsive layout mechanics.

🌐 Live Demo & Deployment

Live Application: PasteApp on Vercel

Deployment Platform: Vercel

Repository: shayab-dev/PasteApp

📂 Repository Contents

React + Vite single-page application

Tailored macOS-style window mockups and UI headers

Dynamic note and paste creation engine

Integrated search, filtering, and snippet browsing

Copy-to-clipboard, view, edit, and deletion actions

Local persistence using browser storage

Responsive layout supporting mobile, tablet, and desktop viewports

🛠️ Tools & Technologies Used

Framework / Library: React.js

Build Tool: Vite

Styling: Tailwind CSS

Icons & UI: Lucide React / SVG Assets

Linter & Code Quality: ESLint

Version Control: Git & GitHub

Deployment & Hosting: Vercel CI/CD

🎯 Purpose of This Project

To build a high-performance productivity tool for storing quick snippets, logs, and reusable code blocks.

To implement component-driven UI architecture with clean state management.

To practice utility-first styling with Tailwind CSS for consistent dark-themed interfaces.

To deliver an optimized user experience with instantaneous feedback and client-side routing.

To demonstrate modern development, testing, and production deployment workflows.

💡 Key Features

Intuitive Editor Interface: Clean title and body inputs styled with a signature three-dot window frame.

CRUD Functionality: Create, view, update, and delete pastes smoothly in real time.

One-Click Clipboard Copy: Quick shareable actions to copy code or note content directly.

Persistent Storage: Retains saved snippets locally so data remains intact across page refreshes.

Fast Search & Filter: Instantly lookup pastes by title or keyword.

Lightweight & Fast: Bundled with Vite for instant Hot Module Replacement (HMR) and optimized static builds.

Fully Responsive: Adapts seamlessly across mobile handsets, tablets, and wide monitors.

🚀 Getting Started

To run and experiment with this project locally:

Prerequisites

Ensure you have Node.js installed on your machine (v16.x or newer recommended).

Installation

Clone the repository:

git clone https://github.com/shayab-dev/PasteApp.git


Navigate into the project folder:

cd PasteApp


Install project dependencies:

npm install


Launch the local development server:

npm run dev


Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

Production Build

To create an optimized production bundle:

npm run build


📁 Project Structure

PasteApp/
│
├── public/                 # Static public assets
├── src/                    # Application source code
│   ├── assets/             # Images, SVGs, and brand assets
│   ├── components/         # Reusable UI modules (Navbar, Cards, Editor)
│   ├── context/ / redux/   # State management and storage handlers
│   ├── App.jsx             # Main application layout and routes
│   ├── main.jsx            # React root mount
│   └── index.css           # Global stylesheet & Tailwind directives
│
├── .gitignore              # Git ignored files and directories
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Scripts and project dependencies
├── postcss.config.js       # PostCSS styling processor
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── README.md               # Project documentation


📱 Responsive Design

Tested and verified across multiple viewports:

💻 Desktop & Ultra-wide monitors

💻 Laptops

📱 Tablets & iPads

📱 iOS & Android mobile devices

📚 What I Learned

Building and structuring component hierarchies in React with Vite.

Working with Tailwind CSS utility classes to achieve cohesive dark-mode aesthetic styling.

Handling form state, validation, and controlled inputs cleanly.

Implementing local storage persistence for browser-based client state.

Configuring automated Git pushes to trigger continuous deployments via Vercel.

🔄 Future Enhancements

[ ] Syntax highlighting for multi-language code snippets (JavaScript, Python, C++, etc.).

[ ] Shareable short links via cloud backend integration (Supabase / Firebase).

[ ] Password-protected or self-expiring temporary pastes.

[ ] Light / Dark theme switcher toggle.

[ ] Tagging and categorizing system for organized archiving.

👤 Author

Shayab Rahman

GitHub: @shayab-dev

📄 License

This project is open source and available under the MIT License.
