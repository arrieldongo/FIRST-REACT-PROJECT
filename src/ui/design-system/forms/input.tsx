import clsx from "clsx";
import { Typographie } from "../typographie/typographie";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  isAutoComplete?: boolean;

}

export const Input = ({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Il y'a une erreur",
  id,
  required = true,
  isAutoComplete = false,

}: Props) => {

  
  return (

    <div className="space-y-2">

      <input type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-n one focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: {   
            value: required,
            message: errorMsg
          }
        })}
        autoComplete={isAutoComplete}
      />

      {errors[id] && (
        <Typographie variant="caption-4" component="div" theme="danger">
          {errors[id]?.message}
        </Typographie>
      )}

    </div>

  );
}