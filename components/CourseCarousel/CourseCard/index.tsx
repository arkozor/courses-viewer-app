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
    name: string
    description: string
    url: string
}

const CourseCard = (props: Props): JSX.Element => {
    const { name, description, url } = props

    return (
        <Link href={url} underline="none" className={classes.link}>
            <Card raised classes={{ root: classes.card }}>
                <CardMedia
                    className={classes.media}
                    image={url}
                    title="Vignette"
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CourseCard
