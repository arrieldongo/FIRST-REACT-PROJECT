import { useState } from "react";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFielsType } from "@/types/forms";

export const LoginContainer = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)
  }

  return (
    <LoginView
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