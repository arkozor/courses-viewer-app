import React from 'react'

import { Button, Typography } from '@material-ui/core'

import classes from '../style.module.scss'

const PreviewEditor = (): JSX.Element => {
    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Preview
            </Typography>
            <Button 
                
            >Create</Button>
        </div>
    )
}

export default PreviewEditor