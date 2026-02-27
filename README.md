# Frontend Intern Job Task

A responsive React + Vite dashboard application built as a frontend intern task. The app includes authentication, user and product management views, analytics charts, and loading states.

**Features**
- **Authentication:** Login flow and protected routes.
- **Dashboard:** Overview metrics and animated widgets.
- **Users & Products:** Listings, details, and drill-down views.
- **Analytics:** Charts and visualizations using Recharts.
- **Loaders:** Dedicated loading components for UX while data loads.

**Tech Stack**
- React 19
- Vite
- Tailwind CSS
- Axios
- React Router
- Recharts
- Framer Motion
- React Toastify
- ESLint

**Quick Start**

Prerequisites: Node.js and a package manager (`npm` or `yarn`).

Install dependencies:

```bash
npm install
# or
yarn
```

Run the dev server:

```bash
npm run dev
# or
yarn dev
```

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

Lint the codebase:

```bash
npm run lint
# or
yarn lint
```

Open the app at the dev server URL (usually http://localhost:5173).

**Project Structure (important files)**
- `src/main.jsx` — app entry and global providers. See [src/main.jsx](src/main.jsx)
- `src/pages/Login.jsx` — login page and auth flow. See [src/pages/Login.jsx](src/pages/Login.jsx)
- `src/pages/DashboardLayout.jsx` — app layout used for protected routes. See [src/pages/DashboardLayout.jsx](src/pages/DashboardLayout.jsx)
- `src/components/Dashboard/DashBoard.jsx` — dashboard view and widgets. See [src/components/Dashboard/DashBoard.jsx](src/components/Dashboard/DashBoard.jsx)
- `src/components/Dashboard/Analytics.jsx` — charting and analytics. See [src/components/Dashboard/Analytics.jsx](src/components/Dashboard/Analytics.jsx)
- `src/Routers/Router.jsx` — route definitions. See [src/Routers/Router.jsx](src/Routers/Router.jsx)
- `src/Routers/PrivetRoute.jsx` — protected route wrapper. See [src/Routers/PrivetRoute.jsx](src/Routers/PrivetRoute.jsx)
- `src/components/Lodder` — loaders used across pages. See [src/components/Lodder](src/components/Lodder)

**Configuration & Notes**
- The project uses Tailwind CSS. Check `tailwind.config.js` if present.
- API endpoints are configured where `axios` is used; update base URLs in the relevant service files if needed.
- ESLint is configured; run `npm run lint` to see issues.

**Next steps**
- Start the dev server and verify flows (login, dashboard, users, products).
- Add environment-based API configuration if integrating with a remote backend.

**License**
This repository is for an intern task — check with the owner for reuse permissions.

---

If you want, I can also run the dev server locally, add an environment config, or generate a short CONTRIBUTING guide.
