import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import { AuthProvider } from './context/auth'
import './index.css'

function initializeReactApp() {
  const appContainer = document.getElementById('appContainer')
  if (!appContainer) throw new Error('No #appContainer found in DOM')
  const root = createRoot(appContainer)
  root.render(
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

initializeReactApp()
