import React from 'react'

import DropdownFilter from './DropdownFilter'
import classes from './style.module.scss'
import { DomainFilter, CategoryFilter, ThemeFilter } from './type'

type Props = {
    filters: {
        domains: DomainFilter[]
        categories: CategoryFilter[]
        themes: ThemeFilter[]
    }
}

const SearchFilters = ({ filters }: Props): JSX.Element => {
    return (
        <div>
            <div className={classes.filter}>
                <DropdownFilter filters={filters.categories} type="category" />
            </div>
            <div className={classes.filter}>
                <DropdownFilter filters={filters.themes} type="theme" />
            </div>
            <div className={classes.filter}>
                <DropdownFilter filters={filters.domains} type="domain" />
            </div>
        </div>
    )
}

export default SearchFilters
