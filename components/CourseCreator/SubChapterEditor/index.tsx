import React from 'react'

import { Typography, TextField, Button } from '@material-ui/core'
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

    const [
        parsedLocalStorageCourse,
        setParsedLocalStorageCourse
    ] = React.useState<PostCourseArgs>(JSON.parse(localStorageCourse))

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
            video_location: {
                name: '',
                preview: ''
            },
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
        <div className={classes.container}>
            <Button href="/course/new?step=1" className={classes.back}>
                <Typography variant="h4">
                    <ArrowBackIcon /> Retourner aux chapitres
                </Typography>
            </Button>
            <div className={classes.titleContainer}>
                <Typography variant="h3" gutterBottom>
                    Titre: {currentChapter?.title}
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Sous Chapitres
                </Typography>
                <Typography color="primary" variant="subtitle1" gutterBottom>
                    Résumez en quelques mots le contenu de votre sous chapitre.
                </Typography>
                {subChapters?.map((subchapter, index) => {
                    const currentLocalStorageSubChapter =
                        currentChapter.subchapters[index]

                    return (
                        <div
                            className={classes.subChapter}
                            key={`Chapter-${index}`}
                        >
                            <TextField
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
                                    parsedLocalStorageCourse.chapters[
                                        chapterIndex
                                    ].subchapters[index]?.title
                                }
                                variant="outlined"
                                placeholder={`Sous-chapitre ${subchapter.number}`}
                                fullWidth
                            />
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
                                defaultValue={
                                    parsedLocalStorageCourse.chapters[
                                        chapterIndex
                                    ].subchapters[index]?.description
                                }
                                variant="outlined"
                                placeholder={`Descripion du sous chapitre ${subchapter.number}`}
                                multiline
                                fullWidth
                            />
                            <VideoDropzone
                                defaultValues={
                                    currentLocalStorageSubChapter.video_location
                                }
                                getFile={(video) => {
                                    onChangeSubChapter(index, {
                                        ...subchapter,
                                        video_location: video.length
                                            ? {
                                                  name: video[0].name,
                                                  preview: video[0].name.preview
                                              }
                                            : undefined
                                    })
                                }}
                            />
                            <RessourcesDropzone
                                defaultValues={
                                    currentLocalStorageSubChapter.resources
                                }
                                getFiles={(files) => {
                                    const resources = files.map((file) => ({
                                        name: file.name,
                                        preview: file.preview
                                    }))
                                    onChangeSubChapter(index, {
                                        ...subchapter,
                                        resources
                                    })
                                }}
                            />
                        </div>
                    )
                })}
                <Button onClick={addChapter}>Ajouter un sous-chapitre</Button>
                {subChapters.length > 1 ? (
                    <Button onClick={removeChapter}>
                        Supprimer un sous-chapitre
                    </Button>
                ) : null}
            </div>
        </div>
    )
}

export default SubChapterEditor
