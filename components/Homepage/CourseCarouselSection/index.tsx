import React from 'react'

import { useRouter } from 'next/router'

import CarouselTitle from './CarouselTitle'
import CourseCarousel from './CourseCarousel'
import coursesPreviewList from './CourseCarousel/CoursesProvider/courses.json'
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
                const { query } = useRouter()
                const courses = query.domain
                    ? coursesPreview.filter(
                          (coursePreview) =>
                              coursePreview.domain === query.domain
                      )
                    : coursesPreview
                return (
                    <div key={title} className={classes.subSectionContainer}>
                        <CarouselTitle title={title} />
                        {/* @ts-expect-error remove when we will have real data */}
                        <CourseCarousel coursesPreviewList={courses} />
                    </div>
                )
            })}
        </div>
    )
}

export default CourseCarouselSection
