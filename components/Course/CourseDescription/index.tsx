import { Button, Typography, Divider } from '@material-ui/core'
import Avatar from 'components/Avatar'
import React from 'react'

import classes from './style.module.scss'

type Props = {
    course: {
        author: {
            nickname: string
            avatarSrc?: string
        }
        title: string
        description: string
    }
}

const CourseDescription = (props: Props): JSX.Element => {
    const [
        shouldDisplayFullDescription,
        setShouldDisplayFullDescription
    ] = React.useState(false)

    const { course } = props

    const { author } = course

    const descriptionPreview =
        course.description.length >= 500
            ? `${course.description.substring(0, 400)} ...`
            : course.description

    return (
        <div className={classes.courseDescriptionContainer}>
            <div className={classes.titleContainer}>
                <Typography variant="h5">{course.title}</Typography>
            </div>

            <Divider />
            <div className={classes.container}>
                <div className={classes.authorContainer}>
                    <Avatar
                        nickname={author.nickname}
                        src={author.avatarSrc}
                        withNickname
                    />
                </div>
                <div className={classes.descriptionContainer}>
                    <Typography variant="body1">
                        {shouldDisplayFullDescription
                            ? course.description
                            : descriptionPreview}
                    </Typography>
                    <Button
                        size="small"
                        classes={{ root: classes.showMoreButton }}
                        onClick={() => {
                            setShouldDisplayFullDescription(
                                !shouldDisplayFullDescription
                            )
                        }}
                    >
                        {shouldDisplayFullDescription
                            ? 'Voir moins'
                            : 'Voir plus'}
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default CourseDescription
