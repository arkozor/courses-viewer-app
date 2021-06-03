import React from 'react'

import { Typography } from '@material-ui/core'

type Props = {
    title: string
}

const CourseTitle = (props: Props): JSX.Element => {
    const { title } = props

    return <Typography variant="h3">{title}</Typography>
}

export default CourseTitle
