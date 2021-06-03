import React from 'react'

import { Button } from '@material-ui/core'

import ChapterEditor from './ChapterEditor';
import ContentEditor from './ContentEditor';
import PreviewEditor from './PreviewEditor';
import TitleEditor from './TitleEditor';


const CourseEditor = (): JSX.Element => {
    const [step, setStep] = React.useState(0)

    return (
        <div>
            <Button onClick={() => { if(step>0) setStep(step-1)}}>Previous step</Button>
            {step === 0? <TitleEditor/>:null}
            {step === 1? <ChapterEditor/>:null}
            {step === 2? <ContentEditor/>:null}
            {step === 3? <PreviewEditor/>:null}
            <Button onClick={() => setStep(step+1)}>Next step</Button>
        </div>
    )
}

export default CourseEditor