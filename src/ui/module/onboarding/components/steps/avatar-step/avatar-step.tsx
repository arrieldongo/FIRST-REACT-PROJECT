import { useAuth } from "@/context/AuthUserContext";
import { UseToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/component/container/container";
import { useForm } from "react-hook-form";
import { OnbordingTab } from "../../tabs/onbarding-tabs";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { OnBoardingFooter } from "../../footer/onboarding-footer";

export const AvatarStep = ({
  next,
  prev,
  isFinaltStep,
  getCurrentStep,
  stepsList
}: BaseComponentProps) => {

  const { authUser } = useAuth();
  console.log("authUser", authUser);

  const { value: isLoading, setValue: setIsLoading } = UseToggle();


  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm();

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
                Dèrnière étape !
              </Typographie>

              <Typographie variant="Body-base" component="p" theme="gray">
                C’est sûr t'as une tête à être sur Coders Monkeys ! Mais on a besoin de ta plus belle photo de profil pour que tout le monde puisse voir à quel point tu es incroyable. Mettre une photo sympa, c'est la garantie de te faire remarquer et de faire craquer les développeurs en quête de nouveaux contacts. Alors montre-nous ta belle gueule et rejoins la communauté !
              </Typographie>

            </div>
          </div>

          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">

            </div>
          </div>
        </Container>

      </div>

      <OnBoardingFooter
        next={next}
        prev={prev}
        isFinaltStep={isFinaltStep}
        isLoading={isLoading}
      />
    </div>
  );
}