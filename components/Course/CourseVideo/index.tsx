import React from 'react'
import ReactPlayer from 'react-player'
import { ChapterType, SubChapterType } from '../types'

import classes from './style.module.scss'

type Props = {
    chapter: ChapterType | SubChapterType
}
const VideoPlayer = (props: Props): JSX.Element => {
    const { chapter } = props

    return chapter ? (
        <div className={classes.videoContainer}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=9Hb0A6NEXjY&t=644s"
                height="100%"
                width="100%"
                controls
            />
        </div>
    ) : null
}

export default VideoPlayer
