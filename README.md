# Zcart

Zcart is a modern React-based ecommerce storefront built with Create React App and Tailwind CSS. It includes product discovery, filtering, product detail pages, cart management, and responsive navigation for desktop and mobile.

## Features

- Product listing with search, category, brand, rating, and price filters
- Mobile and desktop filter panels
- Product detail pages with image previews and add-to-cart support
- Shopping cart state managed with React Context
- Smooth scrolling and polished UI interactions
- Clerk authentication support via `@clerk/clerk-react`
- Lottie animations for loading and empty states

## Screenshots

### Homepage

![Zcart homepage screenshot](src/assets/banner1.jpg)

### Empty cart state

![Empty cart illustration](src/assets/empty-cart.png)

## Installation

1. Clone or copy the repository.
2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app reloads automatically when files change.

## Build

Create a production build:

```bash
npm run build
```

The optimized output is generated in the `build` folder.

## Available Scripts

- `npm start` — Run the app in development mode
- `npm test` — Launch the test runner
- `npm run build` — Build the app for production
- `npm run eject` — Eject CRA configuration (one-way operation)

## Dependencies

Key dependencies used by this project:

- `react`, `react-dom`
- `react-router-dom`
- `@clerk/clerk-react`
- `axios`
- `react-icons`
- `react-toastify`
- `lottie-react`
- `tailwindcss`

## Notes

- The app uses `src/context` to manage cart and product data.
- `src/components/FilterSection.jsx` and `src/components/MobileFilter.jsx` handle filtering UI.
- The product grid and card layout are implemented in `src/components/ProductCard.jsx`.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
