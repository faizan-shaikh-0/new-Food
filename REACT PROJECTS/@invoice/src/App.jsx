import React from 'react'
import Login from "./components/Login"
import { RouterProvider } from 'react-router-dom'
import {route} from "./components/util/route"
function App() {
  return (
    <RouterProvider router= {route}>
    <div>
      <Login/>
    </div>
    </RouterProvider>
  )
}

export default App
