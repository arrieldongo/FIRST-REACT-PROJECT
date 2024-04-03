import clsx from "clsx";
import 'tailwindcss/tailwind.css';



interface props{
  variant?: 
    | "display" 
    | "h1" 
    | "h2" 
    | "h3" 
    | "h4" 
    | "h5" 
    | "lead" 
    | "Body-lg" 
    | "Body-base" 
    | "Body-sm" 
    | "caption-1" 
    | "caption-2" 
    | "caption-3" 
    | "caption-4";
  
  component?: 
    | "h1" 
    | "h2" 
    | "h3" 
    | "h4" 
    | "h5" 
    | "div" 
    | "p" 
    | "span";

  theme?: "black" | "gray" | "white" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string
  children: React.ReactNode;
}

export const Typographie = ({
  variant = "h3",
   component: Component = "div",
   theme = "black", 
   weight = "regular",
   className,
   children
  
  
  }:props) => {

  let variantStyles: string = "", colorStyles: string = "";

  switch (variant) {

    case "display":
      variantStyles = "text-8xl";
      break;

    case "h1":
      variantStyles = "text-7xl";
      break;

    case "h2":
      variantStyles = "text-6xl";
      break;

    case "h3": // default
      variantStyles = "text-5xl";
      break;

    case "h4":
      variantStyles = "text-4xl";
      break;

    case "h5":
      variantStyles = "text-3xl";
      break;

    case "lead":
      variantStyles = "text-2xl";
      break;

    case "Body-lg":
      variantStyles = "text-lg";
      break;

    case "Body-base":
      variantStyles = "text-base";
      break;
    
    case "Body-sm":
      variantStyles = "text-sm";
      break;

    case "caption-1":
      variantStyles = "text-caption_1";
      break;

    case "caption-2":
      variantStyles = "text-caption_2";
      break;

    case "caption-3":
      variantStyles = "text-caption_3";
      break;

    case "caption-4":
      variantStyles = "text-caption_4";
      break;
  }

  switch (theme) {

    case "black": //default
      colorStyles =  "text-gray";
      break;

    case "gray":
      colorStyles =  "text-gray-700";
      break;

    case "white":
      colorStyles =  "text-white";
      break;

    case "primary":
      colorStyles =  "text-primary";
      break;

    case "secondary":
      colorStyles =  "text-secondary";
      break;
  
  default:
    break;

  }



 return <Component 
 className= {
  clsx(
    variantStyles,
    colorStyles,
    weight === "medium" && "font-medium",
    className,
  
  )} >


  {children}

 </Component>
}