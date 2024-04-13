import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";
import { CodersMonkeysSlackView } from "./component/coders-monkeys-slack/coders-monkeys-slack.view";
import { CurrentCourseCtaView } from "./component/current-course-cta/current-course-cta.view";
import { FeaturedView } from "./component/featured/featured.view";
import { HeroTopView } from "./component/hero-top/hero-top.view";
import { HightLightListView } from "./component/hightlight-list/hightlight-list.view";

export const LandingPageView = () => {
  return(
    <>
      <HeroTopView/>
      <FeaturedView/>
      <CodersMonkeysSlackView/>
      <CurrentCourseCtaView/>
      <HightLightListView/>
      <CallToActionView/>
    </>
  );
}