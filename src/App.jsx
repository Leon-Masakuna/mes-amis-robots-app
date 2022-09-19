import React from 'react'
import Request from "./Request"
import RobotDetails from "./RobotDetails"
import { Routes, Route } from "react-router-dom";
import Title from "./Title"
import "./App.css"

function App() {
  return (
    <>
      <Title />
          <Routes>
            <Route path="/" element={<Request />} />
            <Route path="/details/:id" element={<RobotDetails />} />
          </Routes>
    </>
  )
}

export default App;