import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Button } from "@/ui/design-system/button/button";

 interface props{}

 export const Navigation =({}:props) => {
    return(
      <div className="border-b-2 border-gray-400">
        <Container className="py-1.5 flex items-center justify-between gap-7">
          <div className="flex items-center gap-2.5">
            <Logo size="small"/>
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
          <div className="flex items-center gap-7">

            <Typographie variant="caption-3" component="div" className="flex items-center gap-7">
                <span>Projets</span>
                <span>Formations</span>
                <span>Contacts</span>
            </Typographie>

            <div className="flex items-center gap-2">
              <Button size="small">Connexion</Button>
              <Button size="small" variant="secondary">Rejoindre</Button>
            </div>
          </div>
        </Container>

      </div>

    );
 }