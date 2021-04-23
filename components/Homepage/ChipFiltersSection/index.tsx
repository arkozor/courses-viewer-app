import ChipFilters from 'components/ChipFilters'
import React from 'react'

import classes from './style.module.scss'

const ChipFiltersSection = (): JSX.Element => (
    <div className={classes.chipsContainer}>
        <ChipFilters />
    </div>
)

export default ChipFiltersSection
