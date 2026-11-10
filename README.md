# Browser Extension Manager

A responsive web application built with React, TypeScript, and Tailwind CSS for managing browser extensions. The dashboard allows users to view, toggle, filter, and remove extensions with full support for light and dark themes.

![Browser Extension Manager Preview Dark](./assets/preview-dark.png)
![Browser Extension Manager Preview Light](./assets/preview-light.png)

---

## Features

- **Extension Management**:
  - Displays browser extensions in a clean, responsive card grid.
  - Interactive toggle switches to enable or disable individual extensions.
  - Action button to remove extensions from the list.

- **Status Filtering**:
  - Filter extensions by status: **All**, **Active**, or **Inactive**.

- **Theme Support (Light / Dark Mode)**:
  - Theme switching between light and dark modes with custom color palettes and gradients.
  - Automatically respects system preferences (`prefers-color-scheme`) and persists user choice in `localStorage`.

- **Responsive Design & Accessibility**:
  - Fully responsive layout optimized for mobile, tablet, and desktop viewports.
  - Accessible focus states and interactive controls.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) and custom SVG assets
- **Code Quality**: ESLint 9

---

## Project Structure

```
src/
├── components/
│   ├── ExtensionCard.tsx   # Individual extension card with toggle and remove buttons
│   └── NavBar.tsx          # Navigation bar with branding and theme toggle
├── context/
│   └── ThemeProvider.tsx   # React Context for theme state and persistence
├── hooks/
│   └── useTheme.tsx        # Custom hook for theme access
├── data.json               # Initial extension dataset
├── App.tsx                 # Main layout, filter controls, and extensions state
├── index.css               # Tailwind CSS theme configuration and styling
└── main.tsx                # Application root entry point
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (or npm / yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd browser-extension-manager
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Build

Create a production build:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
pnpm run lint
```
