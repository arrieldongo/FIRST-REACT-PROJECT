import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface props {
  children?: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({children, isDisplayBreadcrumbs=true}:props) =>  {
  return(
    <>
      <Navigation/>
      {isDisplayBreadcrumbs && <Breadcrumbs/>}
      {children}
      <Footer/>
    </>
  )
}