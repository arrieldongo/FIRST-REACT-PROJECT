import { firebaseLogoutUser } from "@/api/authentification";
import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {

  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message)
      return
    }
    toast.success("A bientôt sur Coders Monkeys");

  }

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typographie variant="caption-4" weight="medium">
          <ActiveLink href="/mon-compte">Mon compte</ActiveLink>
        </Typographie>
        <Typographie variant="caption-4" weight="medium">
          <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
        </Typographie>
      </div>
      <Button action={handleLogoutUser} variant="danger">
        Déconnexion
      </Button>
    </Box>
  )
}