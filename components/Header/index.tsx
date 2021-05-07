import React from 'react'

import { Button, Menu, MenuItem } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import Avatar from 'components/Avatar'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BreadCrumb from './BreadCrumb'
import SearchBar from './SearchBar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const router = useRouter()
    const localStorage = typeof window !== 'undefined' && window.localStorage
    const isLogged = localStorage && localStorage.getItem('token')
    const nickname = '' // replace by real nickname

    const logout = () => {
        localStorage.removeItem('token')
        setAnchorEl(null)
        router.push('/')
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div className={classes.header}>
                <div className={classes.homeIconContainer}>
                    <Link href="/">
                        <HomeIcon className={classes.homeIcon} />
                    </Link>
                </div>
                <div className={classes.search}>
                    <SearchBar />
                    {isLogged ? (
                        <div className={classes.avatar}>
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Avatar
                                    withNickname
                                    nickname={nickname || 'invité'}
                                />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    My account
                                </MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div className={classes.connectionContainer}>
                            <div className={classes.buttonsContainer}>
                                <Button
                                    href="/register"
                                    classes={{
                                        root: classes.connectionButton
                                    }}
                                >
                                    {"S'enregistrer"}
                                </Button>
                                <Button
                                    href="/login"
                                    classes={{
                                        root: classes.connectionButton
                                    }}
                                >
                                    {'Se connecter'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <BreadCrumb />
        </>
    )
}

export default Header
