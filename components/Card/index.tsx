import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

import classes from './style.module.scss'

type Props = {
    name: string
    description: string
}

const CourseCard = (props: Props): JSX.Element => {
    const { name, description } = props

    return (
        <Card raised classes={{ root: classes.card }}>
            <CardMedia
                className={classes.media}
                image="/images/JDG.png"
                title="Vignette"
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5">
                    {name}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CourseCard
