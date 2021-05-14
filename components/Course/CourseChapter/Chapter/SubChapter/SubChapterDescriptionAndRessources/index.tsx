import React from 'react'

import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Typography,
    Button
} from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import { ResourceType } from 'components/Course/types'

import classes from './style.module.scss'

type Props = {
    resources: ResourceType[]
    description: string
    show: boolean
}

const SubChapterDescriptionAndRessources = (props: Props): JSX.Element => {
    const { resources, show, description } = props

    const [
        shouldDisplayFullDescription,
        setShouldDisplayFullDescription
    ] = React.useState(false)

    const longDescription = description?.length >= 400

    const descriptionPreview = longDescription
        ? `${description.substring(0, 200)} ...`
        : description

    return (
        <Collapse in={show}>
            <div className={classes.descriptionContainer}>
                <Typography variant="body1">
                    {shouldDisplayFullDescription
                        ? description
                        : descriptionPreview}
                </Typography>
                {longDescription && (
                    <Button
                        size="small"
                        classes={{ root: classes.showMoreButton }}
                        onClick={() => {
                            setShouldDisplayFullDescription(
                                !shouldDisplayFullDescription
                            )
                        }}
                    >
                        {shouldDisplayFullDescription
                            ? 'Voir moins'
                            : 'Voir plusdzqdzqdqz'}
                    </Button>
                )}
                {!!resources.length && (
                    <div className={classes.resourcesContainer}>
                        {resources.map((resource) => (
                            <ListItem
                                button
                                onClick={() => {
                                    /*Do something*/
                                }}
                                disableGutters
                                key={resource.id}
                                className={classes.listItem}
                            >
                                <ListItemIcon>
                                    <IconButton
                                        className={classes.iconButton}
                                        onClick={() => {
                                            /*Todo open ressource*/
                                        }}
                                    >
                                        <GetAppIcon />
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText
                                    primary={resource.title}
                                    className={classes.listItemText}
                                />
                            </ListItem>
                        ))}
                    </div>
                )}
            </div>
        </Collapse>
    )
}

export default SubChapterDescriptionAndRessources
