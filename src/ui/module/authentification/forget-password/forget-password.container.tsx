import { ForgetPasswordView } from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFielsType } from "@/types/forms";
import { UseToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
  const router = useRouter()
  const { value: isLoading, setValue: setIsLoading, toggle } = UseToggle();


  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgetPasswordFormFielsType>();

  const handleResetPassword = async ({email}: ForgetPasswordFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email);
    
    console.log(error)

    if (error) {
      console.log("dedans")

      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    console.log("hors")

    toast.success(`mail envoyé à ${email}`);
    setIsLoading(false);
    router.push("/connexion")
    reset()
  }

  const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
    setIsLoading(true);
    handleResetPassword(formData);
  }

  return (
    <ForgetPasswordView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}

    />
  );
}