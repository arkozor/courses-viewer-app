import React from 'react'
import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core'
import { ResourceType } from 'components/Course/types'
import { ExpandLess, StarBorder, ExpandMore } from '@material-ui/icons'

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
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary={resource.title} />
                {resource && open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
        </Collapse>
    )
}

export default SubChapterRessources
