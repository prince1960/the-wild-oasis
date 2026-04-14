# 🏨 The Wild Oasis

An internal hotel management dashboard for **The Wild Oasis** — a boutique hotel with 8 wooden cabins. Built as a full-stack React application with a Supabase backend, the app allows hotel staff to manage cabins, bookings, guests, and settings from a single interface.

---

## 🚀 Features

- **Dashboard** — Overview of recent bookings, check-ins/check-outs, and occupancy stats
- **Cabins** — View, create, edit, and delete cabin listings with images and pricing
- **Bookings** — Manage all guest bookings with check-in/check-out functionality
- **Authentication** — Secure login for hotel staff; user account management
- **Settings** — Configure breakfast price, min/max booking length, and max guests
- **Dark mode** — Persisted UI theme preference

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v7 |
| Styling | Styled Components |
| Remote State | TanStack React Query v4 |
| Backend / DB | Supabase (PostgreSQL + Storage) |
| Icons | React Icons |
| Date utilities | date-fns |
| Build tool | Vite |

---

## 📁 Project Structure

```
src/
├── features/
│   ├── authentication/   # Login, user account
│   ├── bookings/         # Bookings list and detail
│   ├── cabins/           # Cabin table and row components
│   ├── check-in-out/     # Check-in / check-out flows
│   ├── dashboard/        # Stats, charts, activity
│   └── settings/         # App-wide hotel settings
├── pages/                # Route-level page components
├── services/             # Supabase API calls (apiCabins, etc.)
├── hooks/                # Custom React hooks
├── ui/                   # Reusable UI primitives (layout, buttons, etc.)
├── utils/                # Helper functions (formatCurrency, dates)
└── styles/               # Global styles
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18
- A [Supabase](https://supabase.com) project with the required tables (`cabins`, `bookings`, `guests`, `settings`)

### Installation

```bash
git clone https://github.com/prince1960/the-wild-oasis.git
cd the-wild-oasis
npm install
```

### Environment

The Supabase URL and public key are currently stored directly in `src/services/supabase.js`. For production use, move them to a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
