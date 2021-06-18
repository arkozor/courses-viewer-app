import React from 'react'

import { CircularProgress, Backdrop } from '@material-ui/core'
import axios from 'axios'
import Course from 'components/Course'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const CoursePage = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query
    const [isLoading, setIsLoading] = React.useState(false)
    const currentUser = React.useContext(UserContext)
    const [course, setCourse] = React.useState()

    React.useEffect(() => {
        if (!course && id) {
            if (currentUser) {
                setIsLoading(true)
                try {
                    axios
                        .get(`${process.env.COURSE_API}/${id}`, {
                            headers: {
                                Authorization: `Bearer ${currentUser.token}`
                            },
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
