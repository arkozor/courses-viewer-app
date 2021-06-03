import classes from './style.module.scss';
import { Button } from '@material-ui/core'
import React from 'react'
import TitleEditor from './TitleEditor';
import ChapterEditor from './ChapterEditor';
import ContentEditor from './ContentEditor';

const CourseEditor = () => {
const [step, setStep] = React.useState(0)

    return (
    <div>
        <Button onClick={() => { if(step>0) setStep(step-1)}}>Previous step</Button>
        {step === 0? <TitleEditor/>:null}
        {step === 1? <ChapterEditor/>:null}
        {step === 2? <ContentEditor/>:null}
        <Button onClick={() => setStep(step+1)}>Next step</Button>
    </div>
    )
}

export default CourseEditor