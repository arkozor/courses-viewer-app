import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

type props = {
    title: string
}

const CarouselTitle = (props: props): JSX.Element => {
    const { title } = props

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4">{title}</Typography>
            </div>
            <div className={classes.divider}>
                <Divider variant="middle" />
            </div>
        </div>
    )
}

export default CarouselTitle
