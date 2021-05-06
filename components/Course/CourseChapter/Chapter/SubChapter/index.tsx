import React from 'react'
import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { SubChapterType } from 'components/Course/types'
import { ExpandLess, ExpandMore, VideoLibrary } from '@material-ui/icons'
import SubChapterResources from './SubChapterResources'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

type Props = {
    subchapter: SubChapterType
    show: boolean
}
const SubChapter = (props: Props): JSX.Element => {
    const [open, setOpen] = React.useState(false)

    const router = useRouter()

    const handleClick = () => {
        setOpen(!open)
    }

    const { subchapter, show } = props
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
                            router.push({
                                query: {
                                    ...router.query,
                                    subchapter: subchapter.id
                                }
                            })
                        }}
                        className={classes.iconButton}
                    >
                        <VideoLibrary />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={subchapter.title} />
                {subchapter.resources.length ? (
                    open ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )
                ) : null}
            </ListItem>
            {subchapter.resources.map((resource) => (
                <SubChapterResources
                    key={resource.id}
                    resource={resource}
                    show={open}
                />
            ))}
        </Collapse>
    )
}

export default SubChapter
