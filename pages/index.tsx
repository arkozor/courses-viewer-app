import React from 'react'
import Carousel from '../components/Carousel'
import courses from '../components/Carousel/CoursesProvider/courses.json'

import HomepageBanner from '../components/Banners/HomepageBanner'
import { Course } from '../components/types'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <Carousel courseList={courses as Course[]} />
        </>
    )
}

export default HomePage
