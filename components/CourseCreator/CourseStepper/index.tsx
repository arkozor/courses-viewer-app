import React from 'react'

import { Button, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import axios from 'axios'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

type Props = {
    components: React.ReactNode[]
}

const CourseStepper = ({ components }: Props): JSX.Element => {
    const router = useRouter()
    const queryStep = router.query.step

    function getStepContent(step: number) {
        return components[step]
    }

    const currentUser = React.useContext(UserContext)
    const steps = ['Titre et catégorie', 'Chapitres', 'Publication']

    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
        {}
    )

    React.useEffect(() => {
        setActiveStep(Number(queryStep))
    }, [queryStep])

    const totalSteps = () => {
        return steps.length
    }

    const completedSteps = () => {
        return Object.keys(completed).length
    }

    const isLastStep = () => {
        return activeStep === totalSteps() - 1
    }

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps()
    }

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1
        setActiveStep(newActiveStep)
        router.push({
            query: {
                step: activeStep + 1
            }
        })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        router.push({
            query: {
                step: activeStep > 1 ? activeStep - 1 : 1
            }
        })
    }

    const handleComplete = () => {
        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        handleNext()
        if (activeStep === 2) {
            const course = JSON.parse(localStorage.getItem('course'))
            try {
                axios.post(
                    `${process.env.COURSE_API}`,
                    { ...course, publisher_id: currentUser.id },
                    {
                        headers: {
                            Authorization: `Bearer ${currentUser.token}`
                        },
                        timeout: 60000
                    }
                )
                localStorage.removeItem('course')
            } catch (e) {
                throw new Error("Le cours n'a pas pu être posté")
            }
        }
    }

    return (
        <div>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <div>
                        <Typography>Votre cours a été publié !</Typography>
                    </div>
                ) : (
                    <div>
                        <div>{getStepContent(activeStep)}</div>
                        <div className={classes.stepContainer}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                classes={{
                                    root: classes.stepButton
                                }}
                                variant="contained"
                                color="secondary"
                            >
                                Etape Précédente
                            </Button>

                            {activeStep !== steps.length && (
                                <Button
                                    classes={{
                                        root: classes.stepButton
                                    }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleComplete}
                                >
                                    {Number(activeStep) === 2
                                        ? 'Publier'
                                        : 'Etape suivante'}
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CourseStepper
