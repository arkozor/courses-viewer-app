import React from 'react'

import axios from 'axios'

const CoursePreview = (): JSX.Element => {
    React.useEffect(() => {
        axios.get(`${process.env.COURSE_API}`)
    }, [])
    return <div>Vous devez être connecté pour voir ce cours</div>
}

export default CoursePreview
