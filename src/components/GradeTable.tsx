import React from 'react'
import Grade from './Grade'

const GradeTable = ({data}) => {
  return (
    <div className='grade-table mb-8' >
    <div className='flex justify-between py-3 px-4 text-xs font-bold text-white bg-[#0D7590]'>
        <div>S/N</div>
        <div className='flex-initial'>Course Code</div>
        <div>Course Title</div>
        <div>Unit</div>
        <div>Grade</div>
        <div>Total Point</div>
    </div>
    <ul className='text-xs text-[#4F4F4F]'>
       {/* map data.results into Grade component */}
       {data.result.map((result, index) => <Grade result={result} key={index} />)}
    </ul>

</div>
  )
}

export default GradeTable