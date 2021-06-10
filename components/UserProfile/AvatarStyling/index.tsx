import React, { useContext } from 'react'

import { Button, Typography } from '@material-ui/core'
import axios from 'axios'
import Avatar from 'components/Avatar'
import AvatarSelector from 'components/Avatar/AvatarSelector'
import { UserContext } from 'context'
import router, { useRouter } from 'next/router'

import classes from './style.module.scss'

const AvatarStyling = (): JSX.Element => {
    const currentUser = useContext(UserContext)
    const [hasError, setHasError] = React.useState(false)
    const { query } = useRouter()
    const localStorage = typeof window !== 'undefined' && window.localStorage
    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')

    const changeAvatar = async (image: string) => {
        await axios
            .post(
                `${process.env.AVATAR_API}`,
                { avatar: image },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )

            .then(() => {
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        avatarSrc: image
                    })
                )
            })
            .catch(() => {
                setHasError(true)
            })
        if (!hasError && localStorage.getItem('token')) {
            router.push('/')
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4">Aperçu :</Typography>
            </div>

            {currentUser ? (
                <div className={classes.currentAvatar}>
                    <Avatar
                        src={
                            query.avatar
                                ? String(query.avatar)
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
            <Button
                variant="contained"
                onClick={() => {
                    changeAvatar(String(query.avatar))
                }}
                color="secondary"
            >
                Sauvegarder
            </Button>
        </div>
    )
}

export default AvatarStyling
