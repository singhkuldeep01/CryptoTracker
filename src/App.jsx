import { useEffect } from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import FetchCoinData from './Services/FetchCoinData';

function App() {
  useEffect(()=>{
    FetchCoinData();
  },[]);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    </>
  )
}

export default App
