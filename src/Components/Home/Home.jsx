import React from 'react'
import Header from '../Header/Header'
import MiniCards from '../MiniCards/MiniCards'

const Home = () => {
  return (
    <>
    <div className='max-h-screen'>
        <Header />
        <MiniCards />
    </div>
    </>
  )
}

export default Home