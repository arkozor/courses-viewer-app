import React from 'react'

import {
    Card,
    CardContent,
    Typography,
    Link,
    Divider,
    IconButton
} from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { CoursePreview } from '../../types'
import classes from './style.module.scss'

type Props = {
    course: CoursePreview
}

const CourseCard = ({ course }: Props): JSX.Element => {
    const { title, preview, id, thumbnail } = course
    const [hasSubscribed, setHasSubscribed] = React.useState(false)

    const subscribe = () => {
        setHasSubscribed(!hasSubscribed)
    }

    return (
        <Card raised classes={{ root: classes.card }}>
            <div className={classes.bookmark}>
                <IconButton onClick={subscribe}>
                    {hasSubscribed ? (
                        <BookmarkIcon color="primary" />
                    ) : (
                        <BookmarkBorderIcon color="primary" />
                    )}
                </IconButton>
            </div>
            <Link
                href={`course/${id}?chapter=1`}
                underline="none"
                className={classes.link}
                color="inherit"
            >
                <LazyLoadImage
                    height={220}
                    src={thumbnail} // use normal <img> attributes as props
                    width="100%"
                    useIntersectionObserver
                    className={classes.image}
                />
                <Divider light variant="middle" />

                <CardContent>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.preview}>
                        {preview}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}

export default CourseCard
