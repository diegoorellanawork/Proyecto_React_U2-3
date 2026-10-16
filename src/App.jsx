import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Saludo } from './components/saludo'

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-sky-200">
        Proyecto U2_3
      </h1>
      <Saludo />
    </div>
  )
}

export default App
