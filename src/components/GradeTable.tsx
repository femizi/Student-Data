import React from 'react'
import Grade from './Grade'

const GradeTable = ({ data }) => {
    return (
        <div className='grade-table mb-8' >
            <div className='flex justify-between py-3 px-4 text-xs font-bold text-white bg-[#0D7590]'>
                <div className='flex-[1]'>S/N</div>
                <div className='flex-[1]'>Course Code</div>
                <div className='flex-[2]'>Course Title</div>
                <div className='flex-[1]'>Unit</div>
                <div className='flex-[1]'>Grade</div>
                <div className='flex-[1]'>Total Point</div>
            </div>
            <ul className='text-xs text-[#4F4F4F]'>
                {/* map data.results into Grade component */}
                {data.result.map((result: object, index: React.Key) => <Grade result={result} key={index} id={data.id} />)}
            </ul>

        </div>
    )
}

export default GradeTable