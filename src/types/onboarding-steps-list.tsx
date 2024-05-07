export interface BaseComponentProps {
  next: () => void
  prev: () => void
  isFirstStep: () => boolean
  isFinaltStep: () => boolean
  stepsList: onboardingStepsListInterface[]
  getCurrentStep: () => onboardingStepsListInterface | undefined;
}

export interface onboardingStepsListInterface {
  id: number
  label: string
  component: {
    step: React.ComponentType<BaseComponentProps>
  }
}