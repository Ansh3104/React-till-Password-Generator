import { useState } from 'react'
import './App.css'
import Card from './componets/Card'
function App() {

  return (
    <><h1 className="text-3xl text-red-500">
      Tailwind is working 🚀
    </h1>
    <Card username="Ansh"/>
    <Card /> //default name is used from card if name not given
    <Card username="Ram"/>
    </>
  )
}

export default App
