import React from 'react'
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react'
import 'node_modules/video-react/dist/video-react.css'
import classes from './style.module.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const VideoPlayer = (props: { poster: string }) => {
    return (
        <div className={classes.player}>
            <Player poster={props.poster}>
                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

                <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton
                        rates={[5, 2, 1, 0.5, 0.1]}
                        order={7.1}
                    />
                    <VolumeMenuButton disabled />
                </ControlBar>
            </Player>
        </div>
    )
}

export default VideoPlayer
