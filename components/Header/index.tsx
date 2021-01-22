import React from 'react'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'
import BreadCrumb from './BreadCrumb'
import SearchBar from './SearchBar'
import Avatar from 'components/Avatar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    return (
        <div className={classes.header}>
            <div className={classes.headerItems}>
                <Link href="/">
                    <HomeIcon className={classes.homeIcon} />
                </Link>
                <div className={classes.searchBar}>
                    <SearchBar />
                </div>
                <div className={classes.avatar}>
                    <Avatar withNickname />
                </div>
            </div>
            <BreadCrumb />
        </div>
    )
}

export default Header
