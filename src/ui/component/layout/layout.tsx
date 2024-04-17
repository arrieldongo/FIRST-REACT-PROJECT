import { UserAccountContainer } from "@/ui/module/user-profile/user-account/user-account.container";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

interface props {
  children?: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}

export const Layout = ({ children, isDisplayBreadcrumbs = true, withSidebar }: props) => {


  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9 ">{children}</div>
        </div>
      </Container>)

  }
  else {
    view = <>{children}</>;
  }

  return (
    <>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </>
  )
}