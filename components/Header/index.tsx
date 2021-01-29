import React from 'react'
import { Button, Grid } from '@material-ui/core'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'
import BreadCrumb from './BreadCrumb'
import SearchBar from './SearchBar'
import Avatar from 'components/Avatar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    const isLoggedIn =
        typeof window !== 'undefined' && window.location.pathname === '/'
            ? false
            : true
    return (
        <>
            <div className={classes.header}>
                <Grid container justify="space-between" alignItems="center">
                    <Link href="/">
                        <HomeIcon className={classes.homeIcon} />
                    </Link>
                    <Grid item xs={8} md={6} className={classes.searchBar}>
                        <SearchBar />
                    </Grid>
                    <Grid item>
                        {isLoggedIn ? (
                            <Avatar withNickname />
                        ) : (
                            <Button>{"S'enregistrer"}</Button>
                        )}
                    </Grid>
                </Grid>
            </div>
            <BreadCrumb />
        </>
    )
}

export default Header
