import React from 'react'
import { ChapterType, SubChapterType } from 'components/Course/types'
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { ExpandLess, VideoLibrary, ExpandMore } from '@material-ui/icons'
import SubChapter from './SubChapter'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

type Props = {
    chapter: ChapterType
}

const Chapter = (props: Props): JSX.Element => {
    const { chapter } = props
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <List component="div" aria-labelledby="chapters">
            <ListItem
                disableRipple
                button
                onClick={handleClick}
                disableGutters
                className={classes.listItem}
            >
                <ListItemIcon>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation()
                            router.push({
                                pathname: location.pathname,
                                query: { chapter: chapter.id }
                            })
                        }}
                        className={classes.iconButton}
                        color="inherit"
                    >
                        <VideoLibrary />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={chapter.title} />
                {open && chapter.subchapters ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            {chapter.subchapters.map((subchapter: SubChapterType) => (
                <SubChapter
                    key={subchapter.id}
                    subchapter={subchapter}
                    show={open}
                />
            ))}
        </List>
    )
}

export default Chapter
