import React from 'react'

import { Typography, Button, Paper, IconButton, Link } from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { CourseType } from 'components/Course/types'
import Preview from 'components/Preview'

import classes from './style.module.scss'

type Props = {
    course: CourseType
}

const SearchCourseItem = ({ course }: Props): JSX.Element => {
    const longPreview = course.preview?.length >= 500
    const [hasSubscribed, setHasSubscribed] = React.useState(false)
    const [displayTruncatedText, setDisplayTruncatedText] =
        React.useState(longPreview)

    const subscribe = () => {
        setHasSubscribed(!hasSubscribed)
    }

    return (
        <Paper elevation={3} className={classes.card}>
            <div className={classes.subscribe}>
                <Preview
                    content={
                        <div>
                            <Typography variant="caption">
                                {
                                    'Cliquez ici pour retrouver ce cours dans votre liste'
                                }
                            </Typography>
                        </div>
                    }
                    className={classes.popover}
                    placement="top"
                >
                    <IconButton onClick={subscribe}>
                        {hasSubscribed ? (
                            <BookmarkIcon color="primary" />
                        ) : (
                            <BookmarkBorderIcon color="primary" />
                        )}
                    </IconButton>
                </Preview>
            </div>
            <Link href={`/course/${course.id}/?chapter=0`} underline="none">
                <div className={classes.container}>
                    <div className={classes.imageContainer}>
                        <img
                            className={classes.image}
                            src={course.thumbnail}
                            alt="course-thumbnail"
                        />
                    </div>
                    <div className={classes.detailsContainer}>
                        <div className={classes.headerContainer}>
                            <Typography color="primary" variant="h5">
                                {course.title}
                            </Typography>
                        </div>

                        <div className={classes.previewContainer}>
                            <Typography
                                variant="subtitle2"
                                color="textSecondary"
                            >
                                {displayTruncatedText ? (
                                    <>{course.preview.slice(0, 500)} &#8230;</>
                                ) : (
                                    course.preview
                                )}
                            </Typography>
                            {longPreview ? (
                                <Button
                                    classes={{
                                        root: classes.showMoreButton
                                    }}
                                    variant="outlined"
                                    onClick={() =>
                                        setDisplayTruncatedText(
                                            !displayTruncatedText
                                        )
                                    }
                                >
                                    {displayTruncatedText
                                        ? 'Voir plus'
                                        : 'Voir moins'}
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Link>
        </Paper>
    )
}

export default SearchCourseItem
