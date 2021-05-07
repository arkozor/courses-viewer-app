import React from 'react'

import ErrorComponent from 'components/ErrorComponent'
import ReactPlayer from 'react-player'

import { SubChapterType } from '../types'
import classes from './style.module.scss'

type Props = {
    subChapter: SubChapterType
}
const VideoPlayer = (props: Props): JSX.Element => {
    const { subChapter } = props
    const videoLocation = subChapter?.video_location

    return (
        <div className={classes.videoContainer}>
            {videoLocation ? (
                <ReactPlayer
                    url={videoLocation}
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
