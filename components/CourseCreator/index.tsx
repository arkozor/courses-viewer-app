import React from 'react'

import { Typography, Paper } from '@material-ui/core'
import {
    DomainFilter,
    ThemeFilter,
    CategoryFilter
} from 'components/Filters/SearchFilters/type'

import ChaptersStep from './ChaptersStep'
import CourseStepper from './CourseStepper'
import classes from './style.module.scss'
import TitleAndCategoryStep from './TitleAndCategoryStep'
import ValidationStep from './ValidationStep'

type Props = {
    filters?: {
        domains: DomainFilter[]
        themes: ThemeFilter[]
        categories: CategoryFilter[]
    }
}

const CourseCreator = ({ filters }: Props): JSX.Element => {
    const localStorageCourse =
        typeof window != 'undefined' && localStorage.getItem('course')
    const components = localStorageCourse
        ? [
              <TitleAndCategoryStep
                  key="TitleAndCategoryStep"
                  filters={filters}
              />,
              <ChaptersStep key="ChaptersStep" />,
              <ValidationStep key="ValidationStep" />
          ]
        : [
              <TitleAndCategoryStep
                  key="TitleAndCategoryStep"
                  filters={filters}
              />
          ]
    return (
        <Paper elevation={1} className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h2" gutterBottom>
                    Création de cours
                </Typography>
            </div>
            <CourseStepper components={components} />
        </Paper>
    )
}

export default CourseCreator
