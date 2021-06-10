import React, { useContext } from 'react'

import { Typography } from '@material-ui/core'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'

import classes from './style.module.scss'

const Profile = (): JSX.Element => {
    const currentUser = useContext(UserContext)
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <Typography variant="h4">
                    Informations personnelles :
                </Typography>
            </div>
            <div className={classes.perso}>
                <div className={classes.infos}>
                    <Typography className={classes.info} variant="h5">
                        Prénom : {currentUser.firstname}
                    </Typography>
                    <Typography className={classes.info} variant="h5">
                        Nom de famille : {currentUser.lastname}
                    </Typography>
                    <Typography className={classes.info} variant="h5">
                        Pseudo : {currentUser.username}
                    </Typography>
                </div>
                <div className={classes.avatar}>
                    <Avatar
                        nickname={currentUser.username}
                        src={currentUser.avatarSrc}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile
