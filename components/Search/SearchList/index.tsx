import React from 'react'

import { Backdrop, CircularProgress } from '@material-ui/core'
import { CourseType } from 'components/Course/types'
import { useRouter } from 'next/router'

import SearchCourseItem from '../SearchCourseItem'
import NoResult from './NoResult'
import classes from './style.module.scss'

type Props = {
    courseItems: CourseType[]
    isLoading: boolean
}

const SearchList = ({ courseItems, isLoading }: Props): JSX.Element => {
    const router = useRouter()
    const { domain, theme, category } = router.query
    const [filteredList, setFilteredList] = React.useState([])

    React.useEffect(() => {
        let filtered = courseItems

        const filterByCategory = (list: CourseType[]): CourseType[] =>
            list.filter((item) => item.category?.name === category)

        const filterByDomain = (list: CourseType[]): CourseType[] =>
            list.filter((item) => item.domain?.name === domain)

        const filterByTheme = (list: CourseType[]): CourseType[] =>
            list.filter((item) => item.theme?.name === theme)

        if (theme) {
            filtered = filterByTheme(filtered)
        }
        if (domain) {
            filtered = filterByDomain(filtered)
        }
        if (category) {
            filtered = filterByCategory(filtered)
        }
        setFilteredList(filtered)
    }, [domain, theme, category])

    if (!isLoading && !filteredList.length) {
        return <NoResult />
    }
    return (
        <div className={classes.container}>
            {isLoading ? (
                <Backdrop open={isLoading} invisible>
                    <CircularProgress color="primary" />
                </Backdrop>
            ) : (
                <div className={classes.listContainer}>
                    {filteredList.map((courseItem) => {
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
