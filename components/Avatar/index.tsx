import React from 'react'

import { Avatar as MUIAvatar, Typography } from '@material-ui/core'

import classes from './style.module.scss'
type Props = {
    nickname: string
    withNickname?: boolean
    src?: string
    sizes?: 'sm' | 'md' | 'lg'
}

const avatarBackgroundColors = [
    '#FFB900',
    '#D83B01',
    '#B50E0E',
    '#E81123',
    '#B4009E',
    '#5C2D91',
    '#0078D7',
    '#00B4FF',
    '#008272',
    '#107C10'
]

const Avatar = (props: Props): JSX.Element => {
    const { withNickname, src, nickname = 'Username', sizes = 'md' } = props

    const extractedColorFromUsername = nickname
        ? avatarBackgroundColors[
              nickname
                  .split('')
                  .map((x) => x.charCodeAt(0))
                  .reduce((a, b) => (a + b) % 10, 0)
          ]
        : avatarBackgroundColors[0]

    return (
        <div className={classes.container}>
            <MUIAvatar
                src={src}
                className={withNickname ? classes.withNickname : undefined}
                style={{ backgroundColor: extractedColorFromUsername }}
                classes={{
                    colorDefault: classes.avatarBackgroundColor,
                    root: sizes === 'sm' && classes.small
                }}
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
