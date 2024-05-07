import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";

import { UseToggle } from "@/hooks/use-toggle";
import { Button } from "@/ui/design-system/button/button";
import { toast } from "react-toastify";
import { firestoreCreateDocument } from "@/api/firestore";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentification";


export const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading, toggle } = UseToggle({ initial: false });
  console.log(isLoading)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUsersDocument = async (collectionName: string, documentID: string, document: object) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      documentID,
      document)
    if (error) {
      toast.error(error.message);
      setIsLoading(false)
      return;
    }
    toast.success("Bienvenue sur l'App des singes coders")
    setIsLoading(false)
    reset()
    sendEmailVerificationProcedure()
  }

  const handleCreateUserAuthentification = async ({ email, password, how_did_hear }: RegisterFormFielsType) => {

    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }
    const userDocumentData ={
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      creation_date: new Date()

    }

    handleCreateUsersDocument("users", data.uid, userDocumentData)
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
      <Button action={toggle}></Button>
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