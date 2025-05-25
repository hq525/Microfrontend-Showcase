import React, { lazy, Suspense } from 'react'
import './App.css'

// Lazy load the microfrontends
const MFE1 = lazy(() => import('mfe1/App'))
const MFE2 = lazy(() => import('mfe2/App'))

const App: React.FC = () => {

  return (
    <div className="container">
      <header className="main-header">
        <h1>Host Application</h1>
      </header>
      <section>
        <h2>Welcome to our Microfrontend Architecture</h2>
        <p>This is the host application that loads and displays the microfrontends.</p>
      </section>

      <div className="mfe-grid">
        <Suspense fallback={<div>Loading MFE1...</div>}>
          <MFE1 />
        </Suspense>

        <Suspense fallback={<div>Loading MFE2...</div>}>
          <MFE2 />
        </Suspense>
      </div>
    </div>
  )
}

export default App