import React from 'react'
import { Button } from '@material-ui/core'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'
import BreadCrumb from './BreadCrumb'
import SearchBar from './SearchBar'
import Avatar from 'components/Avatar'
import classes from './style.module.scss'

const Header = (): JSX.Element => {
    // const [isLogged, setIsLogged] = React.useState(false)
    const isLogged = true
    const nickname = '' // replace by real nickname
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
                            <Avatar
                                withNickname
                                nickname={nickname || 'invité'}
                            />
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
