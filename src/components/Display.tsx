import React from 'react'

const Display = ({item}) => {
  return (
    <li className='grid grid-cols-8 py-4 px-7 gap-3  border-b-[1px] border-[#ECECEC] text-[#343434]'>
        <div>{item.id}</div>
        <div>{item.surname}</div>
        <div>{item.firstname}</div>
        <div>{item.age}</div>
        <div>{item.gender}</div>
        <div>{item.level}</div>
        <div>{item.state}</div>
        <button className='text-sm text-white bg-[#46C35F] py-1'>Download Result</button>
      </li>
  )
}

export default Display