import React from 'react'
import CourseCarousel from '../components/CourseCarousel'
import courses from '../components/CourseCarousel/CoursesProvider/courses.json'

import HomepageBanner from '../components/Banners/HomepageBanner'
import ChipFilters from 'components/ChipFilters'
import classes from './style.module.scss'
import Separation from 'components/Separation'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <div className={classes.chips}>
                <ChipFilters />
            </div>
            <CourseCarousel courseList={courses} />
            <Separation text="Vidéos du moment" />
            <CourseCarousel
                courseList={courses}
                title="Dernieres vidéos mises en ligne"
            />
            <CourseCarousel courseList={courses} title="Videos les plus vues" />
        </>
    )
}

export default HomePage
