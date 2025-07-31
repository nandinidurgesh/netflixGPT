## Netflix GPT

- React + Vite
- Tailwind

## Features

- Login/Signup Form
  - Floating Labels using peer and absolute.
  - Firebase Authentication
  - Create sign up user & sign in user API implementation
  - Redux store with user slice
  - OnAuthStateChange API implementation
  - Hygine Changes
    - Unsubscribed to onAuthStateChanged listener
    - Moved all the hard coded values to a constants file

- Browse Page
  - User Menu with Signout feature
  - Firebase updateProfile API implementation
  - Custom Hook to fetch movies using TMDB's nowPlayingMovies API and dispatching it in a store.
  - Hero Container with background trailer video with title and description of the movie
  - Secondary container with movie list.
  - Different Categories of movies.
  - Infinite HZ Scroll with duplicate filter.
