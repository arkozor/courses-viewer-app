import { Typography, Divider } from '@material-ui/core'
import React from 'react'
import moment from 'moment'

import classes from './style.module.scss'
import { ChapterType, SubChapterType } from 'components/Course/types'

type Props = {
    chapter: ChapterType | SubChapterType
}

moment.locale('fr')

const ChapterTitle = (props: Props): JSX.Element => {
    const { chapter } = props

    return (
        <div className={classes.titleContainer}>
            <Typography variant="h5">{chapter?.title}</Typography>
            <div className={classes.dateContainer}>
                <Typography variant="caption" className={classes.date}>
                    {moment(chapter?.created_at).calendar()}
                </Typography>
            </div>

            <Divider />
        </div>
    )
}

export default ChapterTitle
