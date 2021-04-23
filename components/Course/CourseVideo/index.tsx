import React from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'

import classes from './style.module.scss'
type Props = {
    poster: string
}

const VideoPlayer = (props: Props): JSX.Element => {
    const { poster } = props

    return (
        <div className={classes.container}>
            <Player poster={poster}>
                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
            </Player>
        </div>
    )
}

export default VideoPlayer
