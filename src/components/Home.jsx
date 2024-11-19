import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-l from-gray-400 to-gray-700'>
        <div className='flex  justify-start '>
            <h1 className='text-white text-2xl mt-32 ml-10'>Click on below button For Contact Management...</h1>
           
        </div>
        <div>
        <button className='text-white text-2xl mt-5 ml-10 bg-black rounded-md p-2'> <Link to={'/fetch'}>Click me</Link></button>
        </div>
      
      
    </div>
  )
}

export default Home
