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
    const router = useRouter()
    const { avatar } = router.query
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 2000)
        }
    }, [hasError])

    const changeAvatar = async (image: string) => {
        const localStorage =
            typeof window !== 'undefined' && window.localStorage

        setIsLoading(true)
        try {
            axios
                .patch(
                    `${process.env.AVATAR_API}`,
                    { avatar: image },
                    {
                        headers: {
                            Authorization: `Bearer ${currentUser.token}`
                        },
                        timeout: 60000
                    }
                )

                .then((res) => {
                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            ...currentUser,
                            avatarSrc: res.data.data.avatar
                        })
                    )
                    setIsLoading(false)
                    router.reload()
                })
        } catch (e) {
            setHasError(true)
            setIsLoading(false)
        }
    }

    return currentUser ? (
        <div className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4">Aperçu :</Typography>
            </div>

            <div className={classes.currentAvatar}>
                <Avatar
                    src={avatar ? String(avatar) : currentUser.avatarSrc}
                    nickname={currentUser.username}
                />
            </div>

            <div className={classes.selector}>
                <div className={classes.selectorTitle}>
                    <Typography variant="h5">Avatars disponibles :</Typography>
                </div>
                <AvatarSelector />
            </div>
            <Button
                variant="contained"
                onClick={() => {
                    changeAvatar(String(avatar))
                }}
                color="secondary"
                disabled={isLoading || hasError}
            >
                Sauvegarder
                {isLoading ? (
                    <CircularProgress
                        classes={{
                            root: classes.progress
                        }}
                        color="primary"
                    />
                ) : null}
            </Button>
        </div>
    ) : null
}

export default AvatarStyling
