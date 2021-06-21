import React from 'react'

import { Typography, Paper, Divider } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDropzone } from 'react-dropzone'

import classes from './style.module.scss'
import { getIcon } from './utils'

type Props = {
    getFile: (files: any[]) => void
    defaultValues: { name: string; preview: string }
}

const VideoDropzone = ({ getFile, defaultValues }: Props): JSX.Element => {
    const [videos, setVideos] = React.useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: `video/*`,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setVideos(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            )
        }
    })

    React.useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        videos.forEach((video) => URL.revokeObjectURL(video.preview))
        getFile(videos)
    }, [videos])

    return (
        <div className={classes.container}>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <div className={classes.dropzone}>
                    <Paper elevation={1} className={classes.resourcesContainer}>
                        <div className={classes.resource}>
                            <span className={classes.resourceIcon}>
                                {defaultValues
                                    ? getIcon(defaultValues.name)
                                    : null}
                            </span>
                            <Typography variant="body2">
                                {defaultValues ? defaultValues.name : null}
                            </Typography>
                        </div>
                        {defaultValues?.name ? (
                            <Divider
                                classes={{ root: classes.divider }}
                                light
                            />
                        ) : null}
                        <div className={classes.addResource}>
                            <AddCircleIcon
                                className={classes.addImage}
                                color="primary"
                            />
                            <Typography variant="subtitle1">
                                Glissez votre vidéo ou sélectionnez une vidéo en
                                cliquant ici.
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default VideoDropzone
