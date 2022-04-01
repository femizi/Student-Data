import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Display = ({ item }) => {
  return (
    <li className='grid grid-cols-4 text-sm md:grid-cols-8 py-4 md:px-7 md:gap-3 px-4 gap-1 border-b-[1px] border-[#ECECEC] text-[#343434]'>
      <div>{item.id}</div>
      <div className='first-letter:uppercase hidden md:block'>{item.surname}</div>
      <div>{item.firstname}</div>
      <div className='hidden md:block'>{item.age}</div>
      <div className='first-letter:uppercase hidden md:block'>{item.gender}</div>
      <div className='hidden md:block'>{item.level}</div>
      <div>{item.state}</div>
      <div className='-mt-2 bg-[#46C35F]'>
        <Link className='bg-[#46C35F] p-1 md:py-3 md:px-2' to={`/result/${item.id}`}>
          <button className='text-sm text-white bg-[#46C35F] '>Download Result</button>
        </Link>
      </div>


    </li>
  )
}

export default Display