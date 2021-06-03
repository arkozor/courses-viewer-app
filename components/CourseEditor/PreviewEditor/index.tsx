import React from 'react'

import { Typography } from '@material-ui/core'

import classes from './style.module.scss'

const PreviewEditor = (): JSX.Element => {
    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Preview
            </Typography>
        </div>
    )
}

export default PreviewEditor