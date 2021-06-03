import React, { useContext } from 'react'

import { Button, Typography } from '@material-ui/core'
import Avatar from 'components/Avatar'
import AvatarSelector from 'components/Avatar/AvatarSelector'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const AvatarStyling = (): JSX.Element => {
    const currentUser = useContext(UserContext)
    const { query } = useRouter()
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4">Aperçu :</Typography>
            </div>

            {currentUser ? (
                <div className={classes.currentAvatar}>
                    <Avatar
                        src={
                            query.label
                                ? String(query.label)
                                : currentUser.avatarSrc
                        }
                        nickname={currentUser.username}
                    />
                </div>
            ) : null}
            <div className={classes.selector}>
                <div className={classes.selectorTitle}>
                    <Typography variant="h5">Avatars disponibles :</Typography>
                </div>
                <AvatarSelector />
            </div>
            <Button variant="contained" color="primary">
                Sauvegarder
            </Button>
        </div>
    )
}

export default AvatarStyling
