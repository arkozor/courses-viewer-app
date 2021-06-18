import React from 'react'

import { Typography, Button, Paper } from '@material-ui/core'

import classes from './style.module.scss'

const NoResult = (): JSX.Element => {
    return (
        <Paper elevation={1} className={classes.container}>
            <Typography variant="h5" gutterBottom>
                Aucun cours ne correspond à votre recherche
            </Typography>
            <div className={classes.buttonContainer}>
                <Button variant="outlined" color="primary" href="/search">
                    Tous les résultats
                </Button>
            </div>
        </Paper>
    )
}

export default NoResult
