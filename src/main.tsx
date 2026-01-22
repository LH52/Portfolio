import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.tsx'
import App from './App.tsx'
import TopBar from './TopBar.tsx'
import Landing from './Landing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopBar />
    <Landing />
    <Home/>
    <App />
  </StrictMode>,
)
