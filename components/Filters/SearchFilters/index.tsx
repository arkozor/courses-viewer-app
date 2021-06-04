import React from 'react'

import DropdownFilter from './DropdownFilter'
import { DomainFilter } from './type'

type Props = {
    filters: DomainFilter[]
}

const SearchFilters = ({ filters }: Props): JSX.Element => {
    return <DropdownFilter filters={filters} />
}

export default SearchFilters
