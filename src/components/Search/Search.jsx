import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api';

export default function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?countryIds=Q212&namePrefix=${inputValue}`, geoApiOptions);
            const response_1 = await response.json();
            // console.log(inputValue);
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                })
            };
        } catch (err) {
            return console.error('Error' + err);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder='Find city'
            value={search}
            onChange={handleOnChange}
            debounceTimeout={500}
            loadOptions={loadOptions}
        />
    )
}
