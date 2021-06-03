import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const PreviewEditor = (): JSX.Element => {
    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Preview
            </Typography>
            <div className={classes.navigation}>
                <Button className={classes.previous} href="chapterEditor">Previous</Button>
                <Button className={classes.next} disabled>Save</Button>
            </div>
        </div>
    )
}

export default PreviewEditor