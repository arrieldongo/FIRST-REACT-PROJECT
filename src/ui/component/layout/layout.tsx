import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface props {
  children?: React.ReactNode;
}

export const Layout = ({children}:props) =>  {
  return(
    <>
      <Navigation/>
        {children}
      <Footer/>
    </>
  )
}