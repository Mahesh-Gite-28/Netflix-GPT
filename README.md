🚀 NetflixGPT

NetflixGPT is a smart, AI-powered movie recommendation and browsing application inspired by Netflix.
It includes authentication, TMDB movie data, background trailers, and an AI search engine powered by Gemini.

🛠️ Project Setup & Core Steps

Initialize React App using npx create-react-app netflix-gpt

Configure TailwindCSS

Build Header Component

Implement Routing

🔐 Authentication (Firebase)

Login form

Sign Up form

Form validation (Regex)

useRef hook for form inputs

Firebase setup

Deploy app to production

Create SignUp user

Implement SignIn user API

Created Redux store with userSlice

Implemented SignOut

Update profile details

Bug Fixes

Signup user displayName & photo update issue

Redirect:

Unauthenticated → /login

Authenticated → /browse

Unsubscribe onAuthStateChanged to avoid memory leaks

🎬 TMDB Integration

Added hardcoded constants

Registered TMDB API and generated access token

Fetched Now Playing Movies

Implemented custom hooks:

useNowPlayingMovies

usePopularMovies

useTopRatedMovies

useUpcomingMovies

Created movieSlice

Updated store with TMDB data

🎞️ UI & Movie Components

Designed Main Container and Secondary Containers

Fetched trailer video from TMDB

Updated Redux with trailer data

Embedded YouTube trailer (autoplay + mute)

Styled UI using TailwindCSS

Built:

Movie List

Movie Card

TMDB Image CDN integrated

Built multiple hooks to fetch/store movie data

Browse page made fully responsive

🤖 NetflixGPT – AI Movie Search

Created GPT Search Page

GPT Search Bar

Multilingual Search Bar

Integrated Gemini API for movie recommendations

.env configuration for secret keys

Memoized custom hooks for performance

Fully responsive UI

⭐ Features Overview
🔐 Login / Sign Up

Login / Signup pages

Redirect to browse page after successful login

🎬 Browse (Protected Page)

Header

Main Movie Banner

Background Trailer

Title & Description

Movie Suggestions

Multiple Movie Lists

🤖 NetflixGPT Search

AI-powered Search Bar

Smart Movie Suggestions
