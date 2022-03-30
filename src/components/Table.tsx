import { Key } from 'react';
import { isError, useQuery } from 'react-query';
import Display from './Display';

const Table = () => {
    const { isLoading, error, data } = useQuery('allData', () =>
    fetch('https://testapiomniswift.herokuapp.com/api/viewAllData').then(res =>
      res.json()
    )
  )

   
 
  return (
    <div className="table-container my-11 bg-white ">
    <div className='grid grid-cols-8 bg-[#F9F9FA] py-4 px-7 gap-3 text-[#343434] font-bold'>
      <div>S/N</div>
      <div>Surname</div>
      <div>FirstName</div>
      <div>Age</div>
      <div>Gender</div>
      <div>Level</div>
      <div>State</div>
      <div>Action</div></div>

    <ul >
      {/* check if isloading is true then check whether there's an error then map data */}
     {
       isLoading? <div>Loading...</div> 
       : isError(error) ? <div>Error{error.message} </div> 
       : data.data.students.map((item, index) => (
         
        <Display key={item.id} item={item} />))
     }
    </ul>
  </div>
  )
}

export default Table