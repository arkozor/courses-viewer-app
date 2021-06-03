import React from 'react'

import { Typography, Button, Link, Paper } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import { CourseType } from 'components/Course/types'
import Preview from 'components/Preview'
// import { formatPrice } from 'utils'

import classes from './style.module.scss'

type Props = {
    course: CourseType
}

const SearchCourseItem = ({ course }: Props): JSX.Element => {
    const longPreview = course.preview?.length >= 500
    const [displayTruncatedText, setDisplayTruncatedText] = React.useState(
        longPreview
    )
    return (
        <Link
            href={`${location.origin}/course/${course.id}/?chapter=0`}
            underline="none"
        >
            <Paper elevation={3} className={classes.container}>
                <div className={classes.imageContainer}>
                    <img
                        className={classes.image}
                        src={course.thumbnail}
                        alt="course-thumbnail"
                    />
                    {/* <div className={classes.price}>
                        <Typography variant="body1">
                            {formatPrice(course.price)}
                        </Typography>
                    </div> */}
                </div>
                <div className={classes.detailsContainer}>
                    <div className={classes.headerContainer}>
                        <Typography color="primary" variant="h5">
                            {course.title}
                        </Typography>
                        <Preview
                            content={
                                <div>
                                    <Typography variant="caption">
                                        {
                                            "Pour pouvoir suivre correctement ce cours vous devriez peut-être d'abord voir : <insérer cours> "
                                        }
                                    </Typography>
                                </div>
                            }
                            className={classes.popover}
                        >
                            <InfoIcon />
                        </Preview>
                    </div>

                    <div className={classes.previewContainer}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {displayTruncatedText ? (
                                <>{course.preview.slice(0, 500)} &#8230;</>
                            ) : (
                                course.preview
                            )}
                        </Typography>
                        {longPreview ? (
                            <Button
                                classes={{ root: classes.showMoreButton }}
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
            </Paper>
        </Link>
    )
}

export default SearchCourseItem
