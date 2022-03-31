import { isError, useQuery } from 'react-query';
import Display from './Display';

const FilteredTable = ({ data }) => {
console.log(data.data.data.message)


    return (
        <div className="table-container my-11 bg-white overflow-y-scroll h-[400px]  ">
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
                    data.isLoading ? <div className='text-center p-2'>Loading...</div>
                        : data.isError ? <div className='text-center p-2'>Error{data.error.message} </div>
                            : data.data.data.message !== "Successful" ? <div className='text-center p-2'>No Data</div>
                                : data.data.data.data.students.map((item, index) => (

                                    <Display key={item.id} item={item} />))
                }
            </ul>
        </div>
    )
}

export default FilteredTable