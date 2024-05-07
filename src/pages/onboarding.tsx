import { REGISTERED } from "@/lib/session-status";
import { Seo } from "@/ui/component/seo/seo";
import { Session } from "@/ui/component/session/session";
import { OnBoardingContainer } from "@/ui/module/onboarding/onboarding.container";

export default function Onboarding() {
  return (<>

    <Seo
      title="Onboarding"
      description="Description de la page onboarding"
    />

    <Session SessionStatus={REGISTERED} >
      <OnBoardingContainer />
    </Session>

  </>

  );
}
