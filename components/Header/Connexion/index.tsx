import React from 'react'

import { Button, Menu, MenuItem } from '@material-ui/core'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'
import Link from 'next/link'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const RegistrationAndConnexion = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const router = useRouter()
    const currentUser = React.useContext(UserContext)

    React.useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return null
    }

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
    return currentUser ? (
        <div className={classes.avatar}>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Avatar
                    withNickname
                    nickname={currentUser.username}
                    src={currentUser.avatarSrc}
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl || null}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link href="/profile">
                        <a className={classes.link}>Modifier le profil</a>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>Paramètres du compte</MenuItem>
                <MenuItem onClick={handleClose}>Mes cours</MenuItem>
                <MenuItem onClick={logout}>Se déconnecter</MenuItem>
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
    )
}

export default RegistrationAndConnexion
