import { Container } from "@/ui/component/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";

export const HeroTopView = () => {
  return(
    <>
      <Container className="relative pt-40 pb-52 overflow-hidden">
        <div className="w-full max-w-2xl space-y-5 ">
          <Typographie variant="h1" component="h1" className="max-w-lg">
            Rejoins les singes codeurs !
          </Typographie>

          <Typographie variant="Body-lg" theme="gray" component="p" className="max-w-xl">
            RIci, on se prend pas la tête, mais on code comme des bêtes !           Rejoins notre tribu de singes codeurs, partage tes projets les plus fous et fais-toi de nouveaux amis développeurs.
          </Typographie>

          <div className="space-x-5 pt-2.5">
            <Button baseUrl="">Commencer</Button>
            <Button baseUrl="" variant="secondary">En savoir plus</Button>
          </div>

        </div>

        <Image
          src="/assets/svg/rocket.svg"
          alt="Illustration d'une fusée"
          width={811}
          height={596}
          className="absolute top-0 right-0 z-0"
        
        />

      </Container>
    
    </>
  );
}