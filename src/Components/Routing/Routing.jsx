import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import CoinDetailsPage from '../../Pages/CoinDetailsPage'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinDetailsPage />} />
    </Routes>
  )
}

export default Routing