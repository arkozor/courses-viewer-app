import React from 'react'

import axios from 'axios'

import DropdownFilter from './DropdownFilter'

const SearchFilters = (): JSX.Element => {
    const [domains, setDomains] = React.useState([])

    React.useEffect(() => {
        axios
            .get(`${process.env.DOMAIN_API}`)
            .then((res) => setDomains(res.data.data.data))
    }, [])

    return (
        <div>
            <DropdownFilter filters={domains} />
        </div>
    )
}

export default SearchFilters
