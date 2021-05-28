import React from 'react'

import DropdownFilter from './DropdownFilter'
import classes from './style.module.scss'
import { DomainFilter } from './type'

const mockedFilters: DomainFilter[] = [
    {
        value: 'javascript',
        label: 'JavaScript'
    },
    {
        value: 'php',
        label: 'Php'
    },
    {
        value: 'csharp',
        label: 'C#'
    },
    {
        value: 'clang',
        label: 'C'
    },
    {
        value: 'cpp',
        label: 'C++'
    },
    {
        value: 2,
        label: 'Java'
    },
    {
        value: 'all',
        label: 'Tous les languages'
    }
]

const SearchFilters = (): JSX.Element => {
    return (
        <div className={classes.container}>
            <DropdownFilter filters={mockedFilters} type="domain" />
        </div>
    )
}

export default SearchFilters
