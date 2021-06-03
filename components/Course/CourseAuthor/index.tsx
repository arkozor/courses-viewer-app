import React from 'react'

import Avatar from 'components/Avatar'

import classes from './style.module.scss'

type Props = {
    author: {
        nickname: string
        avatarSrc: string
    }
}

const CourseAuthor = (props: Props): JSX.Element => {
    const { author } = props

    return (
        <div className={classes.authorContainer}>
            <Avatar
                nickname={author.nickname}
                src={author.avatarSrc}
                withNickname
            />
        </div>
    )
}

export default CourseAuthor
