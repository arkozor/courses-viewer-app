import React from 'react'
import {
    Collapse,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton
} from '@material-ui/core'
import { SubChapterType } from 'components/Course/types'
import { ExpandLess, ExpandMore, PlayArrow } from '@material-ui/icons'
import SubChapterResources from './SubChapterResources'
import { useRouter } from 'next/router'

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
            <ListItem button onClick={handleClick} disableGutters>
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
                    >
                        <PlayArrow />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary={subchapter.title} />
                {subchapter.resources.length && open ? (
                    <ExpandLess />
                ) : (
                    <ExpandMore />
                )}
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
