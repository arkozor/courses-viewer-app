import React from 'react'

import { Typography, Paper, IconButton, Divider } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useDropzone } from 'react-dropzone'

import classes from './style.module.scss'

type Props = {
    getFile: (files: any[]) => void
    defaultValues: string
}

const ImageDropzoneWithPreview = ({
    getFile,
    defaultValues
}: Props): JSX.Element => {
    const [images, setImages] = React.useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: `image/*`,
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setImages(
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
        images.forEach((image) => URL.revokeObjectURL(image.preview))
        getFile(images)
    }, [images])

    return (
        <div className={classes.container}>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <div className={classes.dropzone}>
                    <Paper elevation={1} className={classes.resourcesContainer}>
                        <div className={classes.removeImage}>
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setImages([])
                                }}
                            >
                                <HighlightOffIcon color="primary" />
                            </IconButton>
                        </div>

                        {defaultValues || images[0] ? (
                            <>
                                <img
                                    className={classes.imagePreview}
                                    src={
                                        defaultValues
                                            ? defaultValues
                                            : images[0]
                                    }
                                />
                                <Divider
                                    classes={{ root: classes.divider }}
                                    light
                                />
                            </>
                        ) : null}
                        <div className={classes.addResource}>
                            <AddCircleIcon
                                className={classes.addImage}
                                color="primary"
                            />
                            <Typography variant="body2">
                                Glissez votre image ou sélectionnez une image en
                                cliquant ici.
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default ImageDropzoneWithPreview
