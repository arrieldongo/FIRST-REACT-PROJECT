import clsx from "clsx";
import { Typographie } from "../typographie/typographie";

interface Props {
  isLoading: boolean;
  placeholder: string;
  rows?: number;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutoComplete?: boolean;
  label?: string;
}

export const Textarea = ({
  isLoading,
  placeholder,
  rows = 5,
  register,
  errors,
  errorMsg = "Il y'a une erreur",
  id,
  required = true,
  isAutoComplete = false,
  label,
}: Props) => {
  return (
    <div className="space-y-2">

      {label && (
        <Typographie variant="caption-3" component="div" theme={errors[id] ? "danger" : "gray-600"}>
          {label}
        </Typographie>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        className={clsx(
          isLoading ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white",
          errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
          "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary border-gray-400"
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
  )
}