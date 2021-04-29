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
        if (!course) {
            setIsLoading(true)
            axios
                .get(
                    `http://idboard.net:43001/courses-viewer-api/public/index.php/api/courses/${id}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        timeout: 6000
                    }
                )
                .then((res) => setCourse(res.data.data))
                .catch(() => {
                    setIsLoading(false)
                    setHasError(true)
                })
            setIsLoading(false)
        }
    }, [])

    if (hasError) {
        return (
            <ErrorComponent
                errorNum="404"
                errorText="Bah alors, on est perdu ?"
            />
        )
    }

    return isLoading ? (
        <Backdrop open={isLoading} invisible>
            <CircularProgress color="inherit" />
        </Backdrop>
    ) : (
        <Course course={course} />
    )
}

export default CoursePage
