import React from 'react'
import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { ResourceType } from 'components/Course/types'

import FolderIcon from '@material-ui/icons/Folder'

import classes from './style.module.scss'

type Props = {
    resource: ResourceType
    show: boolean
}

const SubChapterRessources = (props: Props): JSX.Element => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const { resource, show } = props

    return (
        <Collapse in={show} key={resource.id}>
            <ListItem
                button
                onClick={handleClick}
                disableGutters
                disableRipple
                className={classes.listItem}
            >
                <ListItemIcon>
                    <IconButton
                        className={classes.iconButton}
                        onClick={() => {
                            /*Todo open ressource*/
                        }}
                    >
                        <FolderIcon />
                    </IconButton>
                </ListItemIcon>
                <ListItemText
                    primary={resource.title}
                    className={classes.listItemText}
                />
            </ListItem>
        </Collapse>
    )
}

export default SubChapterRessources
