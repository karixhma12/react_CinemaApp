# 🎬 CineScope

A movie discovery app built with React, demonstrating core concepts like Single Page Application (SPA) routing, layouts, and error boundaries.

**Live Link:** https://luminous-hamster-232ade.netlify.app

---

## Concepts Covered

### 1. Single Page Application & Routing
- Used `react-router-dom` to handle client-side routing
- No page reloads when navigating between pages
- `BrowserRouter` intercepts URL changes and gives React control
- `Routes` and `Route` map URLs to components
- `Link` navigates without triggering browser page requests
- Dynamic routes with `useParams` — one route handles all genres via `/genre/:name`

### 2. Layout
- Shared `Navbar` and `Footer` wrap every page using a Layout component
- `Outlet` acts as a placeholder where child page content renders
- Avoids repeating navbar/footer code on every page

### 3. Error Boundary
- The Mystery genre has no data (`null`) causing a crash
- `ErrorBoundary` class component catches the crash gracefully
- Shows a friendly fallback UI instead of a blank screen
- Uses `getDerivedStateFromError` to detect crashes
- Uses `componentDidCatch` to log error info
- Resets automatically when navigating to a different route

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with app intro |
| Genre | `/genre/:name` | Movie cards for action, horror, comedy |
| Mystery | `/genre/mystery` | Triggers error boundary |
| 404 | `*` | Page not found screen |

---

## Tech Stack

- React 18
- React Router DOM v6
- Vite
- CSS (custom dark theme)
- Netlify (deployment)

---

## Running Locally

```bash
git clone https://github.com/karixhma12/react_CinemaApp.git
cd react_CinemaApp/cinemawebsite
npm install
npm run dev
```
