import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  // const footerNavigationList = footerApplicationLinks.map((element) => (
  //   <div key={uuidv4()}>{element.label}</div>
  // ));

  return(
      <div className=" bg-gray">

        <Container className="flex justify-between pt-16">
          <div className="flex flex-col items-center gap-1">
            <Typographie
              variant="caption-1"
              theme="white"
              weight="medium"

            > Formations gratuites </Typographie>

            <Typographie
            variant="caption-3"
            theme="gray"

            > Abonne-toi à la chaîne !</Typographie>

            <a href="https://www.youtube.com" target="_blank" >
              <Image 
                src="/assets/svg/YTB.svg"
                width={229}
                height={216}
                alt="Remote Monkey | Youtube"
              />
            </a>

          </div>
          <div className=""><FooterLink/></div>
        </Container>

        <Container className="pt-9 pb-11 space-y-11">
          <hr className="text-gray-800" />
          <div className="flex items-center justify-between">

            <Typographie variant="caption-4" theme="gray">
              {`Copyright © ${currentYear} | Propulsed by`}
              {" "}
              < a href="https://arnaud-desportes.fr" target="_blank" className="underline">
                Arnaud desportes
              </a>
              {` - Remote monkey SASU`}
            </Typographie>
            
            <div className=""></div>
          </div>
        </Container>

      </div>
  );
}

const FooterLink = () =>{

  const listLink = footerApplicationLinks.map((link) => (
    
    <div key={uuidv4()}>

      {link.type === "internal" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">{link.label}</a>
      )}

    </div>
   
  ));


  return(
    <div className="min-w-[190px]">
        <Typographie
        theme="white"
        variant="caption-2"
        weight="medium"
        className="pb-5"
        >
            Titre
        </Typographie>

        <Typographie
          theme="gray"
          variant="caption-3"
          className="space-y-4"
        >
          {listLink}
        </Typographie>
    </div>
  );

}