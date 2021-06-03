import React from 'react'

import { Backdrop, CircularProgress, Typography } from '@material-ui/core'
import axios from 'axios'
import SearchList from 'components/Search/SearchList'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const Search = (): JSX.Element => {
    const router = useRouter()
    const { search } = router.query

    const [isLoading, setIsLoading] = React.useState(true)

    const token =
        typeof window !== 'undefined' && window.localStorage.getItem('token')

    const [courses, setCourses] = React.useState()

    React.useEffect(() => {
        if (!courses) {
            setIsLoading(true)
            try {
                axios
                    .get(`${process.env.COURSE_API}`, {
                        headers: { Authorization: `Bearer ${token}` },
                        timeout: 60000
                    })
                    .then((res) => {
                        setCourses(res.data.data.data)
                        setIsLoading(false)
                    })
            } catch (e) {
                setIsLoading(false)

                throw new Error(e.message)
            }
        }
    }, [])

    const searchCourseList = {
        title: 'Les cours les plus suivis',
        courseItems: courses
    }

    return isLoading && !courses ? (
        <Backdrop open={isLoading} invisible>
            <CircularProgress
                color="primary"
                classes={{ root: classes.progress }}
            />
        </Backdrop>
    ) : (
        <div>
            <div className={classes.titleContainer}>
                <Typography variant="h5">
                    Résultats pour : &ldquo;{search}&ldquo;
                </Typography>
            </div>
            <SearchList searchCourseList={searchCourseList} />
        </div>
    )
}

export default Search
