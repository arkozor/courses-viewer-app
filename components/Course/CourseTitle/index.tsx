import { Typography } from '@material-ui/core'
import React from 'react'

type Props = {
    title: string
}

const CourseTitle = (props: Props): JSX.Element => {
    const { title } = props

    return <Typography variant="h3">{title}</Typography>
}

export default CourseTitle
