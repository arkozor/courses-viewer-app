import React from 'react'

import { Typography } from '@material-ui/core'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import Link from 'next/link'

import BreadCrumb from './BreadCrumb'
import Connexion from './Connexion'
import SearchBar from './SearchBar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    return (
        <>
            <div className={classes.header}>
                <Link href="/">
                    <a className={classes.homeLink}>
                        <VideoLibraryIcon className={classes.logo} />
                        <Typography variant="h5">Courses Viewer App</Typography>
                    </a>
                </Link>
                <div className={classes.search}>
                    <SearchBar />
                    <Connexion />
                </div>
            </div>
            <BreadCrumb />
        </>
    )
}

export default Header
