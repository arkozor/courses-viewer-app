import React, { useContext } from 'react'

import { Button, Menu, MenuItem, Typography } from '@material-ui/core'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BreadCrumb from './BreadCrumb'
import SearchBar from './SearchBar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isLogged, setIsLogged] = React.useState(false)

    const router = useRouter()
    const currentUser = useContext(UserContext)

    const userInfos = isLogged ? currentUser : null
    const localStorage = typeof window !== 'undefined' && window.localStorage
    const isToken = localStorage && !!localStorage?.getItem('token')

    React.useEffect(() => {
        setIsLogged(true)
    }, [isToken])

    const logout = () => {
        localStorage.removeItem('user')
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
                <Link href="/">
                    <a className={classes.homeLink}>
                        <VideoLibraryIcon className={classes.logo} />
                        <Typography variant="h5">Courses Viewer App</Typography>
                    </a>
                </Link>
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
                                    nickname={userInfos?.username || 'invité'}
                                    src={userInfos?.avatarSrc || ''}
                                />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem href="/profile">
                                    Modifier le profil
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Paramètres du compte
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Mes cours
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    Se déconnecter
                                </MenuItem>
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
