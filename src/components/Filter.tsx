import { Key } from "react"
import { useQuery } from "react-query"
import MenuOptions from './MenuOptions'

const Filter = () => {
    const ages = useQuery('ages', () =>
        fetch('https://testapiomniswift.herokuapp.com/api/viewAllAges').then(res =>
            res.json()

        ))
    const states = useQuery('states', () =>
        fetch('https://testapiomniswift.herokuapp.com/api/viewAllStates').then(res =>
            res.json()

        ))
    const levels = useQuery('levels', () =>
        fetch('https://testapiomniswift.herokuapp.com/api/viewAllLevels').then(res =>
            res.json()

        ))
    //   wrong documentation
    const gender = useQuery('gender', () =>
        fetch('https://testapiomniswift.herokuapp.com/api/viewAllGender').then(res =>
            res.json()

        ))

    console.log(states)
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


                        <div className="group-focus-within:visible invisible  origin-top-right absolute z-10 right-0 border mt-2  rounded-md w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {/* check if ages.isloading is true check if ages.iserror is true then map ages.data */}
                                {ages.isLoading ? <div>Loading...</div> : ages.isError ? <div>Error</div> : ages.data.data.map(age => <MenuOptions item={age} key={age.id} />)}
                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Age</div>
                    </div>

                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select state
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {states.isLoading ? <div>Loading...</div> : states.isError ? <div>Error</div> : states.data.data.map(state => <MenuOptions item={state} key={state.id} />)}

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">State</div>

                    </div>
                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select level
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {levels.isLoading ? <div>Loading...</div> : levels.isError ? <div>Error</div> : levels.data.data.map((level: { id: Key }) => <MenuOptions item={level} key={level.id} />)}

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Level</div>

                    </div>
                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                select gender
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {gender.isLoading ? <div>Loading...</div> : gender.isError ? <div>Error</div> : gender.data.data.map((gender: { id: Key }) => <MenuOptions item={gender} key={gender.id} />)}

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