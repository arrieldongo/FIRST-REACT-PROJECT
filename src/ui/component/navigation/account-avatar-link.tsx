import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Link from "next/link";

export const AccountAvatarNavigationLink = () => {
  
  const { authUser } = useAuth();
  const { photoURL, displayName } = authUser

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <Avatar src={photoURL} alt={displayName ? displayName : "Avatar de l'utilisateur"} size="large" />
      <div className="max-w-160px">
        <Typographie variant="caption-2" weight="medium" className="truncate">
          {displayName ? displayName : "Bienvenue"}
        </Typographie>
        <Typographie variant="caption-4" weight="medium" theme="gray">
          Mon compte
        </Typographie>
      </div>

    </Link>
  );
}