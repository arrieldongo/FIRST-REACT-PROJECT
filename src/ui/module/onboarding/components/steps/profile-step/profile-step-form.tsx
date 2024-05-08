import { FormsType } from "@/types/forms";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
  form: FormsType
}

export const ProfileStepForm = ({ form }: Props) => {
  const { register, errors, isLoading } = form;

  return (
    <form className="w-full max-w-md space-y-4">

      <Input
        label="Nom d'utilisateur"
        isLoading={isLoading}
        placeholder="John doe"
        type="text"
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner ton pseudo"
        id="displayName"
      />

      <Input
        label="Spécialité"
        isLoading={isLoading}
        placeholder="Développeur front-end React..."
        type="text"
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner ton expertise"
        id="expertise"
      />

      <Textarea
        label="Biographie"
        isLoading={isLoading}
        placeholder="Indique une courte description de toi et de ton parcours..."
        rows={5}
        type="text"
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner ce champ"
        id="biographie"
        required={false}
      />
    </form>
  );
}