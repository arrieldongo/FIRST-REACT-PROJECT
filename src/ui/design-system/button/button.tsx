import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface props {

  size?: "small" | "medium" |"large";
  variant?: "accent" | "secondary" |"outline"| "disable" |"ico";
  icon?:IconProps;
  iconTheme?: "accent" | "secondary" |"gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;

}

export const Button = ({
  size = "medium",
  variant,
  icon,
  iconTheme ="accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,

}:props) => {
 let variantStyles: string ="", sizeStyles: string ="", icoSize: number=0;

  switch (variant) {

    case "accent": //default
      variantStyles ="bg-primary hover:bg-primary-400 text-white rounded";
      break;

    case "secondary":
      variantStyles ="bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;

    case "outline":
      variantStyles ="bg-white hover:bg-gray-400/50 border border-gray-400 text-gray-900 rounded";
      break;

    case "disable":
      variantStyles ="bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
      break;

    case "ico":
      if( iconTheme === "accent"){
        variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if( iconTheme === "secondary"){
        variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if( iconTheme === "gray"){
        variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
    break;
  }

  switch (size) {
    case "small":
      sizeStyles= `text-caption_3 font-medium ${
        variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
      }`;
      icoSize= 18;
      break;

    case "medium": //default
      sizeStyles= `text-caption_2 font-medium ${
        variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
      }`;
      icoSize= 20;
      break;

    case "large":
      sizeStyles= `text-caption_1 font-medium ${
        variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
      }`;
      icoSize= 24;
      break;



  }

  return (
    <>
      <button
        type="button"
        className= {clsx(variantStyles, sizeStyles, icoSize, isLoading && "cursor-wait", "relative")}
        onClick={() => console.log("click")}
        disabled={disabled}
      >

        {isLoading && (

          <div className="absolute inset-0 flex items-center justify-center">
            {variant === "accent" || variant === "ico" ?
              (<Spinner variant="white"/>) 
            :(
              <Spinner size="small"/>)}
          </div>

        )}

        <div className= {clsx(isLoading && "invisible")}>

          {icon && variant === "ico" ? (
            <icon.icon size={icoSize}/>
          ) : (

          <div className={clsx( icon && "flex items-center gap-2")}>
            {icon && iconPosition === "left" && (
            <icon.icon size={icoSize}/>
            )}
            {children}
            {icon && iconPosition === "right" && (
            <icon.icon size={icoSize}/>
            )}
          </div>)}
          
        </div>
      </button>
    </>
  );
}