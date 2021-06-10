import React, { useContext } from 'react'

import { IconButton } from '@material-ui/core'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const AvatarSelector = (): JSX.Element => {
    const currentUser = useContext(UserContext)
    const router = useRouter()

    const images = [
        '/images/avatars/avatar-men-1.svg',
        '/images/avatars/avatar-men-2.svg',
        '/images/avatars/avatar-men-3.svg',
        '/images/avatars/avatar-women-1.svg',
        '/images/avatars/avatar-women-2.svg',
        '/images/avatars/avatar-women-3.svg'
    ]

    return (
        <div className={classes.container}>
            {images.map((image) => (
                <IconButton
                    onClick={() => {
                        router.push(
                            { query: { avatar: image } },
                            location.pathname
                            // { shallow: true }
                        )
                    }}
                    key={image}
                >
                    <Avatar
                        nickname={currentUser.username}
                        src={image}
                    ></Avatar>
                </IconButton>
            ))}
        </div>
    )
}

export default AvatarSelector
