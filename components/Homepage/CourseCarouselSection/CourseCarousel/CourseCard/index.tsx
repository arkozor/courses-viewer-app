import React from 'react'

import { Card, CardContent, Typography, Link } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import classes from './style.module.scss'

type Props = {
    id: number
    title: string
    description: string
    thumbnail: string
}

const CourseCard = (props: Props): JSX.Element => {
    const { title, description, thumbnail, id } = props

    return (
        <Link
            href={`course/${id}/?chapter=0`}
            underline="none"
            className={classes.link}
        >
            <Card raised classes={{ root: classes.card }}>
                <LazyLoadImage
                    height={180}
                    src={thumbnail} // use normal <img> attributes as props
                    width="100%"
                    useIntersectionObserver
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CourseCard
