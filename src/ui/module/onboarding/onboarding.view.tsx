import { BaseComponentProps } from "@/types/onboarding-steps-list";


export const OnBoardingView = ({ getCurrentStep,
  next,
  prev,
  isFirstStep,
  isFinaltStep,
  stepsList }: BaseComponentProps) => {
  const Component = getCurrentStep()?.component.step

  if (getCurrentStep()?.component) {

    return (
      <div>
        {
          Component && (
            <Component
              getCurrentStep={ getCurrentStep}
              next={next }
              prev={prev}
              isFirstStep={isFirstStep }
              isFinaltStep={isFirstStep }
              stepsList={stepsList }
            />
          )
        }
      </div>


    )
  }

  return null
}