# 🎬 MovieFlare
**Discover top trending movies by genre or search — powered by TMDB.**  
MovieFlare is a modern, responsive React application that lets users explore movies, filter by genre, and search titles in real-time. Built with Vite and styled with Tailwind CSS, it offers a sleek and fast user experience.




## 📸 Preview


<img width="1512" alt="Screenshot 2025-04-09 at 9 05 49 AM" src="https://github.com/user-attachments/assets/9d30be53-c81c-4dc6-9662-de7b308ac8b7" />
<img width="1512" alt="Screenshot 2025-04-09 at 9 09 09 AM" src="https://github.com/user-attachments/assets/29fbea34-b9e9-468b-806f-2fe58bce1161" />

## 🚀 Features

- 🔍 **Search** movies with real-time debounce input
- 🎞️ **Filter** by genre using a dynamic dropdown
- 📈 Show **popular movies** by default using TMDB’s Discover API
- 🛠️ Clean error handling and loading states
- 🌈 Fully responsive UI with elegant styling

---

## 🧰 Tech Stack

| Category       | Technology                          |
|----------------|--------------------------------------|
| **Framework**  | [React](https://reactjs.org/)        |
| **Build Tool** | [Vite](https://vitejs.dev/)          |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/) |
| **Hooks**      | `useState`, `useEffect`              |
| **Utils**      | [`react-use`](https://github.com/streamich/react-use) for `useDebounce` |
| **API**        | [TMDB API](https://developer.themoviedb.org/) |
| **Components** | `Search.jsx`, `MovieCard.jsx`, Genre Dropdown |

---

## 📡 API Reference

Using **The Movie Database (TMDB)**:

- 🔍 **Search API**  
  `https://api.themoviedb.org/3/search/movie?query={search_term}`

- 🎞️ **Discover API**  
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres={genre_id}`

- 🎭 **Genres API**  
  `https://api.themoviedb.org/3/genre/movie/list`

All API requests require a Bearer Token provided via an `.env` variable:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
