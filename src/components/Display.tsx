import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Display = ({item}) => {
  return (
    <li className='grid grid-cols-8 py-4 px-7 gap-3  border-b-[1px] border-[#ECECEC] text-[#343434]'>
        <div>{item.id}</div>
        <div className='first-letter:uppercase'>{item.surname}</div>
        <div>{item.firstname}</div>
        <div>{item.age}</div>
        <div className='first-letter:uppercase'>{item.gender}</div>
        <div>{item.level}</div>
        <div>{item.state}</div>
        <Link className='bg-[#46C35F] p-2' to={`/result/${item.id}` }>
        <button className='text-sm text-white bg-[#46C35F] '>Download Result</button>
        </Link>
      
      </li>
  )
}

export default Display