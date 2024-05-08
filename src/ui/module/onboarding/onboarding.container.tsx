import { useState } from "react"
import { OnBoardingView } from "./onboarding.view"
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step"
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list"
import { ProfileStep } from "./components/steps/profile-step/profile-step"
import { AvatarStep } from "./components/steps/avatar-step/avatar-step"

export const OnBoardingContainer = () => {

  const [currentSetp, setCurrentSetp] = useState<number>(1)

  const stepsList: onboardingStepsListInterface[] = [
    { id: 1, label: "Bienvenue", component: { step: WelcomeStep } },
    { id: 2, label: "Profile", component: { step: ProfileStep } },
    { id: 3, label: "Avatar", component: { step: AvatarStep } },
  ];

  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentSetp);
  };

  const next = () => {
    if (currentSetp < stepsList.length) {
      setCurrentSetp(currentSetp + 1)
    }
  };

  const prev = () => {
    if (currentSetp > 1) {
      setCurrentSetp(currentSetp - 1)
    }
  };

  const isFirstStep = () => {
    if (currentSetp === 1) {
      return true;
    }
    return false
  };

  const isFinaltStep = () => {
    if (currentSetp === stepsList.length) {
      return true;
    }
    return false
  };


  return (
    <OnBoardingView
      getCurrentStep={getCurrentStep}
      next={next}
      prev={prev}
      isFirstStep={isFirstStep}
      isFinaltStep={isFinaltStep}
      stepsList={stepsList}

    />
  );
}