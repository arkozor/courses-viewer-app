import React from 'react'
import Carousel from '../components/Carousel'
import courses from '../components/Carousel/CoursesProvider/courses.json'
import HomepageBanner from '../components/Banners/HomepageBanner'
import { Course } from '../components/types'
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
            <Carousel courseList={courses as Course[]} title="" />
            <Separation text="Vidéos du moment" />
            <Carousel
                courseList={courses as Course[]}
                title="Dernieres vidéos mises en ligne"
            />
            <Carousel
                courseList={courses as Course[]}
                title="Videos les plus vues"
            />
        </>
    )
}

export default HomePage
