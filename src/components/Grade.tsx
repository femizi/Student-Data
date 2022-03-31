import React from 'react'

const Grade = ({ result, id }) => {
    return (
        <li className='flex justify-between  py-3 px-4 bg-[#F2F2F2] odd:bg-white'>
            <div className='flex-[1]'>{id}</div>
            <div className='flex-[1]'>{result.coursecode}</div>
            <div className='flex-[2]'>{result.title}</div>
            <div className='flex-[1]'>{result.credit_unit}</div>
            <div className='flex-[1]'>{result.grade}</div>
            <div className='flex-[1]'>{result.total_point}</div>
        </li>
    )
}

export default Grade