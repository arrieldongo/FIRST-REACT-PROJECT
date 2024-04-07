import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";

interface props {
  size?: "small" | "medium" |"large";
  variant?: "primary" | "white";
}

export const Spinner = ({
  size = "medium",
  variant= "primary"
}:props) => {
  let variantStyles: string ="", sizeStyles: string= "";

  switch (size) {
    case "small":
      sizeStyles =  "w-5 h-5";
      break;

    case "medium": //default
      sizeStyles =  "w-9 h-9";
      break;
 
    case "large":
      sizeStyles =  "w-12 h-12";
      break;
  
  }

  switch (variant) {
    case "primary": //default
      variantStyles =  "text-primary";
      break;

    case "white": 
      variantStyles =  "text-white";
      break;
  }

    return ( 
    
        <CgSpinner className={clsx(sizeStyles, variantStyles, "animate-spin")} />
      
    );

}