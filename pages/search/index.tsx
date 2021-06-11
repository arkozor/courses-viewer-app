import React from 'react'

import { Typography } from '@material-ui/core'
import axios from 'axios'
import { CourseType } from 'components/Course/types'
import SearchFilters from 'components/Filters/SearchFilters'
import { DomainFilter } from 'components/Filters/SearchFilters/type'
import SearchList from 'components/Search/SearchList'
import NoResult from 'components/Search/SearchList/NoResult'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

type StaticProps = {
    courseItems?: CourseType[]
    searchFilters?: {
        domains: DomainFilter[]
    }
}

const SearchPage = ({
    courseItems,
    searchFilters
}: StaticProps): JSX.Element => {
    const router = useRouter()
    const { keyword } = router.query
    const [isLoading, setIsLoading] = React.useState(false)

    const [searchResult, setSearchResult] = React.useState(courseItems)

    React.useEffect(() => {
        if (keyword) {
            try {
                setIsLoading(true)
                axios
                    .get(`${process.env.SEARCH_API}?search=${keyword}`, {
                        timeout: 60000
                    })
                    .then((res) => {
                        setSearchResult(res.data.data)
                        setIsLoading(false)
                    })
            } catch (e) {
                setIsLoading(false)
                throw new Error(e.message)
            }
        }
    }, [keyword])

    return keyword ? (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant="h5">
                    {`Résultats pour : "${keyword}"`}
                </Typography>
            </div>
            <div className={classes.filtersAndListContainer}>
                <SearchFilters filters={searchFilters.domains} />
                {searchResult?.length ? (
                    <SearchList
                        courseItems={searchResult}
                        isLoading={isLoading}
                    />
                ) : (
                    <NoResult />
                )}
            </div>
        </div>
    ) : (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant="h5">Tous les cours:</Typography>
            </div>
            <div className={classes.filtersAndListContainer}>
                <SearchFilters filters={searchFilters.domains} />
                {searchResult?.length ? (
                    <SearchList
                        courseItems={searchResult}
                        isLoading={isLoading}
                    />
                ) : (
                    <NoResult />
                )}
            </div>
        </div>
    )
}

export default SearchPage

export const getStaticProps: GetStaticProps = async () => {
    const searchCoursesRes = await fetch(`${process.env.COURSE_API}`)
    const domainsFiltersRes = await fetch(`${process.env.DOMAIN_API}`)

    const searchCoursesData = await searchCoursesRes.json()
    const domainsFiltersData = await domainsFiltersRes.json()

    const missingData = !searchCoursesData || !domainsFiltersData

    if (missingData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            courseItems: searchCoursesData.data.data,
            searchFilters: {
                domains: domainsFiltersData.data.data
            }
        }
    }
}
