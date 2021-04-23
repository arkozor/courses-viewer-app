import React from 'react'
import coursesPreviewList from './CourseCarousel/CoursesProvider/courses.json'

import CourseCarousel from './CourseCarousel'
import Separation from 'components/Homepage/CourseCarouselSection/CarouselTitle'

import classes from './style.module.scss'

const carouselSectionData = [
    {
        title: 'Vidéos du moment',
        coursesPreview: coursesPreviewList
    },
    {
        title: 'Dernières vidéos mises en ligne',
        coursesPreview: coursesPreviewList
    },
    {
        title: 'Vidéos les plus vues',
        coursesPreview: coursesPreviewList
    }
]

const CourseCarouselSection = (): JSX.Element => {
    return (
        <div className={classes.container}>
            {carouselSectionData.map((sectionData) => {
                const { coursesPreview, title } = sectionData
                return (
                    <div key={title} className={classes.subSectionContainer}>
                        <Separation title={title} />
                        <CourseCarousel coursesPreviewList={coursesPreview} />
                    </div>
                )
            })}
        </div>
    )
}

export default CourseCarouselSection
