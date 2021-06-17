import React from 'react'

import { Typography, Button } from '@material-ui/core'

import classes from './style.module.scss'

const NoResult = (): JSX.Element => {
    return (
        <>
            <div className={classes.container}>
                <Typography variant="h3">
                    Aucun cours ne correspond à votre recherche
                </Typography>
            </div>
            <Button variant="contained" color="primary" href="/search">
                Tous les résultats
            </Button>
        </>
    )
}

export default NoResult
