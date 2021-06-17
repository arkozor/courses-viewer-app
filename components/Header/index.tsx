import React from 'react'

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
    const [userInfos, setUserInfos] = React.useState(null)
    const router = useRouter()
    const currentUser = React.useContext(UserContext)

    const localStorage = typeof window !== 'undefined' && window.localStorage
    const isToken = !!currentUser?.token

    React.useEffect(() => {
        setIsLogged(isToken)
        if (isLogged) {
            setUserInfos(currentUser)
        }
    }, [isToken, isLogged])

    const logout = () => {
        localStorage.removeItem('user')
        setAnchorEl(null)
        window.location.href = '/'
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
                                <Link href="/profile">
                                    <MenuItem onClick={handleClose}>
                                        Modifier le profil
                                    </MenuItem>
                                </Link>

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
                                    onClick={() =>
                                        router.push({
                                            pathname: '/login',
                                            query: {
                                                origin: window.location.href
                                            }
                                        })
                                    }
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
