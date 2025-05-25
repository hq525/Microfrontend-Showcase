import React, { lazy, Suspense } from 'react'
import './App.css'
import useStore from './store'
const MFE1 = lazy(() => import('mfe1/App'))
const MFE2 = lazy(() => import('mfe2/App'))

const App: React.FC = () => {

const { count, increment, clear } = useStore()

return (
  <div className="container">
    <header className="main-header">
      <h1>Host</h1>
    </header>
    <section>
      <h2>Host Count: {count}</h2>
      <div className="button-container">
        <button onClick={increment} className="button">Increment</button>
        <button onClick={clear} className="button">Clear</button>
      </div>
    </section>
    <div className="mfe-grid">
      <Suspense fallback={<div>Loading MFE1…</div>}>
        <MFE1 />
      </Suspense>
      <Suspense fallback={<div>Loading MFE2…</div>}>
        <MFE2 />
      </Suspense>
    </div>
  </div>
  )
}
export default App