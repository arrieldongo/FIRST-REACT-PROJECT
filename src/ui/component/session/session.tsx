import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionSatusTypes } from "@/types/session-status-type";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
import { useRouter } from "next/router";

interface props {
  children: React.ReactNode;
  SessionStatus?: SessionSatusTypes;
}

export const Session = ({ children, SessionStatus }: props) => {

  const { authUser, authUserIsLoading } = useAuth();
  const router = useRouter();

  if (SessionStatus === GUEST && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>
    }
    else (
      router.push("/mon-espace")
    )
  }

  if (SessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>
    }
    else (
      router.push("/connexion")
    )
  }

  if (!SessionStatus && !authUserIsLoading) {
    return <>{children}</>
  }
  return <ScreenSpinner />
}