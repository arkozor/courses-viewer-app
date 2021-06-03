import React from 'react'

import { Backdrop, CircularProgress, Typography } from '@material-ui/core'
import axios from 'axios'
import SearchList from 'components/Search/SearchList'

import classes from './style.module.scss'

const SearchPage = (): JSX.Element => {
    const [courses, setCourses] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        try {
            axios
                .get(`${process.env.COURSE_API}`, {
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
    }, [])

    const searchCourseList = {
        title: 'Les cours les plus suivis',
        courseItems: courses
    }

    return isLoading && !courses?.length ? (
        <Backdrop open={isLoading} invisible>
            <CircularProgress
                color="primary"
                classes={{ root: classes.progress }}
            />
        </Backdrop>
    ) : (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant="h5">Tous les cours:</Typography>
            </div>
            <SearchList searchCourseList={searchCourseList} />
        </div>
    )
}

export default SearchPage
