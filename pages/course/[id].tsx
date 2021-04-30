import React from 'react'
import Course from 'components/Course'

import { useRouter } from 'next/router'
import { CircularProgress, Backdrop } from '@material-ui/core'
import axios from 'axios'
import ErrorComponent from 'components/ErrorComponent'

const CoursePage = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query
    const [hasError, setHasError] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')

    const [course, setCourse] = React.useState()

    React.useEffect(() => {
        if (!course && id) {
            setIsLoading(true)
            axios
                .get(`${process.env.COURSE_API}/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then((res) => {
                    setCourse(res.data.data)
                    setIsLoading(false)
                })
                .catch((e) => {
                    setIsLoading(false)
                    setHasError(true)
                    throw new Error(e.message)
                })
        }
    }, [course, id])

    //User ErrorBoundary when it will be fully functional
    if (hasError) {
        return (
            <ErrorComponent
                errorNum="404"
                errorText="Bah alors, on est perdu ?"
            />
        )
    }

    return isLoading && !hasError ? (
        <Backdrop open={isLoading} invisible>
            <CircularProgress color="inherit" />
        </Backdrop>
    ) : (
        <Course course={course} />
    )
}

export default CoursePage
