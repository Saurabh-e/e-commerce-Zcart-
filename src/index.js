import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'

// Import your Clerk settings from CRA / Vite environment variables
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || process.env.VITE_CLERK_PUBLISHABLE_KEY || process.env.CLERK_PUBLISHABLE_KEY
const FRONTEND_API = process.env.REACT_APP_CLERK_FRONTEND_API || process.env.VITE_CLERK_FRONTEND_API || process.env.CLERK_FRONTEND_API

const appRoot = (
  <DataProvider>
    <CartProvider>
      <App />
      <ScrollToTop color='white' smooth style={{backgroundColor:'#fa2d37', display:'flex', alignItems:'center', justifyContent:'center'}}/>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </CartProvider>
  </DataProvider>
)

const hasClerkConfig = Boolean(PUBLISHABLE_KEY || FRONTEND_API)

createRoot(document.getElementById('root')).render(
  hasClerkConfig ? (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY || undefined} frontendApi={FRONTEND_API || undefined} afterSignOutUrl="/">
      {appRoot}
    </ClerkProvider>
  ) : (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center' }}>
      <div>
        <h1 style={{ marginBottom: 16 }}>Missing Clerk publishable key</h1>
        <p style={{ marginBottom: 8 }}>
          Add <code>REACT_APP_CLERK_PUBLISHABLE_KEY</code> to your <code>.env</code> file.
        </p>
        <p>Then restart the development server.</p>
      </div>
    </div>
  )
)