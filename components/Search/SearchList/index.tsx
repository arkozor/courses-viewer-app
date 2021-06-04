import React from 'react'

import { CourseType } from 'components/Course/types'
import { useRouter } from 'next/router'

import SearchCourseItem from '../SearchCourseItem'
import classes from './style.module.scss'

type Props = {
    courseItems: CourseType[]
}

const SearchList = ({ courseItems }: Props): JSX.Element => {
    const router = useRouter()
    const { domain } = router.query

    const list = domain
        ? courseItems.filter((item) => item.domain === domain)
        : courseItems

    return (
        <div className={classes.container}>
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
