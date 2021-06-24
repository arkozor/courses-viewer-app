import React from 'react'

import CourseCreator from 'components/CourseCreator'
import {
    DomainFilter,
    ThemeFilter,
    CategoryFilter
} from 'components/Filters/SearchFilters/type'
import { UserContext } from 'context'
import { GetStaticProps } from 'next'

type Props = {
    filters?: {
        domains: DomainFilter[]
        themes: ThemeFilter[]
        categories: CategoryFilter[]
    }
}

const NewCourse = ({ filters }: Props): JSX.Element => {
    const currentUser = React.useContext(UserContext)

    React.useEffect(() => {
        if (currentUser?.isAdmin === false) {
            throw new Error(
                "Vous n'avez pas les droits pour accéder à cette page"
            )
        }
    }, [currentUser?.isAdmin])

    return currentUser ? <CourseCreator filters={filters} /> : null
}

export default NewCourse

export const getStaticProps: GetStaticProps = async () => {
    const domainsFiltersRes = await fetch(`${process.env.DOMAIN_API}`)
    const themeFiltersRes = await fetch(`${process.env.THEME_API}`)
    const categoryFiltersRes = await fetch(`${process.env.CATEGORY_API}`)

    const domainsFiltersData = await domainsFiltersRes.json()
    const themesFiltersData = await themeFiltersRes.json()
    const categoriesFiltersData = await categoryFiltersRes.json()

    if (!domainsFiltersData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            filters: {
                domains: domainsFiltersData.data.data,
                themes: themesFiltersData.data.data,
                categories: categoriesFiltersData.data.data
            }
        }
    }
}
