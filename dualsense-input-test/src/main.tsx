import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DualSenseInputProvider } from './Contexts/DualSenseInputContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DualSenseInputProvider>
      <App />
    </DualSenseInputProvider>
  </StrictMode>,
)
