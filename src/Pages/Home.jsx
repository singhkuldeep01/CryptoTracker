import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import CryptoCoinTable from '../Components/CryptoCoinTable/CryptoCoinTable'
function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <CryptoCoinTable/>
    </>
  )
}

export default Home