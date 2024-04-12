import { FeaturedView } from "./component/featured/featured.view";
import { HeroTopView } from "./component/hero-top/hero-top.view";

export const LandingPageView = () => {
  return(
    <>
      <HeroTopView/>
      <FeaturedView/>
    </>
  );
}