import React from 'react'
import { Avatar as MUIAvatar, Typography } from '@material-ui/core'

import classes from './style.module.scss'
type Props = {
    withNickname?: boolean
    src?: string
    sizes?: 'small' | 'large'
}
const Avatar = (props: Props): JSX.Element => {
    const nickname = 'Étudiant'
    const { withNickname, src } = props

    return (
        <div className={classes.container}>
            <MUIAvatar
                src={src}
                className={withNickname && classes.withNickname}
                classes={{ colorDefault: classes.avatarBackgroundColor }}
            >
                {!src && nickname.charAt(0)}
            </MUIAvatar>
            <Typography className={classes.nickname}>
                {withNickname && nickname}
            </Typography>
        </div>
    )
}

export default Avatar
