import { Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

type props = {
    text: string
}

const Separation = ({ text }: props): JSX.Element => {
    return (
        <div className={classes.separation}>
            <Typography variant="h4">{text}</Typography>
        </div>
    )
}

export default Separation
