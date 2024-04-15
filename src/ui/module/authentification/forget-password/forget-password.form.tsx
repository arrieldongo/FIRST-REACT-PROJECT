import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}

export const ForgetPasswordForm = ({ form }: Props) => {

  const {
    errors,
    onSubmit,
    isLoading,
    register,
    handleSubmit, } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">

      <Input
        isLoading={isLoading}
        placeholder="arrieldongo@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Il y'a une erreur"
        id="email"
      />

      <Button isLoading={isLoading} type="submit" fullWhith>
        Envoyer 
      </Button>
    </form>

  )
}