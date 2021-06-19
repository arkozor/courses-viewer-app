import React from 'react'

import Button from '@material-ui/core/Button'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Stepper from '@material-ui/core/Stepper'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'

type Props = {
    components: React.ReactNode[]
}
const CourseStepper = ({ components }: Props): JSX.Element => {
    const router = useRouter()
    const queryStep = router.query.step
    function getStepContent(step: number) {
        return components[step]
    }

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

    const handleStep = (clickedStep: number) => () => {
        setActiveStep(clickedStep)
        router.push({
            query: {
                step: clickedStep
            }
        })
    }

    const handleComplete = () => {
        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        handleNext()
        if (activeStep === 2) {
            localStorage.removeItem('course')
        }
    }

    return (
        <div>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton
                            onClick={handleStep(index)}
                            completed={completed[index]}
                        >
                            {label}
                        </StepButton>
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
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Etape Précédente
                            </Button>

                            {activeStep !== steps.length && (
                                <Button
                                    variant="contained"
                                    color="primary"
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
