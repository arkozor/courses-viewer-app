import React from 'react'

import {
    Button,
    Menu,
    MenuItem,
    Divider,
    Typography,
    Link
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const RegistrationAndConnexion = (): JSX.Element => {
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
                    <Link underline="none" color="inherit" href="/profile">
                        <span className={classes.menuItem}>
                            <PersonIcon
                                color="inherit"
                                className={classes.icon}
                            />
                            <Typography variant="body1">
                                Modifier le profil
                            </Typography>
                        </span>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <span className={classes.menuItem}>
                        <SettingsIcon
                            color="inherit"
                            className={classes.icon}
                        />
                    </span>
                    <Link underline="none" color="inherit" href="/settings">
                        <Typography variant="body1">
                            Paramètres du compte
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <span className={classes.menuItem}>
                        <BookmarksIcon
                            color="inherit"
                            className={classes.icon}
                        />
                    </span>
                    <Link underline="none" color="inherit" href="/my-list">
                        <Typography variant="body1">Ma liste</Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                        underline="none"
                        color="inherit"
                        href="/course/new?step=0"
                    >
                        <span className={classes.menuItem}>
                            <AddIcon color="inherit" className={classes.icon} />
                            <Typography variant="body1">
                                Ajouter un cours
                            </Typography>
                        </span>
                    </Link>
                </MenuItem>
                <Divider light variant="middle" />
                <MenuItem>
                    <Link underline="none" color="inherit" onClick={logout}>
                        <Typography variant="body1">
                            <span className={classes.menuItem}>
                                <ExitToAppIcon className={classes.icon} />
                                Se déconnecter
                            </span>
                        </Typography>
                    </Link>
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
    )
}

export default RegistrationAndConnexion
