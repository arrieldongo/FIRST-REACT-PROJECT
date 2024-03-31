

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
  
  children: React.ReactNode;
}

export const Typographie = ({variant, component, children}:props) => {
 return <>
  {children}
 </>
}