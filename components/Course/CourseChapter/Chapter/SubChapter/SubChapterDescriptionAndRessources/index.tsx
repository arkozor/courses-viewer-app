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
import { ResourceType } from 'components/Course/types'
import { getIcon } from 'components/DropZone/utils'

import classes from './style.module.scss'

type Props = {
    resources: ResourceType[]
    description: string
    show: boolean
    isPreview?: boolean
}

const SubChapterDescriptionAndRessources = (props: Props): JSX.Element => {
    const { resources, show, description, isPreview } = props

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
                            : 'Voir plus'}
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
                                        disabled={isPreview}
                                        className={classes.iconButton}
                                        onClick={() => {
                                            /*Todo open ressource*/
                                        }}
                                    >
                                        {getIcon(resource?.title)}
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.itemText}
                                    primary={resource.title}
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
