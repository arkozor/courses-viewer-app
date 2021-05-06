import ErrorComponent from 'components/ErrorComponent'
import React from 'react'
import ReactPlayer from 'react-player'
import { ChapterType, SubChapterType } from '../types'

import classes from './style.module.scss'

type Props = {
    chapter: ChapterType | SubChapterType
}
const VideoPlayer = (props: Props): JSX.Element => {
    const { chapter } = props

    return (
        <div className={classes.videoContainer}>
            {chapter ? (
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=9Hb0A6NEXjY"
                    height="100%"
                    width="100%"
                    controls
                />
            ) : (
                <ErrorComponent errorText="La vidéo a disparu !" />
            )}
        </div>
    )
}

export default VideoPlayer
