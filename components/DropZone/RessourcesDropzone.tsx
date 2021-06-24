import React from 'react'

import { Typography, Paper, Divider } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDropzone } from 'react-dropzone'

import classes from './style.module.scss'
import { getIcon } from './utils'

type Props = {
    getFiles: (files: any[]) => void
    defaultValues: { title: string; resource_location: string }[]
}

const RessourcesDropzone = ({
    getFiles,
    defaultValues
}: Props): JSX.Element => {
    const [files, setFiles] = React.useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: ``,
        maxFiles: 10,
        onDrop: (acceptedFiles) => {
            setFiles(
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
        files.forEach((file) => URL.revokeObjectURL(file.preview))
        getFiles(files)
    }, [files])

    return (
        <div className={classes.container}>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <div className={classes.dropzone}>
                    <Paper elevation={1} className={classes.resourcesContainer}>
                        {defaultValues
                            ? defaultValues.map((file) => (
                                  <div
                                      className={classes.resource}
                                      key={file.title}
                                  >
                                      <span className={classes.resourceIcon}>
                                          {getIcon(file.title)}
                                      </span>
                                      <Typography variant="body1">
                                          {file.title}
                                      </Typography>
                                  </div>
                              ))
                            : files.map((file) => (
                                  <div
                                      className={classes.resource}
                                      key={file.name}
                                  >
                                      <span className={classes.resourceIcon}>
                                          {getIcon(file.name)}
                                      </span>
                                      <Typography variant="body1">
                                          {file.name}
                                      </Typography>
                                  </div>
                              ))}
                        {files.length || defaultValues.length ? (
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
                                Glissez ou sélectionnez les ressources
                                nécessaires au bon déroulement du cours.
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default RessourcesDropzone
