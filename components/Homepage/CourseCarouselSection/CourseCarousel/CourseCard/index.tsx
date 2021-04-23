import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Link
} from '@material-ui/core'

import classes from './style.module.scss'

type Props = {
    id: string
    title: string
    description: string
    thumbnail: string
}

const CourseCard = (props: Props): JSX.Element => {
    const { title, description, thumbnail, id } = props

    return (
        <Link href={`course/${id}`} underline="none" className={classes.link}>
            <Card raised classes={{ root: classes.card }}>
                <CardMedia
                    className={classes.media}
                    image={thumbnail}
                    title="Vignette"
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
