import React from 'react'

const Grade = ({result}) => {
  return (
    <li className='flex justify-between  py-3 px-4 bg-[#F2F2F2] odd:bg-white'>
    <div>1</div>
    <div className=''>{result.coursecode}</div>
    <div>{result.title}</div>
    <div>{result.credit_unit}</div>
    <div>{result.grade}</div>
    <div>{result.total_point}</div>
</li>
  )
}

export default Grade