import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnBoardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/component/container/container";
import { OnbordingTab } from "../../tabs/onbarding-tabs";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFielsType } from "@/types/forms";
import { UseToggle } from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";



export const ProfileStep = ({
  next,
  prev,
  isFirstStep,
  isFinaltStep,
  getCurrentStep,
  stepsList
}: BaseComponentProps) => {

  const { authUser } = useAuth();
  const { value: isLoading, setValue: setIsLoading } = UseToggle();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFielsType>();

  const { displayName, expertise, biographie } = authUser.UserDocument;

  useEffect(() => {

    const fieldsToUpdate: ("displayName" | "expertise" | "biographie")[] = [
      "displayName",
      "expertise",
      "biographie",
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.UserDocument[field])
    }

  }, []);

  const handleUpdateUsersDocument = async (formData: OnboardingProfileFormFielsType) => {
    console.log("authUser", authUser)
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData)
    if (error) {
      toast.error(error.message);
      setIsLoading(false)
      return;
    }
    toast.success("Bienvenue sur l'App des singes coders")
    setIsLoading(false)
    reset()
    next()
  }

  const onSubmit: SubmitHandler<OnboardingProfileFormFielsType> = async (formData) => {
    setIsLoading(true);

    if(
        displayName !== formData.displayName ||
        expertise !== formData.expertise ||
        biographie !== formData.biographie 
    ) {
      handleUpdateUsersDocument(formData)
    }

    setIsLoading(false);
    next();

  };

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
                Présente-toi !
              </Typographie>

              <Typographie variant="Body-base" component="p" theme="gray">
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation pour qu'on puisse mieux te connaître. On veut savoir qui tu es, ce que tu fais et comment t'as atterri ici. Plus on en saura sur toi, mieux on pourra personnaliser ton expérience sur notre plateforme.
              </Typographie>

            </div>
          </div>

          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepForm
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>

      </div>

      <OnBoardingFooter
        next={handleSubmit(onSubmit)}
        prev={prev}
        isFirstStep={isFirstStep}
        isFinaltStep={isFinaltStep}
        isLoading={isLoading}
      />
    </div>
  );
}