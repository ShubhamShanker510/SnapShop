import React from 'react'
import { Link } from 'react-router-dom'

const ProfileBox = () => {
  return (
    <div className='z-20 absolute top-9 right-0 bg-white block w-60 p-3 border border-gray-400 rounded-md shadow shadow-lg shadow-black '>
        <ul className='cursor-pointer inline-block text-gray-700 text-sm font-light'>
            <Link to='/register'><li className='hover:text-red-600 hover:font-bold'>Create Your Account</li></Link>
            <li className='hover:text-red-600 hover:font-bold'>Login</li>
        </ul>
    </div>
  )
}

export default ProfileBox