import React from 'react'

const ResultDetails = ({ data }) => {
  return (
    <div className='details flex mb-6 text-xs '>
      <div className='grid gap-3 grid-cols-20/80'>
        <div className='font-bold'>Name:</div>
        <div className='font-medium first-letter:uppercase'>{data.surname} {data.firstname}</div>
        <div className='font-bold'>Level:</div>
        <div className='font-medium'>{data.level} level</div>
      </div>
      <div className='ml-auto mr-24  grid gap-3 grid-cols-40/60'>
        <div className='font-bold' >Reg. No.:</div>
        <div className='font-medium'>{data.reg_no}</div>
        <div className='font-bold'>Session:</div>
        <div className='font-medium'> {data.session}</div>
      </div>
      <div></div>
    </div>
  )
}

export default ResultDetails