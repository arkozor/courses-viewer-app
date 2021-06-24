import React from 'react'

import { Typography, TextField, Button, Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { RessourcesDropzone, VideoDropzone } from 'components/DropZone'

import { PostSubChapterArgs, PostCourseArgs, PostChapterArgs } from '../type'
import classes from './style.module.scss'

type Props = {
    chapterId: number
}

const SubChapterEditor = ({ chapterId }: Props): JSX.Element => {
    const chapterIndex = chapterId - 1

    const localStorageCourse =
        typeof window !== 'undefined' && localStorage.getItem('course')

    const [parsedLocalStorageCourse, setParsedLocalStorageCourse] =
        React.useState<PostCourseArgs>(JSON.parse(localStorageCourse))

    const [chapters, setChapters] = React.useState(
        parsedLocalStorageCourse?.chapters
    )
    const currentChapter = chapters[chapterIndex]
    const subChapters = currentChapter?.subchapters

    const onChangeSubChapter = (
        providedIndex: number,
        update: PostSubChapterArgs
    ) => {
        const updatedCurrentSubChapter = subChapters.map(
            (subChapter, index) => {
                if (providedIndex === index) {
                    return update
                }
                return subChapter
            }
        )
        const updatedChapters: PostChapterArgs[] = chapters.map((chapter) => {
            if (chapter?.number === chapterIndex + 1) {
                return {
                    ...chapter,
                    subchapters: updatedCurrentSubChapter
                }
            }
            return chapter
        })
        setChapters(updatedChapters)
    }
    const addChapter = () => {
        const newSubChapter: PostSubChapterArgs = {
            title: '',
            number: subChapters.length + 1,
            description: '',
            video_location: '',
            resources: []
        }
        const updatedSubChapters = [
            ...currentChapter?.subchapters,
            newSubChapter
        ]
        const updatedChapters: PostChapterArgs[] = chapters.map((chapter) => {
            if (chapter?.number === chapterIndex + 1) {
                return {
                    ...chapter,
                    subchapters: updatedSubChapters
                }
            }
            return chapter
        })
        setChapters(updatedChapters)
    }

    const removeChapter = () => {
        const updatedSubChapters = subChapters.slice(0, subChapters.length - 1)

        const updatedChapters: PostChapterArgs[] = chapters.map((chapter) => {
            if (chapter?.number === chapterIndex + 1) {
                return {
                    ...chapter,
                    subchapters: updatedSubChapters
                }
            }
            return chapter
        })

        setChapters(updatedChapters)
    }

    React.useEffect(() => {
        localStorage.setItem(
            'course',
            JSON.stringify({
                ...parsedLocalStorageCourse,
                chapters: chapters
            })
        )
    }, [chapters])

    return (
        <>
            <Button href="/course/new?step=1">
                <Typography variant="body1" className={classes.back}>
                    <ArrowBackIcon className={classes.arrowIcon} />
                    Retourner aux chapitres
                </Typography>
            </Button>
            <Typography className={classes.currentChapter} variant="h4">
                Chapitre {currentChapter.number}: {currentChapter?.title}
            </Typography>

            <div className={classes.container}>
                <div>
                    <div className={classes.header}>
                        <Typography variant="h3" gutterBottom>
                            Sous Chapitres
                        </Typography>
                    </div>

                    <div className={classes.subChapterList}>
                        {subChapters?.map((subchapter, index) => {
                            const currentLocalStorageSubChapter =
                                currentChapter.subchapters[index]

                            return (
                                <div
                                    className={classes.subChapter}
                                    key={`Chapter-${index}`}
                                >
                                    <div className={classes.section}>
                                        <Typography variant="h3" gutterBottom>
                                            Titre
                                        </Typography>
                                        <TextField
                                            className={
                                                classes.subChapterTitleTextField
                                            }
                                            onBlur={(e) => {
                                                onChangeSubChapter(index, {
                                                    ...subchapter,
                                                    title: e.target.value
                                                })
                                                setParsedLocalStorageCourse({
                                                    ...parsedLocalStorageCourse,
                                                    chapters
                                                })
                                            }}
                                            defaultValue={
                                                parsedLocalStorageCourse
                                                    .chapters[chapterIndex]
                                                    .subchapters[index]?.title
                                            }
                                            variant="outlined"
                                            label={`Titre du sous-chapitre ${subchapter.number}`}
                                            fullWidth
                                        />
                                    </div>
                                    <Divider light />
                                    <div className={classes.section}>
                                        <Typography variant="h3" gutterBottom>
                                            Description
                                        </Typography>
                                        <TextField
                                            onBlur={(e) => {
                                                onChangeSubChapter(index, {
                                                    ...subchapter,
                                                    description: e.target.value
                                                })
                                                setParsedLocalStorageCourse({
                                                    ...parsedLocalStorageCourse,
                                                    chapters
                                                })
                                            }}
                                            className={
                                                classes.subChapterDescriptionTextField
                                            }
                                            defaultValue={
                                                parsedLocalStorageCourse
                                                    .chapters[chapterIndex]
                                                    .subchapters[index]
                                                    ?.description
                                            }
                                            variant="outlined"
                                            label={`Descripion du sous chapitre ${subchapter.number}`}
                                            multiline
                                            fullWidth
                                        />
                                    </div>
                                    <Divider light />
                                    <div className={classes.section}>
                                        <Typography variant="h3" gutterBottom>
                                            Vidéo
                                        </Typography>
                                        <VideoDropzone
                                            defaultValues={
                                                currentLocalStorageSubChapter.video_location
                                            }
                                            getFile={(video) => {
                                                const videoLocation = video[0]
                                                    ? video[0].name
                                                    : ''

                                                onChangeSubChapter(index, {
                                                    ...subchapter,
                                                    video_location:
                                                        videoLocation
                                                })
                                            }}
                                        />
                                        <div
                                            className={
                                                classes.subChapterVideoLinkTextField
                                            }
                                        >
                                            <TextField
                                                onBlur={(e) => {
                                                    onChangeSubChapter(index, {
                                                        ...subchapter,
                                                        video_location:
                                                            e.target.value
                                                    })
                                                    setParsedLocalStorageCourse(
                                                        {
                                                            ...parsedLocalStorageCourse,
                                                            chapters
                                                        }
                                                    )
                                                }}
                                                defaultValue={
                                                    parsedLocalStorageCourse
                                                        .chapters[chapterIndex]
                                                        .subchapters[index]
                                                        ?.video_location
                                                }
                                                variant="outlined"
                                                label={`Adresse de la vidéo`}
                                                fullWidth
                                            />
                                        </div>
                                    </div>
                                    <Divider light />
                                    <div className={classes.section}>
                                        <Typography variant="h3" gutterBottom>
                                            Ressources
                                        </Typography>
                                        <RessourcesDropzone
                                            defaultValues={
                                                currentLocalStorageSubChapter.resources
                                            }
                                            getFiles={(files) => {
                                                const resources = files.map(
                                                    (file) => ({
                                                        title: file.name,
                                                        resource_location:
                                                            file.location
                                                    })
                                                )
                                                onChangeSubChapter(index, {
                                                    ...subchapter,
                                                    resources
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Button
                        classes={{ root: classes.subChapterAction }}
                        onClick={addChapter}
                        variant="contained"
                        color="primary"
                    >
                        Ajouter un sous-chapitre
                    </Button>
                    {subChapters.length > 1 ? (
                        <Button onClick={removeChapter}>
                            Supprimer un sous-chapitre
                        </Button>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default SubChapterEditor
