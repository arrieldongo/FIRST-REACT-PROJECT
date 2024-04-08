import clsx from "clsx";

interface props {
  children: React.ReactNode;
  className?: string;

}

export const Container = ({children, className}:props) => {
  return(
    <div className={clsx(
      "w-full max-w-7xl mx-auto px-5 lg:px-10",
      className,
       
       )}>

      {children}

    </div>

  );
}