import React, { useContext } from 'react'

import {
    Button,
    Typography,
    Divider,
    CircularProgress
} from '@material-ui/core'
import axios from 'axios'
import Avatar from 'components/Avatar'
import { UserContext } from 'context'

import classes from './style.module.scss'

type Props = {
    authorId: number
    description: string
    isPreview?: boolean
}

const CourseDescription = (props: Props): JSX.Element => {
    const currentUser = useContext(UserContext)

    const [
        shouldDisplayFullDescription,
        setShouldDisplayFullDescription
    ] = React.useState(false)
    const [author, setAuthor] = React.useState({ nickname: '', avatarSrc: '' })
    const [isLoadingAvatar, setIsLoadingAvatar] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    const { authorId, description, isPreview } = props

    const getAuthorInfos = () => {
        setIsLoadingAvatar(true)
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${authorId}`)
            .then((res) => {
                setAuthor({
                    nickname: res.data.name,
                    avatarSrc: res.data.sprites.front_default
                })
                setIsLoadingAvatar(false)
            })
            .catch((e) => {
                setIsLoadingAvatar(false)
                throw new Error(e.message)
            })
    }

    React.useEffect(() => {
        if (authorId && !isPreview) {
            getAuthorInfos()
        }
        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 3000)
        }
    }, [authorId])

    const longDescription = description?.length >= 500

    const descriptionPreview = longDescription
        ? `${description.substring(0, 400)} ...`
        : description

    return (
        <div className={classes.courseDescriptionContainer}>
            <div className={classes.container}>
                <div className={classes.authorContainer}>
                    {isLoadingAvatar ? (
                        <CircularProgress
                            color="primary"
                            classes={{
                                root: classes.progress
                            }}
                        />
                    ) : (
                        <Avatar
                            nickname={
                                isPreview
                                    ? currentUser.username
                                    : author.nickname
                            }
                            src={
                                isPreview
                                    ? currentUser.avatarSrc
                                    : author.avatarSrc
                            }
                            withNickname
                        />
                    )}
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
    )
}

export default CourseDescription
