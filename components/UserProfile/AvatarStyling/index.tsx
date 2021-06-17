import React, { useContext } from 'react'

import { Button, CircularProgress, Typography } from '@material-ui/core'
import axios from 'axios'
import Avatar from 'components/Avatar'
import AvatarSelector from 'components/Avatar/AvatarSelector'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const AvatarStyling = (): JSX.Element => {
    const currentUser = useContext(UserContext)
    const [hasError, setHasError] = React.useState(false)
    const { query } = useRouter()
    const [isLoading, setIsLoading] = React.useState(false)
    const localStorage = typeof window !== 'undefined' && window.localStorage
    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')

    React.useEffect(() => {
        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 2000)
        }
    }, [hasError])

    const changeAvatar = async (image: string) => {
        setIsLoading(true)
        await axios
            .patch(
                `${process.env.AVATAR_API}`,
                { avatar: image },
                {
                    headers: { Authorization: `Bearer ${token}` },
                    timeout: 60000
                }
            )

            .then((res) => {
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        token: res.data.data.token,
                        avatarSrc: image
                    })
                )
            })
            .catch(() => {
                setHasError(true)
                setIsLoading(false)
            })
        if (!hasError && localStorage.getItem('token')) {
            setIsLoading(false)
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
                disabled={isLoading || hasError}
            >
                Sauvegarder
                {isLoading && <CircularProgress color="primary" />}
            </Button>
        </div>
    )
}

export default AvatarStyling
