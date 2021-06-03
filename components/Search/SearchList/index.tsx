import React from 'react'

import { CourseType } from 'components/Course/types'
import SearchFilters from 'components/Filters/SearchFilters'
import { useRouter } from 'next/router'

import SearchCourseItem from '../SearchCourseItem'
import classes from './style.module.scss'

type Props = {
    searchCourseList: {
        title: string
        courseItems: CourseType[]
    }
}

const SearchList = ({ searchCourseList }: Props): JSX.Element => {
    const router = useRouter()
    const { domain } = router.query

    const list = domain
        ? searchCourseList.courseItems.filter((item) => item.domain === domain)
        : searchCourseList.courseItems

    return (
        <div className={classes.container}>
            <SearchFilters />
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
        </div>
    )
}

export default SearchList
