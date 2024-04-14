import clsx from "clsx"

interface props {
  children: React.ReactNode
  className?: string
  padding_x?: string
  padding_y?: string
}

export const Box = ({children, className, padding_x ="px-9", padding_y="py-9"}:props) =>  {
  return( 
    <div className={clsx("w-full border border-gray-400 bg-white rounded",
      padding_x, 
      padding_y, 
      className
    )}>

      {children}
      
    </div>
  )
}