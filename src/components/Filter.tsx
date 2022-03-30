import { useQuery } from "react-query"


const Filter = () => {
    const ages = useQuery('ages', () =>
  fetch('https://testapiomniswift.herokuapp.com/api/viewAllAges').then(res =>
  res.json()
  
  ))
  console.log(ages)
    return (
        <div className="filter-container bg-white px-7 py-8">
            <h2 className='text-left text-[#616161] text-2xl mb-8'>Filter Student Table By:</h2>
            <form action="" className='grid grid-cols-3  gap-11'>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select age
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className="  origin-top-right absolute z-10 right-0 border mt-2 w-56 rounded-md w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Age</div>
                    </div>

                </div>
                <div>
                    <div className="relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select state
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className=" hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">State</div>

                    </div>
                </div>
                <div>
                    <div className="relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select level
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Level</div>

                    </div>
                </div>
                <div>
                    <div className="relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select gender
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Gender</div>

                    </div>
                </div>
                <button className='text-sm text-white bg-[#46C35F] rounded-md py-2 '>Search</button>
            </form>
        </div>
    )
}

export default Filter