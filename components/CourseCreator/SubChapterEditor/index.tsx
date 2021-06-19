import React from 'react'

// import { Button, TextField } from '@material-ui/core'

// import { PostCourseArgs } from '../type'

type Props = {
    chapterId: number
}

const SubChapterEditor = ({ chapterId }: Props): JSX.Element => {
    // const chapterIndex = chapterId - 1
    // const localStorageCourse =
    //     typeof window !== 'undefined' && localStorage.getItem('course')

    // const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
    //     localStorageCourse
    // )

    // const parsedLocalStorageCurrentSubChapters =
    //     parsedLocalStorageCourse?.chapters &&
    //     parsedLocalStorageCourse?.chapters[chapterIndex]?.subchapters

    // const [description, setDescription] = React.useState(
    //     parsedLocalStorageCurrentSubChapters[chapterIndex]?.description || ''
    // )
    // const [title, setTitle] = React.useState(
    //     parsedLocalStorageCurrentSubChapters[chapterIndex]?.title || ''
    // )

    // // React.useEffect(() => {
    // //     setDescription(parsedLocalStorageCurrentSubChapters?.description)
    // // }, [chapterId])

    // const [updatedSubChapters, setUpdatedSubChapters] = React.useState(
    //     parsedLocalStorageCurrentSubChapters
    // )
    // const onChangeDescription = (event) => {
    //     setDescription(event.target.value)
    //     setUpdatedSubChapters(
    //         updatedSubChapters.map((subChapters) =>
    //             subChapters?.number === chapterIndex
    //                 ? { ...subChapters, description: event.target.value }
    //                 : subChapters
    //         )
    //     )
    // }

    // const [updatedChapters, setUpdatedChapters] = React.useState(
    //     parsedLocalStorageCurrentSubChapters
    // )

    // const onChangeSubChapterTitle = (event, index) => {
    //     setTitle(event.target.value)
    //     setUpdatedChapters(
    //         updatedChapters.map((subChapter) =>
    //             subChapter.number === index + 1
    //                 ? { ...subChapter, title: event.target.value }
    //                 : subChapter
    //         )
    //     )
    // }

    // React.useEffect(() => {
    //     localStorage.setItem(
    //         'course',
    //         JSON.stringify({
    //             ...parsedLocalStorageCourse,
    //             chapters: parsedLocalStorageCourse.chapters.map((chapter) => {
    //                 if (chapter.number === chapterId) {
    //                     return [...chapter.subchapters, updatedSubChapters]
    //                 }
    //                 return chapter
    //             })
    //         })
    //     )
    // }, [description])

    return (
        <div>
            {/* <Typography variant="h3">
                {parsedLocalStorageCurrentChapter?.title}
            </Typography> */}
            {/* {parsedLocalStorageCurrentSubChapters.map((subChapter, index) => (
                <div key={`chapter-${index + 1}`}>
                    <TextField
                        onChange={(e) => onChangeSubChapterTitle(e, index)}
                        value={title}
                        variant="outlined"
                        placeholder={`Chapitre ${index + 1}`}
                        fullWidth
                    />
                    <Button>Accéder au chapitre</Button>
                </div>
            ))}
            description: {description} */}
            placeholder:{chapterId}
        </div>
    )
}

export default SubChapterEditor
