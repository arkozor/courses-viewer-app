import React from 'react'

import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { ExpandLess, ExpandMore, VideoLibrary } from '@material-ui/icons'
import { SubChapterType } from 'components/Course/types'
import { useRouter } from 'next/router'

import classes from './style.module.scss'
import SubChapterDescriptionAndRessources from './SubChapterDescriptionAndRessources'

type Props = {
    chapterNumber: number
    subchapter: SubChapterType
    show: boolean
}
const SubChapter = (props: Props): JSX.Element => {
    const [open, setOpen] = React.useState(false)

    const router = useRouter()

    const handleClick = () => {
        setOpen(!open)
    }

    const { subchapter, show, chapterNumber } = props
    return (
        <Collapse in={show} key={subchapter.id}>
            <ListItem
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
                                    query: {
                                        ...router.query,
                                        chapter: chapterNumber,
                                        subchapter: subchapter.number
                                    }
                                },
                                '',
                                { shallow: true }
                            )
                        }}
                        className={classes.iconButton}
                    >
                        <VideoLibrary />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={subchapter.title} />
                {subchapter.resources.length || subchapter.description ? (
                    open ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )
                ) : null}
            </ListItem>
            <SubChapterDescriptionAndRessources
                resources={subchapter.resources}
                description={subchapter.description}
                show={open}
            />
        </Collapse>
    )
}

export default SubChapter
