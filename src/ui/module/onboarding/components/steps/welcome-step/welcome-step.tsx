import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnBoardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/component/container/container";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";
import { OnbordingTab } from "../../tabs/onbarding-tabs";

export const WelcomeStep = ({
  next,
  isFirstStep,
  isFinaltStep,
  getCurrentStep,
  stepsList
}: BaseComponentProps) => {

  return (
    <div className="relative h-screen pb-[91px]">

      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4">
              <OnbordingTab 
              tabs={stepsList}
              getCurrentStep={getCurrentStep}
              
              />

              <Typographie variant="h1" component="h1">
                Bienvenue sur l’appli des singes codeurs !
              </Typographie>

              <Typographie variant="Body-base" component="p" theme="gray">
                Viens traîner avec des développeurs aussi fous que toi, montre tes projets persos et reçois des feedbacks constructifs (ou fais-toi carrément descendre). Prêt à créer des trucs incroyables ?
              </Typographie>
            </div>
          </div>

          <div className="flex items-center h-full col-span-6">
            <div className="w-full">
              <Image
                src="/assets/svg/rocket.svg"
                alt=""
                width={811}
                height={596}


              />
            </div>
          </div>
        </Container>

      </div>

      <OnBoardingFooter
        next={next}
        isFirstStep={isFirstStep}
        isFinaltStep={isFinaltStep}
      />

    </div>
  );
}