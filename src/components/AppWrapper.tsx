import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query'
import Filter from './Filter'
import Header from './Header'
import Table from './Table'
import FilteredTable from './FilteredTable';

const AppWrapper = () => {

    const [submit, setSubmit] = useState(false)
    const [ageOption, setAgeOption] = useState<null | string>(null)
    const [genderOption, setGenderOption] = useState<null | string>(null)
    const [levelOption, setLevelOption] = useState<null | string>(null)
    const [stateOption, setStateOption] = useState<null | string>(null)

    const filter = useQuery('allResult', () =>
        axios({
            method: 'post',
            url: 'https://testapiomniswift.herokuapp.com/api/filterData',
            data: {
                "level": levelOption,
                "age": ageOption,
                "state": stateOption,
                "gender": genderOption,
            }

        }), {
        enabled: submit
    })

    console.log(filter)
    return (
        <>
            <Header />
            <Filter
                filter={filter}
                setSubmit={setSubmit}
                setAgeOption={setAgeOption}
                setGenderOption={setGenderOption}
                setLevelOption={setLevelOption}
                setStateOption={setStateOption}
                ageOption={ageOption}
                genderOption={genderOption}
                levelOption={levelOption}
                stateOption={stateOption}
            />
            {
                filter.isIdle
                    ? <Table />
                    : <FilteredTable data={filter} />
            }


        </>
    )
}

export default AppWrapper