import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFielsType } from "@/types/forms";
import { UseToggle } from "@/hooks/use-toggle";

import { toast } from 'react-toastify';

import { auth } from "@/config/fireBase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseSignInUser } from "@/api/authentification";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoginContainer = () => {

  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading, toggle } = UseToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user", user)
      // ...
    } else {
      console.log("tu n'es pas connecté")

      // User is signed out
      // ...
    }
  });
 },[]);

  const handleSignInUser = async ({email, password}: LoginFormFielsType) => {

    const {error} = await firebaseSignInUser(email, password)
    console.log(error)
    console.log(password)

    if (error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }
    toast.success("Bienvenue sur les Coders Monkeys")
    setIsLoading(false)
    reset()
    router.push("/mon-espace")

  }

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true)

    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractaires"
      });
      setIsLoading(false)
      return;
    }
    handleSignInUser(formData)
  };


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




