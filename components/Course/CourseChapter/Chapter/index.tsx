import React from 'react'

import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { ExpandLess, VideoLibrary, ExpandMore } from '@material-ui/icons'
import { ChapterType, SubChapterType } from 'components/Course/types'
import { useRouter } from 'next/router'

import classes from './style.module.scss'
import SubChapter from './SubChapter'

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
                            router.push(
                                {
                                    pathname: location.pathname,
                                    query: { chapter: chapter.number }
                                },
                                '',
                                { shallow: true }
                            )
                        }}
                        className={classes.iconButton}
                        color="inherit"
                    >
                        <VideoLibrary />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={chapter.title} />
                {chapter.subchapters.length ? (
                    open ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )
                ) : null}
            </ListItem>

            {chapter.subchapters &&
                chapter.subchapters.map((subchapter: SubChapterType) => (
                    <SubChapter
                        key={subchapter.number}
                        chapterNumber={chapter.number}
                        subchapter={subchapter}
                        show={open}
                    />
                ))}
        </List>
    )
}

export default Chapter
