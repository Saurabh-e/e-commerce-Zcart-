# Zcart

Zcart is a modern React-based ecommerce storefront built with Create React App and Tailwind CSS. It features a premium dark UI, fast product filtering, and responsive navigation across desktop and mobile.

## Features

- Product listing with search, category, brand, rating, and price filters
- Sticky navbar with quick access to Home, Products, About, Contact, cart, and sign-in
- Product cards with large preview images, ratings, and add-to-cart actions
- Responsive filter panel for desktop and a mobile-friendly filter drawer
- Contact page with a support card and message form
- About page with mission, vision, and value propositions
- Shopping cart state managed with React Context
- Smooth scrolling and polished UI interactions
- Clerk authentication support via `@clerk/clerk-react`
- Lottie animations for loading and empty states

## Screenshots

### Products Page

![Products page screenshot](src/assets/banner1.jpg)

This screen shows the product exploration area with the filter sidebar, product count badge, and card-based product layout.

### About Page

The About screen highlights Zcart’s mission, vision, and reasons to choose the store, matching the clean card layout and polished typography shown in the screenshot.

### Contact Page

The Contact screen includes a support panel with address, email, and phone details alongside a styled contact form.

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
