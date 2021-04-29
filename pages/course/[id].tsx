import React from 'react'
import Course from 'components/Course'
import useAxios from 'axios-hooks'

import { useRouter } from 'next/router'
import { CircularProgress, Backdrop } from '@material-ui/core'

const CoursePage = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query

    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')
    const [course, setCourse] = React.useState()

    const [{ data, loading, error }] = useAxios({
        url: `http://idboard.net:43001/courses-viewer-api/public/index.php/api/courses/${id}`,
        headers: { Authorization: `Bearer ${token}` },
        timeout: 2000
    })

    React.useEffect(() => {
        if (!loading) {
            setCourse(JSON.parse(data?.data))
        }
    }, [id, data])

    if (error) {
        return <div>BOOOM</div>
    }
    return loading ? (
        <Backdrop open={loading} invisible>
            <CircularProgress color="inherit" />
        </Backdrop>
    ) : (
        <Course course={course} />
    )
}

export default CoursePage
