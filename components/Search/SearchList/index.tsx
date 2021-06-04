import React from 'react'

import { Backdrop, CircularProgress } from '@material-ui/core'
import { CourseType } from 'components/Course/types'
import { useRouter } from 'next/router'

import SearchCourseItem from '../SearchCourseItem'
import classes from './style.module.scss'

type Props = {
    courseItems: CourseType[]
    isLoading: boolean
}

const SearchList = ({ courseItems, isLoading }: Props): JSX.Element => {
    const router = useRouter()
    const { domain } = router.query

    const list = domain
        ? courseItems.filter((item) => item.domain === domain)
        : courseItems

    return (
        <div className={classes.container}>
            {isLoading ? (
                <Backdrop open={isLoading} invisible>
                    <CircularProgress color="primary" />
                </Backdrop>
            ) : (
                <div className={classes.listContainer}>
                    {list?.map((courseItem) => {
                        return (
                            <SearchCourseItem
                                key={courseItem.id}
                                course={courseItem}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchList
