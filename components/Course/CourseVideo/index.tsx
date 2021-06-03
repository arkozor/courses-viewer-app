import React from 'react'

import Image from 'next/image'
import ReactPlayer from 'react-player'

import { SubChapterType } from '../types'
import classes from './style.module.scss'

type Props = {
    subChapter: SubChapterType
    thumbnail: string
}
const VideoPlayer = (props: Props): JSX.Element => {
    const { subChapter, thumbnail } = props
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
                <Image
                    src={thumbnail ? thumbnail : '/images/notFound.png'}
                    alt="thumbnail"
                    width="100%"
                    height="100%"
                />
            )}
        </div>
    )
}

export default VideoPlayer
