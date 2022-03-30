import React from 'react'

const TotalTable = ({cummulative}) => {
  return (
    <div className="total-table mr-40 mb-4">
            <div className='flex justify-between py-3 px-4 text-xs font-bold text-white bg-[#0D7590]'>
                <div>UNTS</div>
                <div>UNTD</div>
                <div>GPTS</div>
                <div>GPTD</div>
                <div>GPATS</div>
                <div>GPATD</div>
            </div>
            <div className='flex justify-between py-3 px-4 text-xs'>
                <div>{cummulative.unts}</div>
                <div>{cummulative.untd}</div>
                <div>{cummulative.gpts}</div>
                <div>{cummulative.gptd}</div>
                <div>{cummulative.gpats}</div>
                <div>{cummulative.gpatd}</div>
            </div>
        </div>
  )
}

export default TotalTable