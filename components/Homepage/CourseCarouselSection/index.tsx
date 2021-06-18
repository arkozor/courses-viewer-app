import React from 'react'

import { CircularProgress } from '@material-ui/core'
import axios from 'axios'

import CarouselHeader from './CarouselTitle'
import CourseCarousel from './CourseCarousel'
import classes from './style.module.scss'

const CourseCarouselSection = (): JSX.Element => {
    const [mostClickedCourses, setMostClickedCourses] = React.useState([])
    const [courses, setCourses] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setIsLoading(true)
        try {
            axios
                .get(`${process.env.COURSE_API}/mostClicked`, {
                    timeout: 60000
                })
                .then((res) => {
                    setMostClickedCourses(res.data.data)
                })
            axios
                .get(`${process.env.COURSE_API}`, {
                    timeout: 60000
                })
                .then((res) => {
                    setCourses(res.data.data.data)
                })
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
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

    return isLoading ? (
        <div className={classes.skeleton}>
            <CircularProgress color="primary" />
        </div>
    ) : (
        <div className={classes.container}>
            {carouselSectionData.map((sectionData) => {
                const { coursesPreview, title } = sectionData
                if (coursesPreview.length) {
                    return (
                        <div
                            key={title}
                            className={classes.subSectionContainer}
                        >
                            <CarouselHeader title={title} />
                            <CourseCarousel
                                coursesPreviewList={coursesPreview}
                                title={title}
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
