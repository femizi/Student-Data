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
    <div className="table-container my-11 bg-white overflow-y-scroll h-[400px] ">
      <div className='grid grid-cols-4 text-sm md:text-base md:grid-cols-8 bg-[#F9F9FA] py-4 px-4 md:px-7 gap-1  md:gap-3 text-[#343434] font-bold'>
        <div>S/N</div>
        <div className='hidden md:block'>Surname</div>
        <div>FirstName</div>
        <div className='hidden md:block'>Age</div>
        <div className='hidden md:block'>Gender</div>
        <div className='hidden md:block'>Level</div>
        <div>State</div>
        <div>Action</div></div>

      <ul >
        {/* check if isloading is true then check whether there's an error then map data */}
        {
          isLoading ? <div className='text-center p-2'>Loading...</div>
            : isError(error) ? <div className='text-center p-2'>Error{error.message} </div>
              : data.data.students.map((item: { id: Key; }) => (

                <Display key={item.id} item={item} />))
        }
      </ul>
    </div>
  )
}

export default Table