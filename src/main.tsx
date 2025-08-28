import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Surprise from './pages/Surprise.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/surprise', element: <Surprise /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
