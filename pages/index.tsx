import React from 'react'
import CourseCarousel from '../components/CourseCarousel'
import courses from '../components/CourseCarousel/CoursesProvider/courses.json'

import HomepageBanner from '../components/Banners/HomepageBanner'
import { Course } from '../components/types'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <CourseCarousel courseList={courses as Course[]} />
        </>
    )
}

export default HomePage
