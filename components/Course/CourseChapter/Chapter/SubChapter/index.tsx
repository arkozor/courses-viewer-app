import React from 'react'
import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    List
} from '@material-ui/core'
import { SubChapterType } from 'components/Course/types'
import { ExpandLess, StarBorder, ExpandMore } from '@material-ui/icons'
import SubChapterRessources from './SubChapterRessources'

type Props = {
    subchapter: SubChapterType
    show: boolean
}
const SubChapter = (props: Props): JSX.Element => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const { subchapter, show } = props
    return (
        <Collapse in={show} key={subchapter.id}>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={subchapter.title} />
                    {subchapter.resources && open ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )}
                </ListItem>
                {subchapter.resources.map((resource) => (
                    <ListItem key={resource.id}>
                        <SubChapterRessources resource={resource} show={open} />
                    </ListItem>
                ))}
            </List>
        </Collapse>
    )
}

export default SubChapter
