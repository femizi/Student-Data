import { Key, useState } from "react"
import { useQuery } from "react-query"
import MenuOptions from './MenuOptions'

const Filter = ({ setSubmit, filter, setAgeOption, setGenderOption, setLevelOption, setStateOption, ageOption, genderOption, levelOption, stateOption }) => {


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
    function handleSubmit(e) {
        e.preventDefault()
        setSubmit(true)
        filter.refetch()

    }

    return (
        <div className="filter-container bg-white px-7 py-8">
            <h2 className=' text-left text-[#616161] text-2xl mb-8'>Filter Student Table By:</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-2 md:grid-cols-3  gap-11'>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#46C35F]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {ageOption === null ? 'select age' : ageOption}
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
                                {ages.isLoading ? <div className='text-center p-2'>Loading...</div> : ages.isError ? <div className='text-center p-2'>Error</div> : ages.data.data.map(age => <MenuOptions setter={setAgeOption} item={age.age} key={age.id} />)}
                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Age</div>
                    </div>

                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#46C35F]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {stateOption === null ? 'select state' : stateOption}
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {states.isLoading ? <div className='text-center p-2'>Loading...</div> : states.isError ? <div className='text-center p-2'>Error</div> : states.data.data.map(state => <MenuOptions setter={setStateOption} item={state.name} key={state.id} />)}

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">State</div>

                    </div>
                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#46C35F]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {levelOption === null ? 'select level' : levelOption}
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {levels.isLoading ? <div className='text-center p-2'>Loading...</div> : levels.isError ? <div className='text-center p-2'>Error</div> : levels.data.data.map((level) => <MenuOptions setter={setLevelOption} item={level.level} key={level.id} />)}

                            </div>
                        </div>
                        <div className="absolute  font-medium bg-white left-4 -top-3 px-2 ">Level</div>

                    </div>
                </div>
                <div>
                    <div className="group relative inline-block text-left w-full">
                        <div>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-10 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#46C35F]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                {genderOption === null ? 'select gender' : genderOption}
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>


                        <div className=" group-focus-within:visible invisible  origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                {gender.isLoading ? <div className='text-center p-2'>Loading...</div> : gender.isError ? <div className='text-center p-2'>Error</div> : gender.data.data.map((gender) => <MenuOptions setter={setGenderOption} item={gender.gender} key={gender.id} />)}

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