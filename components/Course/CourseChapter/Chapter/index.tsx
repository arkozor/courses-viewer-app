import React from 'react'
import { ChapterType, SubChapterType } from 'components/Course/types'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { ExpandLess, StarBorder, ExpandMore } from '@material-ui/icons'
import SubChapter from './SubChapter'

type Props = {
    chapter: ChapterType
}

const Chapter = (props: Props): JSX.Element => {
    const { chapter } = props

    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List component="div" aria-labelledby="chapters">
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText primary={chapter.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {chapter.subchapters.map((subchapter: SubChapterType) => (
                <ListItem key={subchapter.id}>
                    <SubChapter subchapter={subchapter} show={open} />
                </ListItem>
            ))}
        </List>
    )
}

export default Chapter
