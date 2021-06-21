import React from 'react'

import ChapterEditor from 'components/CourseCreator/SubChapterEditor'
import { useRouter } from 'next/router'

const ChapterEditorPage = (): JSX.Element => {
    const router = useRouter()

    return router.query.id ? (
        <div>
            <ChapterEditor chapterId={Number(router.query.id)} />
        </div>
    ) : (
        <div>Aucun chapitre</div>
    )
}

export default ChapterEditorPage
