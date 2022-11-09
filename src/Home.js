import React from 'react'
import { Outlet } from 'react-router-dom'
import Main from './Main'

const Home = () => {
  return (
    <div>
      <Main/>
      <Outlet/>
    </div>
  )
}

export default Home
