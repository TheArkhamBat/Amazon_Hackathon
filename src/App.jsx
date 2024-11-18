// import { useState } from 'react'
import './App.css'
import Button from "./Components/Button.jsx"
import ResponsiveAppBar from "./Components/ResponsiveAppBar.jsx"
import SimpleBottomNavigation from "./Components/SimpleBottomNavigation.jsx"

function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <div className="mt-4">
        <Button />
      </div>
      <div className="">
        <SimpleBottomNavigation />
      </div>
    </>
  )
}

export default App
