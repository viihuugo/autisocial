import React from 'react'
// import './App.css'
import { GlobalStyle } from './Styles/GlobalStyle'

import { Hero, About, Stats, Animation, Message, Misinformation, Warning, Resources } from './components'

function App() {
  

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <About/>
      <Stats/>
      <Animation/>
      <Message/>
      <Misinformation/>
      <Warning/>
      <Resources/>
    </>
  )
}

export default App
