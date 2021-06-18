import React from 'react'

import axios from 'axios'

import CarouselTitle from './CarouselTitle'
import CourseCarousel from './CourseCarousel'
import classes from './style.module.scss'

const CourseCarouselSection = (): JSX.Element => {
    const [mostClickedCourses, setMostClickedCourses] = React.useState([])
    const [courses, setCourses] = React.useState([])

    React.useEffect(() => {
        try {
            axios
                .get(`${process.env.COURSE_API}/mostClicked`, {
                    timeout: 80000
                })
                .then((res) => {
                    setMostClickedCourses(res.data.data)
                })
            axios
                .get(`${process.env.COURSE_API}`, {
                    timeout: 80000
                })
                .then((res) => {
                    setCourses(res.data.data.data)
                })
        } catch (e) {
            throw new Error("Impossible d'afficher les cours")
        }
    }, [])

    const carouselSectionData = [
        {
            title: 'Vidéos du moment',
            coursesPreview: courses
        },
        {
            title: 'Dernières vidéos mises en ligne',
            coursesPreview: courses
        },
        {
            title: 'Vidéos les plus vues',
            coursesPreview: mostClickedCourses
        }
    ]

    return (
        <div className={classes.container}>
            {carouselSectionData.map((sectionData) => {
                const { coursesPreview, title } = sectionData
                if (coursesPreview.length > 0) {
                    return (
                        <div
                            key={title}
                            className={classes.subSectionContainer}
                        >
                            <CarouselTitle title={title} />
                            <CourseCarousel
                                coursesPreviewList={coursesPreview}
                            />
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default CourseCarouselSection
