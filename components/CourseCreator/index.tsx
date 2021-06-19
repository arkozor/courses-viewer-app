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

type Props = {
    filters?: {
        domains: DomainFilter[]
        themes: ThemeFilter[]
        categories: CategoryFilter[]
    }
}
const CourseCreator = ({ filters }: Props): JSX.Element => {
    return (
        <Paper elevation={1} className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h2" gutterBottom>
                    Création de cours
                </Typography>
            </div>
            <CourseStepper
                components={[
                    <TitleAndCategoryStep
                        key="TitleAndCategoryStep"
                        categories={filters.categories}
                    />,
                    <ChaptersStep key="ChaptersStep" />,
                    <div key="Validation">Validation</div>
                ]}
            />
        </Paper>
    )
}

export default CourseCreator
