import React from 'react'

import { Button } from '@material-ui/core'

import ChapterEditor from './ChapterEditor';
import PreviewEditor from './PreviewEditor';
import classes from './style.module.scss'
import TitleEditor from './TitleEditor';


const CourseEditor = (): JSX.Element => {
    const [step, setStep] = React.useState(0)

    // get chapters from chapter editor page
    const getChapters = (data: any[]) => {
        if(data) {
            window.localStorage.setItem("editData", JSON.stringify(data))
        }
        console.log(window.localStorage.getItem("editData"));
        
    }

    return (
        <div id="courseEditor">
            {step === 0? <TitleEditor/> : null}
            {step === 1? <ChapterEditor getChapters = {getChapters}/> : null}
            {step === 2? <PreviewEditor/> : null}
            <div className={classes.navigation}>
                <Button onClick={() => { if(step>0) setStep(step-1)}}>Previous step</Button>
                <Button onClick={() => {if(step<2) setStep(step+1)}}>Next step</Button>
            </div>
        </div>
    )
}

export default CourseEditor