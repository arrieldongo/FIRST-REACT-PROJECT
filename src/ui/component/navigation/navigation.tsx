import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./account-avatar-link";

interface props { }

export const Navigation = ({ }: props) => {

  const { authUser } = useAuth();
  

  const authentificationSysthem = (
    <div className="flex items-center gap-2">
      <Button baseUrl="/connexion" size="small">Connexion</Button>
      <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
    </div>
  )

  return (
    <div className="border-b-2 border-gray-400">

      <Container className="py-1.5 flex items-center justify-between gap-7">

        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className=" flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Coder Monkeys
              </div>
              <Typographie
                variant="caption-4"
                component="span"
                theme="gray"

              >
                Trouve de l’inspiration & reçois des feedbacks !
              </Typographie>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-7">
          <Typographie variant="caption-3" component="div" className="flex items-center gap-7">
            <ActiveLink href="/design-system">design system</ActiveLink>
            <Link href="/formation">Formations</Link>
            <Link href="/contacts">Contacts</Link>
          </Typographie>

          {!authUser ? authentificationSysthem : <AccountAvatarNavigationLink/> }

        </div>

      </Container>

    </div>

  );
}