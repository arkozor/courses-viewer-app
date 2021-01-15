import React from 'react'
import SearchField from './SearchField'
import { Grid } from '@material-ui/core'

import classes from './style.module.scss'

const Header = (): JSX.Element => {
    return (
        <Grid container className={classes.header}>
            <Grid item>
                <div className={classes.searchField}>
                    <SearchField />
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
