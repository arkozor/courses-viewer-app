import React from 'react'

import ChipFilters from 'components/ChipFilters'

import classes from './style.module.scss'

const ChipFiltersSection = (): JSX.Element => (
    <div className={classes.chipsContainer}>
        <ChipFilters />
    </div>
)

export default ChipFiltersSection
