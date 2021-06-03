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
    const [courses, setCourses] = React.useState([])

    React.useEffect(() => {
        try {
            axios
                .get(`${process.env.SEARCH_API}?search=${search}`, {
                    timeout: 60000
                })
                .then((res) => {
                    setCourses(res.data.data)
                    setIsLoading(false)
                })
        } catch (e) {
            setIsLoading(false)
            throw new Error(e.message)
        }
    }, [search])

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
                <Typography variant="h5">
                    {courses?.length ? 'Résultats pour' : 'Aucun résultat pour'}{' '}
                    : &ldquo;{search}&ldquo;
                </Typography>
            </div>
            <SearchList searchCourseList={searchCourseList} />
        </div>
    )
}

export default Search
