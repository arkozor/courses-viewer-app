import React from 'react'

import CourseCreator from 'components/CourseCreator'
import { GetStaticProps } from 'next'

const NewCourse = ({ filters }): JSX.Element => {
    // const [isAdmin, setIsAdmin] = React.useState(false)

    return <CourseCreator filters={filters} />
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
