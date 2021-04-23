import React from 'react'
import Course from 'components/Course'
import { useRouter } from 'next/router'

const CoursePage = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query

    return <Course id={id} />
}

export default CoursePage
