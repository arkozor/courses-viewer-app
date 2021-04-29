import { Button, Typography, Divider } from '@material-ui/core'
import useAxios from 'axios-hooks'
import Avatar from 'components/Avatar'
import React from 'react'

import classes from './style.module.scss'

type Props = {
    authorId: number
    description: string
}

const CourseDescription = (props: Props): JSX.Element => {
    const [
        shouldDisplayFullDescription,
        setShouldDisplayFullDescription
    ] = React.useState(false)

    const [author, setAuthor] = React.useState({ nickname: '', avatarSrc: '' })
    const { authorId, description } = props

    const [{ data, loading }] = useAxios({
        url: `https://pokeapi.co/api/v2/pokemon/${authorId}`,
        timeout: 2000
    })

    React.useEffect(() => {
        if (data) {
            setAuthor({
                nickname: data.name,
                avatarSrc: data.sprites.front_default
            })
        }
    }, [data])

    const longDescription = description?.length >= 500

    const descriptionPreview = longDescription
        ? `${description.substring(0, 400)} ...`
        : description

    return !loading ? (
        <div className={classes.courseDescriptionContainer}>
            <div className={classes.container}>
                <div className={classes.authorContainer}>
                    <Avatar
                        nickname={author.nickname}
                        src={author.avatarSrc}
                        withNickname
                    />
                </div>
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
                </div>
            </div>
            <Divider />
        </div>
    ) : null
}

export default CourseDescription
