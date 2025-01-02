import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import CoinDetailsPage from '../../Pages/CoinDetailsPage'
import Layout from '../../Pages/Layout'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={< Layout/>}>
            <Route index element={<Home />} />
            <Route path="/coin/:coinId" element={<CoinDetailsPage />} />
        </Route>
    </Routes>
  )
}

export default Routing