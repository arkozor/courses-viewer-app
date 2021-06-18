import React from 'react'

import { Divider, Typography } from '@material-ui/core'
import ChipFilters from 'components/Filters/ChipFilters'

import classes from './style.module.scss'

type props = {
    title: string
}

const CarouselHeader = (props: props): JSX.Element => {
    const { title } = props

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4">{title}</Typography>
            </div>
            <div className={classes.chipFilters}>
                <ChipFilters type={title} />
            </div>
            <div className={classes.divider}>
                <Divider variant="middle" />
            </div>
        </div>
    )
}

export default CarouselHeader
