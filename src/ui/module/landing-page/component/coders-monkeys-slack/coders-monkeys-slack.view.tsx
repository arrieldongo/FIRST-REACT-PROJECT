import { TypeLinks } from "@/lib/type-links";
import { Container } from "@/ui/component/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";

export const CodersMonkeysSlackView = () => {
  return(
    <Container className="flex justify-between">

      <div className="flex flex-col justify-center max-w-2xl space-y-5">

        <div className="flex items-center gap-2">
          <Logo size="very-small"></Logo>
          <Typographie variant="caption-2" component="span" weight="medium">
            Coders Monkeys
          </Typographie>
        </div>

        <Typographie variant="h2" component="h2">
          Rejoins-nous sur le Slack des Singes codeurs
        </Typographie>

        <Typographie variant="Body-lg" component="p" theme="gray" className="max-w-lg">
          Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des nouveaux potes !
        </Typographie>

        <Button baseUrl="/#" linkType={TypeLinks.EXTERNAL}>
          Rejoindre le groupe d’aide
        </Button>

      </div>

      <div className="relative w-[600px] h-[600px]">
        <Image
          fill
          src={"/assets/svg/SlackLogo.svg"}
          alt="Illustration du logo slack"
        />
      </div>

    </Container>
  ); 
}