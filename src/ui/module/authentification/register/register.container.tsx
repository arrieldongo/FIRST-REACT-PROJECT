import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";
import { useState } from "react";
import { firebaseCreateUser } from "@/api/authentification";
import { toast } from 'react-toastify';


export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserAuthentification = async ({ email, password, how_did_hear }: RegisterFormFielsType) => {

    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }
    toast.success("Bienvenue sur l'App des singes coders")
    setIsLoading(false)
    reset()
  }

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true)

    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractaires"
      });
      return;
    }
    handleCreateUserAuthentification(formData)
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>

  );
} 