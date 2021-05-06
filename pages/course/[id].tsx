import React from 'react'
import Course from 'components/Course'

import { useRouter } from 'next/router'
import { CircularProgress, Backdrop } from '@material-ui/core'
import axios from 'axios'

import classes from './style.module.scss'

const CoursePage = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query
    const [isLoading, setIsLoading] = React.useState(true)

    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')

    const [course, setCourse] = React.useState()

    React.useEffect(() => {
        if (!course && id) {
            setIsLoading(true)
            try {
                axios
                    .get(`${process.env.COURSE_API}/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                        timeout: 60000
                    })
                    .then((res) => {
                        setCourse(res.data.data)
                        setIsLoading(false)
                    })
            } catch (e) {
                setIsLoading(false)

                throw new Error(e.message)
            }
        }
    }, [id])

    return isLoading ? (
        <Backdrop open={isLoading} invisible>
            <CircularProgress
                color="inherit"
                classes={{ root: classes.progress }}
            />
        </Backdrop>
    ) : (
        <Course course={course} />
    )
}

export default CoursePage
