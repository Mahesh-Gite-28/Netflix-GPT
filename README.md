# 🚀 NetflixGPT – AI-Driven Movie Discovery Engine

**A production-grade, intelligent movie recommendation platform blending the cinematic experience of Netflix with the cognitive capabilities of Google Gemini AI.  
Built using React, Redux Toolkit, Firebase, Tailwind CSS, TMDB API, and Gemini AI — delivering a fast, immersive, and personalized movie exploration experience.**

---

## 🔥 Live Demo  
👉 *https://netflix-gpt-app-plum.vercel.app/*

---

## 📸 Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fcc84e87-42fa-4fcd-9aaf-9301aa26081a" alt="Login" /></td>
    <td><img src="https://github.com/user-attachments/assets/f2e03e1e-2c76-4ef0-9aef-ee2f2252abcf" alt="Hero" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9ba42453-89a8-4b98-a48c-273cbf76f1a1" alt="Movie Rows" /></td>
    <td><img src="https://github.com/user-attachments/assets/196c29cc-6403-4f07-9b41-7d55b5d15160" alt="Profile Menu" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/50b89ee0-5c27-4897-bc4c-4656e1c7081f" alt="GPT Search" /></td>
    <td><img src="https://github.com/user-attachments/assets/a4de5c7f-17c0-4213-bd4e-a780b070cacb" alt="AI Grid" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/afa3326b-acbb-4080-9fcf-6c7f40c096d5" alt="Cards" /></td>
    <td><img src="https://github.com/user-attachments/assets/6c07e536-d94f-4f32-944e-de1b5ebf0e84" alt="Responsive" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/ef70cc80-61c1-4e03-919f-386617224a2d" alt="Experience" /></td>
  </tr>
</table>

---

## 🎯 What is NetflixGPT?

NetflixGPT is a next-generation AI-powered movie assistant.  
Instead of scrolling endlessly, users can simply type natural queries like:

- *“Show me dark thriller movies like Shutter Island”*  
- *“Funny retro Indian movies from the 90s”*  
- *“Romantic Korean dramas available in Hindi”*

Gemini AI understands the intent → maps it to TMDB → fetches relevant movies → displays them beautifully.

---

# ✨ Core Features

## 🔐 1. Enterprise-Grade Authentication
- Firebase Email/Password Authentication  
- Persistent session management  
- Protected routes with auto-redirection  
- Real-time form validation  

---

## 🎬 2. Personalized Movie Engine
- Netflix-style autoplaying HD background trailer  
- TMDB Movie Categories:
  - 🎞 *Now Playing*  
  - 🔥 *Trending*  
  - ⭐ *Top Rated*  
  - ⏳ *Upcoming*  
- Custom hooks for modular architecture:
  - useNowPlayingMovies()
  - usePopularMovies()
  - useMovieTrailer(movieId)
- Seamless YouTube trailer integration  

---

## 🤖 3. AI-Powered GPT/Gemini Search
- Natural language recommendations  
- Multilingual input support:
  - English 🇺🇸  
  - Hindi 🇮🇳  
  - Spanish 🇪🇸  
- Smart AI → TMDB mapping  
- Redux-powered result management  
- Memoized API calls for speed  

---

## ⚡ 4. Performance, UX & Architecture
- Redux Toolkit global store  
- Movie caching for better UX  
- Shimmer skeleton UI  
- Fully responsive Tailwind design  
- Optimized rendering & debounced API calls  
- Clean and scalable folder structure  

---

# 🛠 Tech Stack

*Frontend          :* React.js, Redux Toolkit, React Router  
*Styling           :* Tailwind CSS  
*Backend & Auth    :* Firebase  
*APIs              :* TMDB API, Gemini AI  
*Tools             :* Git, NPM, VS Code, Vercel  

---

## 📁 Project Folder Structure

```plaintext
NETFLIX-GPT/
│
├── node_modules/
│
├── public/
│   ├── assets/
│   │   ├── info_icon.svg
│   │   ├── loader.gif
│   │   ├── Netflix_icon.png
│   │   ├── No_Image.webp
│   │   └── play_icon.svg
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptMovieSuggestions.js
│   │   ├── GptSearch.js
│   │   ├── GptSearchBar.js
│   │   ├── Head.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── SecondaryContainer.js
│   │   ├── ShimmerBrowse.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│
│   ├── hooks/
│   │   ├── useAiringTodayTVShows.js
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── useOnTheAirTVShows.js
│   │   ├── usePopularMovies.js
│   │   ├── usePopularTVShows.js
│   │   ├── useTopRatedMovies.js
│   │   ├── useTopRatedTVShows.js
│   │   ├── useTrendingMovies.js
│   │   └── useUpcomingMovies.js
│
│   ├── utils/
│   │   ├── firebase.js
│   │   ├── gptQuery.js
│   │   ├── language.js
│   │   ├── movieSlice.js
│   │   ├── openai.js
│   │   ├── store.js
│   │   └── userSlice.js
│
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js


# 🚀 Getting Started

## *1️⃣ Clone the Repository*
bash
git clone https://github.com/Mahesh-Gite-28/Netflix-GPT.git
cd netflix-gpt


## *2️⃣ Install Dependencies*
bash
npm install


## *3️⃣ Add Environment Variables*  
Create a .env file:

bash
REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_OPENAI_KEY=your_ai_api_key

# Firebase Config
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


## *4️⃣ Start the App*
bash
npm start


---

# 🤝 Contributing

- Fork the repository  
- Create your feature branch  
- Commit your changes  
- Push to the branch  
- Open a Pull Request  

---

# 🏆 Developer  

### Developed with ❤, creativity 🎨, and code 💻 by *Mahesh Gite*
