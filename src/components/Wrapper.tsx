import React from 'react'
import { useQuery } from 'react-query'
import GradeTable from './GradeTable'
import ResultDetails from './ResultDetails'
import ResultHeader from './ResultHeader'
import TotalTable from './TotalTable'

const Wrapper = () => {
    const allResult = useQuery('allResult', () =>
    fetch('https://testapiomniswift.herokuapp.com/api/viewResult/9',{
        method: 'POST'
    }).then(res =>
        res.json()

    ))
    console.log(allResult)
  return (
      
    <div className='  pl-4 pr-4 min-h-screen '>
   {
   allResult.isLoading
   ? <div className='text-center text-2xl font-bold'>Loading...</div>
   :allResult.isError? <div className='text-center text-2xl font-bold'>Error{allResult.error}</div> 
   : <>
   <ResultHeader logo={allResult.data.logo} profilepicture={allResult.data.profile_picture} />
   <ResultDetails data={allResult.data.data} />
   
   <GradeTable data={allResult.data.data}  />
    <TotalTable cummulative={allResult.data.data.cummulative}/>
    
    
    
    <div className="remarks font-medium text-xs mb-28">
        Remarks: <span className='text-[#0D7590]'>{allResult.data.data.cummulative.remarks}</span>
    </div>

    <div className="footer pt-3 pb-5 border-t-[1px] w-36">
        Registrar
    </div>

   </> 

   }
  
</div>
  )
}

export default Wrapper